import os

logos_dir = r"C:\Users\HomePC\.gemini\antigravity\scratch\enterthedussvxrse\assets\logos"
os.makedirs(logos_dir, exist_ok=True)

# 1. Concept 1: Gothic Wordmark SVG
concept_1_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" width="100%" height="100%">
  <defs>
    <linearGradient id="ivoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF9E6" />
      <stop offset="50%" stop-color="#EADBBE" />
      <stop offset="100%" stop-color="#C8B68C" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="50%" stop-color="#F3E5AB" />
      <stop offset="100%" stop-color="#AA820A" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#8B0000" flood-opacity="0.6"/>
    </filter>
  </defs>
  
  <!-- Subtle decorative framing lines -->
  <g stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.75" fill="none">
    <path d="M 100 45 L 360 45 M 440 45 L 700 45" />
    <path d="M 160 195 L 360 195 M 440 195 L 640 195" />
    <polygon points="400,35 408,45 400,55 392,45" fill="url(#goldGrad)" />
    <polygon points="400,185 408,195 400,205 392,195" fill="url(#goldGrad)" />
    <circle cx="100" cy="45" r="3" fill="#D4AF37" />
    <circle cx="700" cy="45" r="3" fill="#D4AF37" />
  </g>

  <!-- Central Gothic Wordmark -->
  <g filter="url(#glow)">
    <text x="400" y="145" text-anchor="middle" 
          font-family="'Cinzel Decorative', 'UnifrakturMaguntia', 'Pirata One', 'MedievalSharp', 'Georgia', serif" 
          font-size="108" font-weight="900" letter-spacing="8" 
          fill="url(#ivoryGrad)" stroke="#120808" stroke-width="2.5">
      DussT
    </text>
  </g>

  <!-- Subtitle Tagline -->
  <text x="400" y="182" text-anchor="middle" 
        font-family="'Cinzel', 'Trajan Pro', 'Georgia', serif" 
        font-size="15" font-weight="600" letter-spacing="9" 
        fill="url(#goldGrad)">
    DON'T KICK THE DUSS UP
  </text>
  
  <text x="400" y="225" text-anchor="middle" 
        font-family="'Plus Jakarta Sans', sans-serif" 
        font-size="10" font-weight="400" letter-spacing="4" 
        fill="#8C827A">
    CONCEPT 01 • GOTHIC DISPLAY WORDMARK
  </text>
</svg>"""

with open(os.path.join(logos_dir, "dusst-logo-concept-1-wordmark.svg"), "w", encoding="utf-8") as f:
    f.write(concept_1_svg)

# 2. Concept 2: Alchemical Alembic Sigil SVG
concept_2_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="100%" height="100%">
  <defs>
    <linearGradient id="sigilIvory" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBF0" />
      <stop offset="70%" stop-color="#E3D5B8" />
      <stop offset="100%" stop-color="#B5A27A" />
    </linearGradient>
    <linearGradient id="sigilOlive" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6E8056" />
      <stop offset="100%" stop-color="#3E4A2F" />
    </linearGradient>
    <linearGradient id="sigilCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A61C2C" />
      <stop offset="100%" stop-color="#520810" />
    </linearGradient>
    <filter id="sigilShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.9"/>
    </filter>
  </defs>

  <g filter="url(#sigilShadow)">
    <!-- Sacred Circle Frame -->
    <circle cx="300" cy="290" r="190" stroke="#8F7C56" stroke-width="2" stroke-dasharray="6 4" fill="none" opacity="0.6" />
    <circle cx="300" cy="290" r="178" stroke="#D4AF37" stroke-width="1.5" fill="none" opacity="0.85" />
    
    <!-- Botanical Leaves Radiating Behind Flask -->
    <g fill="url(#sigilOlive)" stroke="#1F2417" stroke-width="1" opacity="0.95">
      <path d="M 300 120 C 285 160 270 210 300 270 C 330 210 315 160 300 120 Z" />
      <path d="M 300 270 C 250 240 180 180 150 160 C 180 210 240 260 300 270 Z" />
      <path d="M 300 270 C 350 240 420 180 450 160 C 420 210 360 260 300 270 Z" />
      <path d="M 300 280 C 230 275 160 245 120 250 C 160 290 230 300 300 280 Z" />
      <path d="M 300 280 C 370 275 440 245 480 250 C 440 290 370 300 300 280 Z" />
      <path d="M 300 290 C 220 310 160 330 140 360 C 180 370 240 340 300 290 Z" />
      <path d="M 300 290 C 380 310 440 330 460 360 C 420 370 360 340 300 290 Z" />
    </g>

    <!-- Alchemical Alembic Flask Body -->
    <path d="M 282 200 L 318 200 L 318 240 C 345 260 375 295 375 340 C 375 390 342 420 300 420 C 258 420 225 390 225 340 C 225 295 255 260 282 240 Z" 
          fill="#121316" stroke="url(#sigilIvory)" stroke-width="4" />
    
    <!-- Liquid / Mystical Essence inside flask -->
    <path d="M 235 345 C 245 320 265 315 300 315 C 335 315 355 320 365 345 C 365 385 338 410 300 410 C 262 410 235 385 235 345 Z" 
          fill="url(#sigilCrimson)" opacity="0.85" />
    
    <!-- Ribbed flask neck rings -->
    <rect x="278" y="205" width="44" height="5" rx="2.5" fill="url(#sigilIvory)" />
    <rect x="276" y="220" width="48" height="5" rx="2.5" fill="url(#sigilIvory)" />

    <!-- Vapor / Smoke Dagger Rising from Flask Mouth -->
    <g stroke="url(#sigilIvory)" stroke-width="3" fill="none">
      <path d="M 300 200 C 270 170 330 140 300 100 C 285 80 295 60 300 40" stroke-linecap="round" />
      <path d="M 292 195 C 270 175 310 150 295 120 C 285 100 298 75 300 55" stroke-dasharray="3 3" opacity="0.7" />
      <polygon points="300,30 306,48 300,44 294,48" fill="url(#sigilIvory)" />
      <line x1="288" y1="46" x2="312" y2="46" stroke="#D4AF37" stroke-width="2.5" />
    </g>

    <!-- DussT Blackletter Type Across Foreground -->
    <g>
      <text x="300" y="490" text-anchor="middle" 
            font-family="'Cinzel Decorative', 'UnifrakturMaguntia', 'MedievalSharp', serif" 
            font-size="84" font-weight="900" letter-spacing="6" 
            fill="url(#sigilIvory)" stroke="#0A0A0C" stroke-width="3">
        DussT
      </text>
    </g>

    <!-- Cardinal Compass Star Talisman at Bottom -->
    <g transform="translate(300, 545)">
      <path d="M 0 -22 L 4 -5 L 21 0 L 4 5 L 0 22 L -4 5 L -21 0 L -4 -5 Z" fill="#D4AF37" />
      <circle cx="0" cy="0" r="2" fill="#111" />
    </g>

    <!-- Tagline below -->
    <text x="300" y="595" text-anchor="middle" 
          font-family="'Cinzel', serif" 
          font-size="14" font-weight="600" letter-spacing="6" 
          fill="#EADBBE">
      DON'T KICK THE DUSS UP
    </text>
    
    <text x="300" y="635" text-anchor="middle" 
          font-family="'Plus Jakarta Sans', sans-serif" 
          font-size="11" font-weight="400" letter-spacing="3" 
          fill="#7A746B">
      CONCEPT 02 • ALCHEMICAL SIGIL &amp; BOTANICAL EMBLEM
    </text>
  </g>
</svg>"""

with open(os.path.join(logos_dir, "dusst-logo-concept-2-sigil.svg"), "w", encoding="utf-8") as f:
    f.write(concept_2_svg)

# 3. Concept 3: Compact D/T Crown & Hourglass Monogram SVG
concept_3_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="monoIvory" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF9EA" />
      <stop offset="100%" stop-color="#D1BE93" />
    </linearGradient>
    <linearGradient id="crimsonAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E62035" />
      <stop offset="100%" stop-color="#8A0012" />
    </linearGradient>
    <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="50%" stop-color="#634B11" />
      <stop offset="100%" stop-color="#D4AF37" />
    </linearGradient>
  </defs>

  <!-- Outer Hexagonal / Shield Medallion -->
  <polygon points="250,25 440,110 440,360 250,470 60,360 60,110" 
           fill="#0C0D11" stroke="url(#shieldBorder)" stroke-width="3.5" />
  <polygon points="250,38 424,116 424,352 250,454 76,352 76,116" 
           fill="none" stroke="#8B0000" stroke-width="1.5" opacity="0.5" />

  <!-- Imperial Ronin Crown (From DussT's sash/coat emblem) -->
  <path d="M 195 125 L 210 160 L 250 115 L 290 160 L 305 125 L 315 175 L 185 175 Z" 
        fill="url(#monoIvory)" stroke="#111" stroke-width="1.5" />
  <circle cx="195" cy="122" r="3.5" fill="#D4AF37" />
  <circle cx="250" cy="112" r="4.5" fill="#D4AF37" />
  <circle cx="305" cy="122" r="3.5" fill="#D4AF37" />

  <!-- Stylized Interlocking 'D' and 'T' -->
  <!-- Gothic D in Antique Ivory -->
  <path d="M 160 190 L 220 190 C 275 190 310 215 310 265 C 310 315 275 340 220 340 L 160 340 Z 
           M 196 226 L 196 304 L 218 304 C 250 304 272 290 272 265 C 272 240 250 226 218 226 Z" 
        fill="url(#monoIvory)" />

  <!-- Crimson Slashed Katana 'T' Intersecting the D -->
  <path d="M 235 200 L 345 200 L 340 226 L 302 226 L 270 380 L 235 380 L 265 226 L 235 226 Z" 
        fill="url(#crimsonAccent)" />

  <!-- Hourglass Talisman Accent at Bottom -->
  <g transform="translate(250, 415)" fill="none" stroke="#D4AF37" stroke-width="1.5">
    <polygon points="-8,-10 8,-10 0,0 8,10 -8,10 0,0" fill="#221A06" />
    <line x1="-10" y1="-10" x2="10" y2="-10" />
    <line x1="-10" y1="10" x2="10" y2="10" />
  </g>
</svg>"""

with open(os.path.join(logos_dir, "dusst-logo-concept-3-monogram.svg"), "w", encoding="utf-8") as f:
    f.write(concept_3_svg)

print("Generated all 3 vector SVG logo concepts successfully!")
