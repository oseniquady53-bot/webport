/**
 * DUSST — EDITORIAL MOTION ENGINE
 * Architecture & motion physics based on Klein (UK) / editorial-motion.js
 * Co-created with Quady Oseni / OQ
 */
(() => {
  // 1. Reduced Motion Compliance
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 2. Sticky Header Scroll State
  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // 3. Mobile Navigation Drawer
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', !isOpen);
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
      menuBtn.textContent = !isOpen ? 'Close' : 'Menu';
      body.classList.toggle('menu-open', !isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = 'Menu';
        body.classList.remove('menu-open');
      });
    });
  }

  // 4. Staggered Editorial Reveal (Klein IntersectionObserver System)
  if (!prefersReduced && ('IntersectionObserver' in window)) {
    const selectors = [
      '.new-music-card',
      '.video-feature-card',
      '.editorial-heading',
      '.about-image',
      '.about-statement',
      '.sanctum-pillar-card',
      '.sanctum-waitlist-box',
      '.gallery-item',
      '.creator-info',
      '.creator-media',
      '.booking-inner',
      '.footer-top',
      '.footer-bottom',
      '.brand-identity-card',
      '.release-promo'
    ];

    const nodes = [...document.querySelectorAll(selectors.join(','))];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

    nodes.forEach(node => {
      const siblings = [...node.parentElement.children].filter(x => x.matches(selectors.join(',')));
      const position = Math.max(0, siblings.indexOf(node));
      node.style.setProperty('--editorial-delay', `${Math.min(position * 85, 270)}ms`);
      node.classList.add('editorial-enter');
      observer.observe(node);
    });
  } else {
    document.querySelectorAll('.editorial-enter').forEach(el => el.classList.add('in-view'));
  }

  // 5. Active Section Navigation Spy
  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const sectionIds = navLinks.map(a => a.getAttribute('href').slice(1)).filter(Boolean);
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${visible.target.id}`) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] });

    sections.forEach(sec => navObserver.observe(sec));
  }

  // 6. Gallery Lightbox Modal
  const lightbox = document.getElementById('galleryLightbox');
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.modal-close-btn');

    const openLightbox = (src, alt) => {
      if (lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || 'DussT Visual Vault Preview';
      }
      lightbox.classList.add('open');
      body.classList.add('menu-open');
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      body.classList.remove('menu-open');
    };

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) openLightbox(img.src, img.alt);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }

  // 7. Hero Background Video Handling
  const heroVideo = document.querySelector('.brand-hero__media video');
  if (heroVideo && !prefersReduced) {
    heroVideo.play().catch(() => {
      // Autoplay with audio blocked is standard; video is muted so this is safe
    });
  }

  // 8. Waitlist and Contact Form Dispatches
  const waitlistForm = document.getElementById('sanctumWaitlistForm');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = waitlistForm.querySelector('input[type="email"]')?.value;
      const role = waitlistForm.querySelector('select')?.value || 'Listener';
      const statusBox = document.getElementById('waitlistStatus');
      if (statusBox) {
        statusBox.textContent = `✦ Received! You are now queued as a registered ${role} (${email}). Welcome to The Sanctum.`;
        statusBox.style.display = 'block';
        statusBox.style.color = '#c8a848';
      }
      waitlistForm.reset();
    });
  }

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = document.getElementById('bookingStatus');
      if (statusBox) {
        statusBox.textContent = '✦ Booking dispatch received. DussT & Quady Oseni (OQ) will respond directly to your email.';
        statusBox.style.display = 'block';
        statusBox.style.color = '#c8a848';
      }
      bookingForm.reset();
    });
  }
})();
