# Design Guidelines: Ifra Shadab Portfolio

## Design Philosophy
**Approach:** Modern portfolio with light pastel theme, glassmorphism, and scroll-driven narrative
- Balance technical credibility with approachable aesthetics
- Progressive disclosure: content reveals sequentially on scroll
- Clear information hierarchy without overwhelming users

---

## Typography

**Fonts:**
- **Headings:** Poppins (500, 600, 700)
- **Body:** Inter (400, 500)

**Scale:**
```
Hero Title: text-5xl md:text-7xl font-bold
Section Headings: text-3xl md:text-5xl font-semibold
Subsection: text-xl md:text-2xl font-medium
Project Titles: text-2xl md:text-3xl font-semibold
Body: text-base md:text-lg
Captions: text-sm md:text-base opacity-80
```

---

## Layout & Spacing

**Spacing Units:** 4, 8, 12, 16, 20, 24, 32
```
Sections: py-16 md:py-24 lg:py-32
Cards: p-6 md:p-8
Gaps: gap-8 md:gap-12
Container: max-w-7xl px-4 md:px-8
```

**Grids:**
- Skills: `grid-cols-2 md:grid-cols-4`
- Projects: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Experience: Alternating left-right timeline

---

## Color System

**Backgrounds:**
- Primary: `#FEF9F3` (cream) or `#F8F7FE` (lavender)
- Cards: `#FFFFFF` with `backdrop-blur-md bg-white/80`

**Accents:**
- Coral Pink: `#FFB5B5`
- Lavender: `#D4C5F9`
- Mint: `#B8E6D5`
- Sky Blue: `#A8D8EA`
- Peach: `#FFD4B2`

**Text:**
- Primary: `#1E293B`
- Secondary: `#64748B`
- Muted: `#94A3B8`

**Interactions:**
- Hover: `-translate-y-1 scale-105` + enhanced shadow
- Active buttons: Pastel gradient fill + white text

---

## Components

### Navigation
- Sticky with `backdrop-blur-lg bg-white/70`
- Logo: "IFRA SHADAB" with gradient text
- Smooth scroll links with underline hover animation

### Hero Section
```
- min-h-screen centered content
- Animated gradient background (pink → lavender → mint)
- Profile: w-48 md:w-64 circular with soft shadow
- Typing animation effect
- CTAs: Primary (gradient fill) + Secondary (outline glass)
```

### About Section
- Desktop: 60/40 split, mobile: stacked
- Education timeline with vertical connector
- Cards: `rounded-2xl` glass with pastel left border

### Skills Section
**Tabs:** Programming, Networking, Cybersecurity, Tools
```
- Pill-shaped tabs, active = gradient fill
- Grid: 4 cols desktop, 2 mobile
- Cards: Icon (w-8 h-8) + Name + Proficiency
- Hover: lift + shadow enhancement
```

### Projects Showcase
**Grid Cards (3/2/1 cols):**
```html
<div class="rounded-2xl backdrop-blur-md bg-white/80">
  <!-- Thumbnail/gradient if no image -->
  <h3><!-- Title --></h3>
  <p><!-- 2-3 line description --></p>
  <!-- Tech badges: small pastel pills -->
  <!-- Links: Live Demo + GitHub icon buttons -->
</div>
```
**Hover:** Lift + shadow + pastel border glow

**Featured:**
1. SafeTrail: AI chatbot, danger alerts, lost & found
2. Sahara: Emergency SOS, AI medical chatbot
3. E-Nirakshan

### Achievements Timeline
- Horizontal scroll (mobile), horizontal timeline (desktop)
- Gradient connector line with circular markers
- Cards: Icon + Title + Date + Description
- Includes: CodeX 2.0 Top 50, Cisco/NPTEL certs, She Codes, 400+ coding problems

### Experience Section
- Vertical centerline with alternating cards
- Each: Logo + Role + Duration + Bullets
- Encryptix (C++), NSS Volunteer, Women Security Team

### Extracurricular
- Two-column grid with icon cards
- Basketball achievements with trophy/medal icons

### Contact Section
```
- Centered heading with gradient text
- Social icons: circular pastel buttons with hover glow
  - LinkedIn: https://in.linkedin.com/in/ifra-shadab-913359285
  - GitHub: https://github.com/ifrashadab
  - LeetCode: https://leetcode.com/u/ifrashadab/
- Optional glass contact form
```

### Footer
- "Built with ❤️ by Ifra Shadab"
- Small social icons + copyright
- Fixed "Back to Top" button (bottom-right, circular gradient)

---

## Glassmorphism Recipe
```css
backdrop-blur-md (or -lg)
bg-white/80 (or /60)
border border-white/20
shadow-xl (or shadow-2xl)
rounded-2xl
```
**Apply to:** Nav, cards, buttons (secondary), contact section

---

## Animations

**Scroll Reveals (Intersection Observer):**
```
- Fade in + translate-y-8 → translate-y-0
- Stagger: 100ms increments
- Projects: cascade left-to-right
- Timeline: appear on scroll past trigger
```

**Micro-interactions:**
- Buttons: `scale-105` + shadow on hover
- Cards: lift effect
- Links: underline expand from center
- Hero: character-by-character typing

**Performance:**
- CSS transforms only (translate, scale)
- Lazy load below-fold images
- Respect `prefers-reduced-motion`

---

## Images

**Profile Photo:**
- Hero: 256px desktop, 192px mobile
- Circular crop, soft shadow, gradient border

**Backgrounds:**
- Animated pastel gradients (no images)
- Low-opacity floating geometric shapes

**Projects:**
- 16:9 thumbnails (screenshots or gradient + icon)
- Rounded corners, subtle shadow

**Icons:** Heroicons in circular pastel backgrounds

---

## Responsive

**Breakpoints:** Mobile <768px, Tablet 768-1024px, Desktop >1024px

**Mobile:**
- Hamburger menu
- Stacked layouts
- Horizontal scroll timeline
- Touch targets: `min-h-12`
- Reduced spacing/animations

---

## Accessibility

- **Contrast:** WCAG AA (dark text on pastels)
- **Focus:** Visible outline in accent color
- **Structure:** Semantic HTML, skip-to-content link
- **Touch:** Min 44x44px targets
- **Alt text:** All images
- **Motion:** Reduced option support

---

## CTAs

**Primary (Hero):** "View My Projects" - gradient `rounded-full px-8 py-4`  
**Secondary (Hero):** "Download Resume" - outline glass  
**Project:** "Live Demo" + "GitHub" - small icon buttons with hover glow

---

## Implementation Notes

- Use Tailwind CSS for consistency
- Stagger delays: 100ms increments within sections
- Icon library: Heroicons (w-8 h-8 standard)
- Color gradients: pink → lavender → mint → blue rotation
- All transitions: `transition-all duration-300 ease-in-out`