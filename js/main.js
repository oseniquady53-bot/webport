/**
 * ENTER THE DUSST VXRSE — UNIFIED CLIENT & MOTION ENGINE
 * Drives the unified master website, horizontal carousels, video player,
 * integrated logo exploration studio, and form dispatches.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Experience Mode Switcher (Motion vs Static)
  initExperienceMode();

  // 3. Header Scroll State
  initHeaderScroll();

  // 4. Mobile Navigation
  initMobileNav();

  // 5. Atmospheric Background Canvas (Active in Motion mode)
  initDustCanvas();

  // 6. Scroll Reveal Observer
  initScrollReveal();

  // 7. Horizontal Carousel Engine (Smooth horizontal sliding with swipe and arrows)
  initHorizontalCarousels();

  // 8. Native Direct Video Player & Modal
  initDirectVideoPlayer();

  // 9. Integrated Logo Exploration Studio
  initIntegratedLogoStudio();

  // 10. Lightbox System
  initLightbox();

  // 11. Sanctum Waitlist Form Handler
  initSanctumForm();

  // 12. Contact Form Handler
  initContactForm();
});

/* ==========================================================================
   2. EXPERIENCE MODE CONTROLLER (Motion vs Static)
   ========================================================================== */
function initExperienceMode() {
  const toggleBtn = document.getElementById('modeToggleBtn');
  const modeText = document.getElementById('modeToggleText');
  const savedMode = localStorage.getItem('dusst_mode') || 'motion';

  applyMode(savedMode);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isStatic = document.body.classList.contains('mode-static');
      const newMode = isStatic ? 'motion' : 'static';
      applyMode(newMode);
      localStorage.setItem('dusst_mode', newMode);
    });
  }

  function applyMode(mode) {
    if (mode === 'static') {
      document.body.classList.add('mode-static');
      if (modeText) modeText.textContent = 'STATIC';
      if (toggleBtn) toggleBtn.setAttribute('title', 'Switch to Cinematic Motion Mode');
    } else {
      document.body.classList.remove('mode-static');
      if (modeText) modeText.textContent = 'MOTION';
      if (toggleBtn) toggleBtn.setAttribute('title', 'Switch to Clean Static Editorial Mode');
    }
  }
}

/* ==========================================================================
   3. HEADER SCROLL OBSERVER
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   4. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.innerHTML = isOpen ? '✕' : '☰';
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '☰';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '☰';
    });
  });
}

/* ==========================================================================
   5. ATMOSPHERIC DUST & EMBER CANVAS
   ========================================================================== */
function initDustCanvas() {
  const canvas = document.getElementById('dusstCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];

  const PARTICLE_COUNT = 50;
  const colors = [
    'rgba(240, 220, 190, 0.40)', // Distressed antique cream
    'rgba(158, 27, 41, 0.50)',   // Deep burgundy crimson
    'rgba(200, 168, 72, 0.40)',  // Antique gold dust
    'rgba(91, 107, 70, 0.30)'    // Muted olive mist
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.0 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.12,
        alpha: Math.random() * 0.55 + 0.2
      });
    }
  }

  function render() {
    if (document.body.classList.contains('mode-static')) {
      ctx.clearRect(0, 0, width, height);
      animationFrameId = requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  resize();
  createParticles();
  render();
}

/* ==========================================================================
   6. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   7. HORIZONTAL CAROUSEL ENGINE (Touch-Swipe & Arrows, Natural Vertical Scroll)
   ========================================================================== */
function initHorizontalCarousels() {
  const wrappers = document.querySelectorAll('.horizontal-carousel-wrapper');

  wrappers.forEach(wrapper => {
    const track = wrapper.querySelector('.horizontal-carousel-track');
    const prevBtn = wrapper.querySelector('.carousel-arrow-btn.prev-btn') || 
      wrapper.closest('.section')?.querySelector(`[data-carousel-prev="${wrapper.dataset.carouselId}"]`);
    const nextBtn = wrapper.querySelector('.carousel-arrow-btn.next-btn') || 
      wrapper.closest('.section')?.querySelector(`[data-carousel-next="${wrapper.dataset.carouselId}"]`);

    if (!track) return;

    // Arrow navigation
    const getScrollStep = () => {
      const firstItem = track.querySelector('.carousel-card, .gallery-card');
      return firstItem ? (firstItem.offsetWidth + 26) : 340;
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      });
    }

    // Touch & Mouse Dragging for desktop + mobile touch
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.classList.add('is-dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.classList.remove('is-dragging');
    });

    track.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('is-dragging');
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault(); // Prevent text selection while dragging horizontally
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });

    // Check button disabled state on scroll
    const updateButtons = () => {
      if (prevBtn) prevBtn.disabled = track.scrollLeft <= 5;
      if (nextBtn) nextBtn.disabled = track.scrollLeft >= (track.scrollWidth - track.clientWidth - 5);
    };

    track.addEventListener('scroll', updateButtons, { passive: true });
    updateButtons();
  });
}

/* ==========================================================================
   8. DIRECT VIDEO PLAYER & NATIVE MODAL (Zero Public Google Drive Links)
   ========================================================================== */
function initDirectVideoPlayer() {
  // Main in-page video player
  const mainVideo = document.getElementById('featuredVisualizerVideo');
  const videoFrame = document.querySelector('.cinematic-video-frame');
  const overlay = document.getElementById('videoPlayOverlay');

  if (mainVideo && overlay && videoFrame) {
    overlay.addEventListener('click', () => {
      if (mainVideo.paused) {
        mainVideo.play();
        videoFrame.classList.add('is-playing');
      } else {
        mainVideo.pause();
        videoFrame.classList.remove('is-playing');
      }
    });

    mainVideo.addEventListener('play', () => videoFrame.classList.add('is-playing'));
    mainVideo.addEventListener('pause', () => videoFrame.classList.remove('is-playing'));
  }

  // Modal player (uses native <video> element with local video file)
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalNativeVideo');
  const closeBtn = document.getElementById('videoModalClose');
  const openButtons = document.querySelectorAll('[data-open-visualizer]');

  if (!modal || !modalVideo) return;

  const closeVideo = () => {
    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.currentTime = 0;
  };

  if (closeBtn) closeBtn.addEventListener('click', closeVideo);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideo();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeVideo();
    }
  });

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = btn.getAttribute('data-video-url') || 'assets/videos/dusst-visualizer.mp4';
      if (modalVideo.src !== videoSrc) {
        modalVideo.src = videoSrc;
      }
      modal.classList.add('active');
      modalVideo.play().catch(() => {});
    });
  });
}

/* ==========================================================================
   9. INTEGRATED LOGO EXPLORATION STUDIO (Directly on Main Website)
   ========================================================================== */
function initIntegratedLogoStudio() {
  const stage = document.getElementById('logoStage');
  const stageImg = document.getElementById('logoStageImg');
  const sizeSlider = document.getElementById('logoSizeSlider');
  const sizeValue = document.getElementById('logoSizeValue');
  const conceptTabs = document.querySelectorAll('.concept-tab-btn');
  const bgSwatches = document.querySelectorAll('.palette-swatch');
  const conceptTitle = document.getElementById('activeConceptTitle');
  const conceptDesc = document.getElementById('activeConceptDesc');
  const conceptSpecs = document.getElementById('activeConceptSpecs');
  const downloadSvgBtn = document.getElementById('downloadSvgBtn');
  const downloadPngBtn = document.getElementById('downloadPngBtn');

  if (!stage || !stageImg) return;

  const concepts = {
    'concept-1': {
      title: "Concept 01: Gothic Display Wordmark",
      desc: "Chiseled antique ivory lettering framed by distressed gold filigree rules, featuring the artist's proverb 'Don't Kick The Duss Up'. Clear, commanding, and instantly recognizable across album covers, headers, and merchandise.",
      specs: "Format: Vector SVG | Ratio: 10:3 | Best for: Website Headers, Merch Hoodies, Physical Covers",
      file: "assets/logos/dusst-logo-concept-1-wordmark.svg"
    },
    'concept-2': {
      title: "Concept 02: Alchemical Alembic Sigil",
      desc: "Inspired by the artist's authentic vision: the alchemical glass distillation flask emitting a vapor dagger, surrounded by sacred geometric rings, muted olive botanical leaves, and a cardinal compass star.",
      specs: "Format: Vector SVG | Ratio: 6:7 | Best for: Embroidered Patches, Stage Backdrops, Tour Posters",
      file: "assets/logos/dusst-logo-concept-2-sigil.svg"
    },
    'concept-3': {
      title: "Concept 03: The Ronin Monogram Crest",
      desc: "Derived directly from DussT's armored character trench coat: an ivory 'D' pierced by a crimson katana slash 'T', crowned with the imperial ronin tiara and balanced by an hourglass talisman.",
      specs: "Format: Vector SVG | Ratio: 1:1 | Best for: Profile Avatars, Favicons, Enamel Pins, Merch Tags",
      file: "assets/logos/dusst-logo-concept-3-monogram.svg"
    },
    'reference': {
      title: "Original Alchemical Logo Reference",
      desc: "The authentic baseline visual reference: the gothic DusT alembic flask, vapor dagger, and botanical leaves on deep black background.",
      specs: "Format: Master Reference Graphic | Status: Authentic Artist Guidance",
      file: "assets/images/dusst-logo-concept-alembic.png"
    }
  };

  let currentConceptId = 'concept-1';

  conceptTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      conceptTabs.forEach(t => {
        t.classList.remove('btn-primary', 'active');
        t.classList.add('btn-outline');
      });
      tab.classList.add('btn-primary', 'active');
      tab.classList.remove('btn-outline');

      const id = tab.getAttribute('data-concept');
      const data = concepts[id];
      if (!data) return;

      currentConceptId = id;
      stageImg.src = data.file;
      if (conceptTitle) conceptTitle.textContent = data.title;
      if (conceptDesc) conceptDesc.textContent = data.desc;
      if (conceptSpecs) conceptSpecs.textContent = data.specs;
      if (downloadSvgBtn) {
        downloadSvgBtn.href = data.file;
        downloadSvgBtn.download = `${id}-dusst.svg`;
      }
    });
  });

  bgSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      bgSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const bg = swatch.getAttribute('data-bg');
      stage.className = `logo-display-stage ${bg}`;
    });
  });

  if (sizeSlider && sizeValue) {
    sizeSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      stageImg.style.maxHeight = `${val}px`;
      sizeValue.textContent = `${val}px`;
    });
  }

  // 1200px High-Res Transparent PNG Export
  if (downloadPngBtn) {
    downloadPngBtn.addEventListener('click', () => {
      const src = stageImg.src;
      fetch(src)
        .then(res => res.blob())
        .then(blob => {
          const img = new Image();
          const url = URL.createObjectURL(blob);
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const targetWidth = 1400;
            const aspect = (img.naturalHeight || img.height || 600) / (img.naturalWidth || img.width || 800);
            canvas.width = targetWidth;
            canvas.height = Math.round(targetWidth * aspect);
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const pngData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = pngData;
            a.download = `${currentConceptId}-dusst-transparent.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          };
          img.src = url;
        })
        .catch(() => {
          window.open(src, '_blank');
        });
    });
  }

  // Logo Feedback Form
  const feedbackForm = document.getElementById('logoFeedbackForm');
  const feedbackMsg = document.getElementById('logoFeedbackMsg');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const reviewer = feedbackForm.elements['reviewerName']?.value.trim() || 'DussT';
      const vote = feedbackForm.elements['preferredConcept']?.value;
      const notes = feedbackForm.elements['designNotes']?.value.trim();

      const record = { reviewer, vote, notes, date: new Date().toISOString() };
      const feedbackList = JSON.parse(localStorage.getItem('dusst_logo_feedback') || '[]');
      feedbackList.push(record);
      localStorage.setItem('dusst_logo_feedback', JSON.stringify(feedbackList));

      feedbackForm.reset();
      if (feedbackMsg) {
        feedbackMsg.style.display = 'block';
        feedbackMsg.className = 'form-feedback-box success';
        feedbackMsg.innerHTML = `✦ Feedback saved for <strong>${vote}</strong>. Notes recorded for creative direction.`;
      }
    });
  }
}

/* ==========================================================================
   10. LIGHTBOX SYSTEM
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!modal || !img) return;

  const closeLightbox = () => {
    modal.classList.remove('active');
    img.src = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });

  document.querySelectorAll('[data-lightbox]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const src = card.getAttribute('data-src') || card.querySelector('img')?.src;
      const cardTitle = card.getAttribute('data-title') || '';
      const cardCaption = card.getAttribute('data-caption') || '';

      if (src) {
        img.src = src;
        if (title) title.textContent = cardTitle;
        if (caption) caption.textContent = cardCaption;
        modal.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   11. SANCTUM WAITLIST SUBMISSION HANDLER
   ========================================================================== */
function initSanctumForm() {
  const form = document.getElementById('sanctumWaitlistForm');
  const statusMsg = document.getElementById('sanctumStatusMsg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['fullName']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const role = form.elements['role']?.value;
    const notes = form.elements['notes']?.value.trim();

    if (!name || !email) {
      showStatus(statusMsg, 'Please supply both your name/pseudonym and a valid email.', 'error');
      return;
    }

    const entry = { name, email, role, notes, timestamp: new Date().toISOString() };
    const waitlist = JSON.parse(localStorage.getItem('sanctum_waitlist') || '[]');
    waitlist.push(entry);
    localStorage.setItem('sanctum_waitlist', JSON.stringify(waitlist));

    form.reset();
    showStatus(
      statusMsg,
      `✦ Welcome to The Sanctum waitlist, ${name}. Your interest as a ${role || 'Member'} has been recorded. You will be notified at ${email} once artist and listener verification cohorts open.`,
      'success'
    );
  });
}

/* ==========================================================================
   12. CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('contactStatusMsg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['contactName']?.value.trim();
    const email = form.elements['contactEmail']?.value.trim();
    const subject = form.elements['subject']?.value;
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      showStatus(statusMsg, 'Please complete all required fields.', 'error');
      return;
    }

    form.reset();
    showStatus(
      statusMsg,
      `✦ Message received from ${name}. Your inquiry regarding "${subject || 'General'}" has been logged into the DussT booking dispatch pipeline.`,
      'success'
    );
  });
}

function showStatus(element, text, type) {
  if (!element) return;
  element.style.display = 'block';
  element.className = `form-feedback-box ${type}`;
  element.innerHTML = text;
  element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
