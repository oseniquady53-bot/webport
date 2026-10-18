/**
 * ENTER THE DUSST VXRSE — CUSTOM GOTHIC AUDIO PLAYER
 * Handles audio playback controls for official DussT releases.
 * Guaranteed zero autoplay and zero unrelated audio references.
 */

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('mainAudio');
  const playBtn = document.getElementById('playerPlayBtn');
  const playIcon = document.getElementById('playerPlayIcon');
  const timelineBar = document.getElementById('playerTimeline');
  const timelineFill = document.getElementById('playerTimelineFill');
  const timeDisplay = document.getElementById('playerTimeDisplay');
  const trackTitle = document.getElementById('playerTrackTitle');
  const waveBars = document.querySelectorAll('.waveform-anim-bar');

  // Pause waveform animation by default
  waveBars.forEach(bar => bar.style.animationPlayState = 'paused');

  if (!audio) return;

  let isPlaying = false;

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    // If no valid source is set or file is pending
    if (!audio.src || audio.src.endsWith('.html') || audio.src === window.location.href) {
      if (trackTitle) {
        const originalText = trackTitle.textContent;
        trackTitle.textContent = "✦ Studio Master in Production — Releasing Soon";
        setTimeout(() => {
          trackTitle.textContent = originalText;
        }, 3500);
      }
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.warn('Playback notice:', err);
      });
    }
  };

  if (playBtn) playBtn.addEventListener('click', togglePlay);

  audio.addEventListener('play', () => {
    isPlaying = true;
    if (playIcon) playIcon.innerHTML = '❚❚';
    waveBars.forEach(bar => bar.style.animationPlayState = 'running');
  });

  audio.addEventListener('pause', () => {
    isPlaying = false;
    if (playIcon) playIcon.innerHTML = '▶';
    waveBars.forEach(bar => bar.style.animationPlayState = 'paused');
  });

  audio.addEventListener('timeupdate', () => {
    const current = audio.currentTime;
    const duration = audio.duration || 0;
    if (duration > 0) {
      const progress = (current / duration) * 100;
      if (timelineFill) timelineFill.style.width = `${progress}%`;
      if (timeDisplay) timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
    }
  });

  audio.addEventListener('ended', () => {
    isPlaying = false;
    if (playIcon) playIcon.innerHTML = '▶';
    if (timelineFill) timelineFill.style.width = '0%';
    waveBars.forEach(bar => bar.style.animationPlayState = 'paused');
  });

  if (timelineBar) {
    timelineBar.addEventListener('click', (e) => {
      const rect = timelineBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const duration = audio.duration || 0;
      if (duration > 0) {
        audio.currentTime = (clickX / width) * duration;
      }
    });
  }

  // Connect any data-play-track buttons
  document.querySelectorAll('[data-play-track]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-audio-src');
      const name = btn.getAttribute('data-track-name') || 'FREEVXRSE';

      if (!src) {
        if (trackTitle) {
          trackTitle.textContent = `${name} — Master Distribution in Setup`;
          setTimeout(() => {
            trackTitle.textContent = "FREEVXRSE (Official Single)";
          }, 3500);
        }
        return;
      }

      audio.src = src;
      if (trackTitle) trackTitle.textContent = name;
      audio.play().catch(() => {});
    });
  });
});
