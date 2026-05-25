---
name: Nexoresha Cinematic
colors:
  surface: '#fff8f2'
  surface-dim: '#e2d9cb'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e4'
  surface-container: '#f7edde'
  surface-container-high: '#f1e7d9'
  surface-container-highest: '#ebe1d3'
  on-surface: '#1f1b13'
  on-surface-variant: '#554240'
  inverse-surface: '#353027'
  inverse-on-surface: '#f9efe1'
  outline: '#89726f'
  outline-variant: '#dcc0bd'
  surface-tint: '#9d4139'
  primary: '#210000'
  on-primary: '#ffffff'
  primary-container: '#4a0404'
  on-primary-container: '#d26a5f'
  inverse-primary: '#ffb4aa'
  secondary: '#b52619'
  on-secondary: '#ffffff'
  secondary-container: '#ff5c47'
  on-secondary-container: '#610000'
  tertiary: '#110901'
  on-tertiary: '#ffffff'
  tertiary-container: '#292011'
  on-tertiary-container: '#958772'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#7e2b23'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a8'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#920703'
  tertiary-fixed: '#f2e0c8'
  tertiary-fixed-dim: '#d5c4ad'
  on-tertiary-fixed: '#231a0b'
  on-tertiary-fixed-variant: '#514533'
  background: '#fff8f2'
  on-background: '#1f1b13'
  surface-variant: '#ebe1d3'
typography:
  display-lg:
    fontFamily: bebasNeue
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: bebasNeue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 110%
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: bebasNeue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 110%
  headline-md:
    fontFamily: bebasNeue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 120%
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 140%
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 80px
  container-padding-mobile: 24px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

This design system is built on the philosophy of "The Director's Eye"—a blend of high-end cinematic drama and contemporary luxury minimalism. It targets a high-tier clientele seeking authoritative yet artistic branding. 

The visual style merges **Minimalism** with **Glassmorphism**. By utilizing generous whitespace (the "canvas"), the UI allows high-quality media to breathe while using translucent layers to create a sense of physical depth. The atmosphere is evocative of a private screening room: sophisticated, focused, and expensive. Every interaction should feel intentional and smooth, mirroring the precision of a camera pan.

## Colors

The palette is anchored in a sophisticated "Bright Beige" that serves as a warmer, more premium alternative to stark white. This is contrasted by a "Dark Maroon" that provides the weight and authority of a luxury heritage brand.

- **Main Background (#F5EBDD):** Use for all primary surface areas to maintain a soft, gallery-like feel.
- **Primary Maroon (#4A0404):** Reserved for high-importance elements, primary buttons, and navigation anchors.
- **Blood Red Accent (#8B0000):** A vibrant, cinematic highlight used for call-to-actions, active states, and emotional punctuation.
- **Soft Beige (#EAD8C0):** Used for subtle borders, secondary containers, and glassmorphic strokes.
- **Text (#1E1E1E):** A deep charcoal that ensures high legibility without the jarring contrast of pure black.

## Typography

Typography follows a high-contrast hierarchy. **Bebas Neue** is the "Cinematic Voice"—it should be used for all major headings and display text. Its tall, condensed forms mimic film credits and high-fashion editorial layouts.

**Inter** serves as the functional workhorse. It provides a clean, modern balance to the expressive headlines. Large body text (body-lg) should be used for storytelling sections, while labels (label-md) should often utilize uppercase styling with generous letter-spacing to maintain the luxury aesthetic.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop to ensure content remains centered and curated, like a film frame. 

- **Desktop:** 12-column grid with 80px side margins and 24px gutters. Use wide section gaps (120px+) to emphasize luxury and give elements "room to breathe."
- **Mobile:** 4-column grid with 24px margins. Headlines should scale aggressively to maintain their impact on smaller screens.
- **Rhythm:** All spacing (padding, margins) must be multiples of 8px. Use generous internal padding in cards and containers to avoid a "cluttered" appearance.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and soft, ambient shadows. 

1.  **Glass Layers:** Use a backdrop blur (20px - 32px) with a semi-transparent fill of the Soft Beige accent (#EAD8C0 at 40% opacity). Apply a 1px solid border in a lighter tint of the background to simulate the edge of a lens.
2.  **Shadows:** Shadows should be extremely diffused and low-opacity. Use a "Soft Glow" approach for interactive elements: instead of a black shadow, use a subtle tint of the Primary Maroon (#4A0404) with a large blur radius (30px+) and low opacity (8%).
3.  **Radial Gradients:** Use soft radial gradients in the background—transitioning from the Main Background beige to a slightly darker Soft Beige—to create a "vignette" effect that draws the eye toward the center of the screen.

## Shapes

The shape language is "Smooth & Architectural." 

Avoid sharp 0px corners, as they feel too industrial. Instead, use Level 2 roundedness (0.5rem base) for standard components like input fields and small buttons. Larger containers and cinematic cards should utilize `rounded-xl` (1.5rem) to evoke the feel of premium modern tech and high-end industrial design. Buttons should never be fully pill-shaped (rounded-full); they should maintain a structured, rectangular soul with softened edges.

## Components

- **Primary Buttons:** Solid Dark Maroon (#4A0404) with white text. On hover, transition to Blood Red (#8B0000) with a subtle outer glow.
- **Cinematic Cards:** Large image-focused containers with a glassmorphic overlay at the bottom for text. Use the `rounded-xl` corner radius.
- **Input Fields:** Soft Beige (#EAD8C0) backgrounds with 1px borders. When focused, the border should darken to Dark Maroon and the shadow depth should increase slightly.
- **Chips/Tags:** Use an outlined style with 1px Soft Beige borders and `label-md` typography.
- **Lists:** High-density text lists should be avoided. Instead, use "Editorial Lists" with large spacing, horizontal dividers in #EAD8C0, and hover states that reveal a thumbnail image (the "Preview" effect).
- **Navigation:** A persistent, glassmorphic top-bar that blurs the content beneath it as the user scrolls, creating a sense of constant depth.