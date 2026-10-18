/**
 * ENTER THE DUSST VXRSE — CENTRAL CONTENT CONFIGURATION
 * Cohesive brand configuration for artist DussT and collaborator Quady Oseni (OQ).
 */

window.DUSST_CONFIG = {
  // 1. Core Artist Brand
  artist: {
    name: "DussT",
    tagline: "Enter The Duss Vxrse",
    motto: "Don't kick the Duss Up",
    genre: "Underground / Gothic Hip-Hop / Alternative Rap",
    proposedDomain: "EnterTheDussVxrse.com",
    contactEmail: "info@EnterTheDussVxrse.com",
    emailStatus: "Pending Domain Activation",
    officialLogo: "assets/images/dusst-logo-concept-alembic.png",
    vectorWordmark: "assets/logos/dusst-logo-concept-1-wordmark.svg",
    vectorSigil: "assets/logos/dusst-logo-concept-2-sigil.svg",
    vectorMonogram: "assets/logos/dusst-logo-concept-3-monogram.svg",
    biographySummary: "DussT is an independent underground music artist forging a dark, cinematic sonic universe known as the Duss Vxrse. Blending gothic aesthetics, raw emotional vulnerability, and uncompromised lyricism, DussT confronts personal battles, mental health, and the journey toward authentic creative brotherhood.",
    fullBio: [
      "Emerging from the underground with an unyielding artistic vision, DussT represents a new era of independent musician: one who values raw emotional truth above manufactured trends. In a culture often obsessed with facade and commercial spectacle, the Duss Vxrse was created as an honest domain for those who have walked through darkness and chosen to create.",
      "The name 'DussT' carries dual significance: acknowledging the humble origin of all life—from dust we rise—while the recurring proverb 'Don't kick the Duss Up' serves as both a boundary and an alchemical warning. It honors the stillness of inner struggle, reminding listeners that profound growth happens quietly beneath the surface.",
      "Beyond his solo releases, DussT is the visionary founder behind 'The Sanctum'—a worldwide community concept dedicated to mental health awareness, mutual creative empathy, and giving uncompromised voices a space to be heard without judgment."
    ]
  },

  // 2. Music & Video Releases
  releases: [
    {
      id: "freevxrse",
      title: "FREEVXRSE",
      type: "Official Single & Master Visualizer",
      releaseDate: "Official Release",
      status: "Available Now",
      artwork: "assets/images/dusst-freevxrse-art.png",
      videoFile: "assets/videos/dusst-visualizer.mp4",
      description: "A scathing, theatrical declaration of creative freedom. Illustrated in dark graphic novel form, FREEVXRSE places DussT at a speaker's podium above an underground congregation offering their vital organs before the watching eye.",
      lyricsTeaser: "Free your verse. Give what you hold deepest. The crowd brings their hearts, minds, and breath to the altar of truth.",
      streaming: {
        spotify: { label: "Spotify", status: "Distribution In Setup" },
        appleMusic: { label: "Apple Music", status: "Distribution In Setup" },
        soundCloud: { label: "SoundCloud", status: "Official Upload In Setup" },
        youtubeMusic: { label: "YouTube Music", status: "Visualizer Streaming" }
      }
    },
    {
      id: "brand-new-day",
      title: "Brand New Day",
      type: "Upcoming Studio Single",
      releaseDate: "In Studio Production",
      status: "Arrangement In Progress",
      artwork: "assets/images/dusst-casual-avatar-front.png",
      videoFile: null,
      description: "Currently in studio production with collaborator Quady Oseni (OQ). DussT is actively setting the BPM, arranging transition points, and shaping matching animated sequences.",
      artistNote: "Finding tha BPM & transition points... demo recorded.",
      streaming: {
        status: "Demo In Arrangement • Master Coming Soon"
      }
    },
    {
      id: "duss-concept-ep",
      title: "Don't Kick The Duss Up",
      type: "Concept EP / Project",
      releaseDate: "TBA / In Development",
      status: "Scheduled",
      artwork: "assets/images/dusst-logo-concept-alembic.png",
      videoFile: null,
      description: "The flagship multi-track body of work encapsulating the genesis of the Duss Vxrse and the founding tenets of The Sanctum.",
      streaming: {
        status: "Scheduled Studio Pipeline"
      }
    },
    {
      id: "the-dust-rises",
      title: "The Dust Rises (Studio Session)",
      type: "Acoustic / Underground Demo",
      releaseDate: "Archive Session",
      status: "Studio Vault",
      artwork: "assets/images/dusst-shadow-ronin-front.png",
      videoFile: null,
      description: "Raw vocal stems and gothic ambient textures recorded during the initial character formulation sessions.",
      streaming: {
        status: "Vaulted Demo"
      }
    }
  ],

  // 3. Official Videos (Actual Video Files on Website)
  videos: [
    {
      id: "video-freevxrse-visualizer",
      title: "FREEVXRSE — Official Master Visualizer",
      runtime: "0:12",
      type: "Master Animated Cut",
      src: "assets/videos/dusst-visualizer.mp4",
      poster: "assets/images/dusst-freevxrse-art.png",
      director: "Quady Oseni (OQ)",
      description: "Direct on-site master visualizer featuring dynamic animation, cinematic lighting, and custom sound design."
    },
    {
      id: "video-ronin-teaser",
      title: "The Shadow Ronin — Character Motion Reel",
      runtime: "Teaser",
      type: "3D Animation Preview",
      src: "assets/videos/dusst-visualizer.mp4",
      poster: "assets/images/dusst-shadow-ronin.png",
      director: "Quady Oseni (OQ)",
      description: "3D turnaround and combat aesthetic teaser for DussT's armored alter-ego."
    }
  ],

  // 4. Confirmed Social Media (Separated from Streaming Platforms)
  socialMedia: {
    instagram: {
      platform: "Instagram",
      handle: "@KNUCKL3WALKA",
      status: "Artist Account Mentioned in Production",
      note: "Official artist account for DussT / Knucklewalka"
    },
    discord: {
      platform: "Discord",
      handle: "KNUCKL3WALKA [FLND]",
      status: "Direct Creative Hub",
      note: "Direct collaboration and community chat with creator OQ"
    },
    community: {
      platform: "The Sanctum",
      handle: "EnterTheDussVxrse.com/Sanctum",
      status: "Pre-Launch Community Waitlist Open",
      note: "Worldwide artist and listener community"
    },
    bookingEmail: {
      platform: "Management Dispatch",
      handle: "info@EnterTheDussVxrse.com",
      status: "Pending Domain Activation",
      note: "Primary mailbox for performance bookings and press"
    }
  },

  // 5. Creator / Visual Director (Quady Oseni / OQ) — ONLY email shown, NO Instagram
  creator: {
    name: "Quady Oseni (OQ)",
    brand: "Quady Animation Studio",
    title: "Visual Director, 2D/3D Animator & Web Architect",
    contactEmail: "oseniquady53@gmail.com",
    role: "Lead Character Designer, 3D Modeler, Visualizer Director & Web Developer for DussT",
    bio: "Quady Oseni (artistically known as OQ) is an acclaimed independent visual director and animator specializing in music-driven timing, 3D character design, anime-inspired action, and cinematic web design. In close creative brotherhood with DussT, OQ translates sonic narratives into breathing visual universes."
  }
};
