# Molly Brown — Website Design Ideas

## Context
Molly Brown is an independent singer-songwriter from Berkshire, UK. Her music is emotionally driven — heartbreak, sarcasm, empowerment. She has released an EP and multiple singles with BBC Introducing features. The site needs to feel personal, modern, and music-industry-ready.

---

<response>
<text>

## Idea 1 — "Dark Romanticism / Editorial Music Press"

**Design Movement:** Post-punk editorial meets high-fashion music press (NME, Pitchfork dark era)

**Core Principles:**
- Deep black backgrounds with warm amber/gold accent tones
- Heavy editorial typography — oversized display text colliding with body copy
- Photography treated as editorial spreads, not thumbnails
- Tension between darkness and warmth (like her music)

**Color Philosophy:** Near-black (#0a0a0a) base, warm amber (#c9a84c) for accents, off-white cream (#f5f0e8) for text. Emotionally charged — the amber evokes stage lighting and intimacy.

**Layout Paradigm:** Asymmetric editorial columns. Hero text bleeds off-screen left. Release cards are full-bleed horizontal strips. Navigation is minimal, left-aligned.

**Signature Elements:**
- Oversized track names as background watermarks
- Thin horizontal rules as section dividers
- Grain/noise texture overlay on hero images

**Interaction Philosophy:** Hover reveals — album art brightens, text slides in. Scroll-triggered text reveals using framer-motion.

**Animation:** Slow fade-up on section entry. ZoomParallax hero with dark overlay. Staggered card reveals.

**Typography System:** `Playfair Display` (display/headlines, italic for song titles) + `DM Sans` (body, navigation). Hierarchy: 96px hero → 48px section → 18px body.

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Idea 2 — "Indie Ethereal / Soft Grunge"

**Design Movement:** Early-2000s indie meets modern Spotify canvas aesthetic

**Core Principles:**
- Muted, desaturated palette with one punchy accent
- Generous whitespace with occasional texture breaks
- Photography treated naturally — no heavy filters
- Handwritten-style type elements for personality

**Color Philosophy:** Warm white (#faf8f5) background, dusty rose (#d4a0a0) accent, charcoal (#2d2d2d) text. Soft and personal — mirrors the emotional vulnerability in her songwriting.

**Layout Paradigm:** Centered but breathing — wide margins, content floats in the middle third. Release section uses a masonry-style asymmetric grid.

**Signature Elements:**
- Subtle paper texture on backgrounds
- Thin script font for song title callouts
- Soft drop shadows on artwork cards

**Interaction Philosophy:** Gentle hover lifts on cards. Smooth scroll snapping between sections.

**Animation:** Soft fade-in on scroll. Parallax on hero portrait. Gentle scale on hover for release cards.

**Typography System:** `Cormorant Garamond` (display, italic song titles) + `Nunito` (body). Hierarchy: 80px hero → 40px section → 16px body.

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Idea 3 — "Bold Monochrome / Zine Culture" ← SELECTED

**Design Movement:** Contemporary music zine meets brutalist web design with feminine edge

**Core Principles:**
- High contrast black and white as the foundation — letting photography dominate
- Bold, unapologetic typography that commands attention
- Structured grid that breaks intentionally for emphasis
- Sparse use of a single warm accent (dusty red/crimson) for key moments

**Color Philosophy:** Pure black (#0d0d0d) and white (#f9f9f9) as the canvas. A single crimson accent (#c0392b) used only for key CTAs and hover states — creating maximum visual impact through restraint. The monochrome palette mirrors the Game Plan artwork aesthetic.

**Layout Paradigm:** Asymmetric split layouts — text on one side, image bleeding to edge on the other. The ZoomParallax hero uses all 5 images in a cinematic mosaic. Release section is a horizontal scroll strip.

**Signature Elements:**
- Large stencil-style section labels (ABOUT, RELEASES, etc.) as background text
- Hard-edged image crops — no rounded corners on photography
- Thin vertical rule lines as structural elements

**Interaction Philosophy:** Sharp, confident interactions. No soft fades — instead, quick cuts and bold reveals. Hover states use the crimson accent.

**Animation:** ZoomParallax scroll effect as the hero centerpiece. Section titles slide in from left. Release cards flip or scale sharply on hover.

**Typography System:** `Bebas Neue` (display/section headers, all caps) + `Lato` (body, 400/300 weights). Hierarchy: 120px hero → 56px section → 17px body.

</text>
<probability>0.06</probability>
</response>

---

## Selected Design: Idea 3 — Bold Monochrome / Zine Culture

The high-contrast monochrome palette directly echoes Molly's existing artwork (Game Plan is B&W, Forever Guessing uses natural tones). The ZoomParallax component becomes the centerpiece hero. Bebas Neue gives the site a bold, music-industry identity without feeling generic.
