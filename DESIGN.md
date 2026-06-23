---
name: Lumina Terminal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ecb2ff'
  on-secondary: '#520071'
  secondary-container: '#cf5cff'
  on-secondary-container: '#480063'
  tertiary: '#fff5de'
  on-tertiary: '#3b2f00'
  tertiary-container: '#fed639'
  on-tertiary-container: '#715d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ecb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#ffe179'
  tertiary-fixed-dim: '#eac324'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  container-max-width: 1200px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a high-end Full Stack Developer portfolio, balancing technical precision with premium aesthetics. The brand personality is sophisticated, innovative, and deeply rooted in the developer experience. It targets high-growth startups and tech-forward enterprises, evoking a sense of mastery and reliability.

The visual style is **Glassmorphic Minimalism**. It utilizes deep obsidian surfaces layered with semi-transparent glass panes to create perceived depth. The aesthetic is punctuated by "light-leaks" and glowing interactive elements, mirroring the focused environment of a high-end IDE while maintaining a sleek, editorial finish.

## Colors

The palette is anchored in a monochromatic dark spectrum to ensure maximum contrast for syntax-style highlights.

- **Primary (Cyan):** Used for primary actions, terminal prompts, and active code states. Represents energy and precision.
- **Secondary (Electric Purple):** Used for accents, gradients, and decorative glow effects. Represents creativity and logic.
- **Base (#0A0A0A):** A pure, deep charcoal that serves as the "infinite" background.
- **Glass Surfaces:** Semi-transparent white or primary-tinted overlays with high background blur (32px-64px) to create the glassmorphic effect.

## Typography

This design system uses a triple-font strategy to reinforce the professional developer narrative.

- **Geist** is the display face, chosen for its ultra-modern, technical geometric construction. Headlines should use tight tracking and bold weights.
- **Inter** provides high-readability for body copy, project descriptions, and long-form content.
- **JetBrains Mono** is utilized for metadata, labels, and code snippets, grounding the portfolio in a "built-by-a-developer" aesthetic.

Spacious line heights are maintained to ensure the dark-themed UI remains breathable and accessible.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within the viewport to create a focused "app-like" experience.

- **Desktop:** 12-column grid with a 1200px max-width. Large 160px vertical gaps between sections to allow the glassmorphic elements room to "breathe."
- **Mobile:** Single column layout with 20px side margins. Horizontal scrolling is permitted for code blocks and tech-stack chips.
- **Rhythm:** All spacing (padding, margins) is derived from a base-8 scale (8, 16, 24, 32, 48, 64, 96) to ensure mathematical harmony.

## Elevation & Depth

Depth is conveyed through **Glassmorphism and Glows** rather than traditional drop shadows.

- **Tier 1 (Base):** Background #0A0A0A.
- **Tier 2 (Glass Cards):** `rgba(255, 255, 255, 0.03)` fill with a `backdrop-filter: blur(20px)` and a `1px` solid border at `rgba(255, 255, 255, 0.08)`.
- **Tier 3 (Modals/Popovers):** Higher transparency `rgba(255, 255, 255, 0.06)` with a `40px` blur.
- **Interactive Depth:** When hovered, cards should display a subtle inner glow or a primary-colored border-gradient to indicate focus.

## Shapes

The design system utilizes **Rounded (0.5rem)** corners as the standard. This choice softens the technical edge of the Geist typeface, making the interface feel more approachable and modern.

- **Buttons & Inputs:** 0.5rem (8px)
- **Cards & Sections:** 1rem (16px)
- **Tech Chips:** Full pill (999px)

## Components

### Buttons
- **Primary:** Solid Cyan (#00F0FF) with black text. On hover, apply a `box-shadow` of 0 0 20px rgba(0, 240, 255, 0.4).
- **Secondary (Ghost):** 1px border of white (10% opacity) with white text. On hover, fill with 5% white opacity.

### Glassmorphism Cards
Used for project items and skill blocks. Must include a 1px top-left highlight border to simulate light hitting a glass edge. Background blur is mandatory to maintain legibility over background gradients.

### Sticky Navbar
A thin, 64px tall glass bar with `backdrop-filter: blur(12px)`. Use a bottom border of 1px white (5% opacity) to separate it from the content.

### Timeline Elements
A vertical 2px track in #161616. Active nodes use a Cyan glowing dot. Date labels use JetBrains Mono in a muted grey.

### Code-Centric Inputs
Text fields should resemble IDE input areas: monospaced text, sharp focus rings in Primary Cyan, and subtle line-numbering if used for multi-line text areas.