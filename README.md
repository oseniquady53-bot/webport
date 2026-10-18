# ENTER THE DUSST VXRSE — UNIFIED ARTIST WEBSITE PORTAL
**Domain:** `EnterTheDussVxrse.com`  
**Artist:** DussT  
**Creative Collaborator & Website Architect:** Quady Oseni / OQ (Quady Animation Studio)  
**Animator Contact:** `oseniquady53@gmail.com`

---

## 1. PROJECT OVERVIEW & UNIFIED ARCHITECTURE
This repository contains the complete, unified official website and brand identity suite for independent underground music artist **DussT**.

The website features an authentic dark, cinematic, gothic aesthetic:
- **Unified Master Portal:** The previous standalone logo experience has been integrated directly into the main website (`#brand-identity`), forming one seamless, powerful brand universe.
- **Consistent Logo Integration:** The authentic DussT alembic flask emblem and gothic typography are applied consistently across the header, hero section, release cards, and footer.
- **Horizontal Motion Carousels:** Smooth horizontal motion for music releases, video visualizers, and artwork galleries with touch-swipe and navigation arrow support, while 100% preserving normal vertical page scrolling.
- **Direct Native Video Playback:** Videos play directly on the website with 1080p native playback. Zero public-facing Google Drive links.
- **Dedicated Social Media Hub:** Confirmed social media accounts (Instagram, Discord, The Sanctum) are strictly separated from digital music streaming platforms (Spotify, Apple Music, SoundCloud).
- **Zero Unrelated Audio & No Autoplay:** Any placeholder sound from unrelated projects (MindThrive) has been permanently removed. Audio never autoplays.
- **Single Animator Contact:** Shows ONLY `oseniquady53@gmail.com` for Quady Oseni (OQ). All personal Instagram links have been removed.

---

## 2. FILE & ASSET ARCHITECTURE

```
enterthedussvxrse/
├── index.html                   # Master Unified Portal (Hero, Music, Videos, Brand Suite, Sanctum)
├── about.html                   # Artist Profile, Origins, Lore & Symbolism
├── music.html                   # Discography, Horizontal Release Carousel & On-Site Video
├── sanctum.html                 # The Sanctum Manifesto, 6 Pillars & Waitlist Form
├── gallery.html                 # Visual Vault, Character Model Sheets & Lightbox
├── creator.html                 # Creative Collaborator Page: Website & Visuals by OQ
├── contact.html                 # Official Booking Dispatch & Inquiry Form
├── robots.txt                   # Search engine crawler instructions
├── sitemap.xml                  # Full XML sitemap for Google Search Console
├── README.md                    # Launch, deployment & maintenance guide
├── backend_apps_script.js       # Free zero-maintenance Google Sheets backend endpoint
├── css/
│   ├── style.css                # Cinematic gothic design system, carousels & video frames
│   └── animations.css           # Breathing glow, floating elevation & scroll reveals
├── js/
│   ├── content-config.js        # Centralized artist data & release configuration
│   ├── main.js                  # Unified client engine, carousels, video player & logo suite
│   └── audio-player.js          # Player status HUD (zero autoplay)
└── assets/
    ├── videos/
    │   └── dusst-visualizer.mp4 # Direct 1080p master video visualizer
    ├── images/
    │   ├── dusst-shadow-ronin.png  # Master 3D character model sheet (front & profile)
    │   ├── dusst-shadow-ronin-front.png # Front combat stance crop
    │   ├── dusst-shadow-ronin-side.png  # Side profile crop
    │   ├── dusst-shadow-ronin-bust.png  # Hero bust portrait
    │   ├── dusst-casual-avatar.png # Master casual creator model sheet
    │   ├── dusst-casual-avatar-front.png # Front studio portrait crop
    │   ├── dusst-freevxrse-art.png # Official FREEVXRSE illustrated cover artwork
    │   └── dusst-logo-concept-alembic.png # Authentic DussT alchemical logo emblem
    └── logos/
        ├── dusst-logo-concept-1-wordmark.svg # Gothic Display Wordmark (Antique Ivory & Gold)
        ├── dusst-logo-concept-2-sigil.svg    # Alchemical Alembic Sigil & Botanical Canopy
        └── dusst-logo-concept-3-monogram.svg # The Ronin Monogram Crest (D/T Katana & Crown)
```

---

## 3. KEY HIGHLIGHTS

### A. Integrated Brand Identity Suite (`#brand-identity`)
Located directly on the main website:
- **Concept 01 (Gothic Wordmark):** Chiseled ivory lettering with distressed gold filigree rules and *"DON'T KICK THE DUSS UP"*.
- **Concept 02 (Alchemical Sigil):** Potion flask distilling vapor dagger, framed by cannabis botanical leaves and sacred geometry.
- **Concept 03 (Ronin Monogram Crest):** Interlocking ivory 'D' pierced by crimson katana 'T', crowned with the Ronin tiara and hourglass talisman.
- **Authentic Master Reference:** The baseline alchemical logo reference screenshot.
- **Interactive Tools:** Live canvas surface switcher (Pitch Black, Antique Parchment, Burgundy Velvet, Muted Olive), scale tester (70px to 320px), vector SVG export, transparent 1200px PNG export, and an integrated approval feedback form.

### B. Horizontal Motion Carousels
Three horizontal tracks featuring touch swipe, momentum dragging, and navigation arrows:
1. **Music Releases Track (`#music`):** FREEVXRSE, Brand New Day, Don't Kick The Duss Up EP, The Dust Rises.
2. **Video Visualizers Track (`#videos`):** Master animated cut, Shadow Ronin 3D reel, Studio session teaser.
3. **Visual Vault Track (`#gallery`):** Character sheets, illustrated single poster, logo emblems.

---

## 4. LAUNCH & DEPLOYMENT INSTRUCTIONS
- **Hosting:** Deploy `enterthedussvxrse/` for $0/month on Cloudflare Pages, Netlify, or Vercel with automatic HTTPS.
- **Domain:** Connect `EnterTheDussVxrse.com` via DNS A and CNAME records pointing to your host.
- **Email:** Route `info@EnterTheDussVxrse.com` via Cloudflare Email Routing or Zoho Mail.
- **Backend:** Connect forms to `backend_apps_script.js` to log submissions into Google Sheets and trigger email notifications at $0 recurring cost.
