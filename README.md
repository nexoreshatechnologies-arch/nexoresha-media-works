# Nexoresha Media Works

Nexoresha Media Works is a premium, high-fidelity cinematic social media and branding agency website. Designed with a luxury visual language (cream beige, deep maroon, and vibrant blood red), it integrates immersive scroll-scrubbed image sequences, infinite marquee tickers, an interactive package builder, and a custom billing checkout drawer.

---

## 🚀 Key Features

1. **Scroll-Scrubbed Hero Sequence**:
   - Implements a frame-preloader caching 240 static high-resolution JPG frames directly in browser memory.
   - Uses linear interpolation (lerp) loop algorithms via `requestAnimationFrame` to scrub through frames smoothly matching mouse-wheel scroll progress.
   - Integrates cursor-following radial spotlight glows bounded dynamically to the left margin of the title.

2. **Refined Infinite Marquee Tickers**:
   - Double-row scrolling marquee tickers moving in opposite directions displaying trusted brand cards.
   - Built on a padding-margin wrapper (`py-6 -my-6`) to prevent card clipping during hover scale transitions.
   - Includes micro-interactions that rotate icons, shift borders, and toggle backgrounds to deep red, paired with double-nested pulsing live indicators.

3. **Cinematic Portfolio Showreels**:
   - High-impact case study vertical cards that autoplay muted vertical preview videos on hover and open full-screen video players on click.
   - Masonry layout grids with staggered index entrance animations on load.

4. **LUXURY Pricing & Billing Configurator**:
   - Dual-mode purchase flow: fixed tier packages (Bronze, Silver, Gold, Platinum) and an interactive services configurator (mix-and-matching Content, Production, and Marketing line items).
   - Slide-out Cart Drawer with dynamic calculations of subtotals, applied discount codes (e.g. `DIRECTOR20`), GST (18%), and connection pipelines to Razorpay.

5. **Sandbox Mode & Local Database Fallbacks**:
   - Fully operational local database simulator (`lib/mock_db.json`) when `MONGODB_URI` is omitted.
   - In-app interactive Sandbox Payment Emulator allowing developers and clients to simulate successful or declined transactions when Razorpay API keys are absent.

6. **Interactive Section Header Transitions**:
   - Scroll-triggered entrance animations for headings, subtitles, and decorative border separators.
   - Fluid active navigation highlighting updated by scrolling heights.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Vanilla CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React
- **Payments Gateway**: Razorpay (Node SDK integration)
- **Database**: MongoDB

---

## 📂 Project Structure

```bash
├── app/
│   ├── api/
│   │   ├── checkout/      # Razorpay order creator endpoint
│   │   ├── contact/       # Form submissions ingestion endpoint
│   │   └── verify/        # Cryptographic HMAC verification endpoint
│   ├── contact/           # Strategized lead form subpage
│   ├── highlights/        # Masonry showreels portfolio subpage
│   ├── globals.css        # Global CSS, keyframes, scrollbars & Tailwind configuration
│   ├── layout.tsx         # Unified layout wrapping cart states and navbar
│   └── page.tsx           # Homepage structure assembling layout sections
├── components/
│   ├── ui/                # UI components (Button, etc.)
│   ├── CartDrawer.tsx     # Shopping cart drawer slide-out overlay
│   ├── Footer.tsx         # Premium dark footer
│   ├── HighlightCard.tsx  # Vertical showreel cards component
│   ├── MockPaymentModal.tsx # Sandbox transaction emulator
│   └── Navbar.tsx         # Floating header navigation with active scroll logic
├── lib/
│   ├── mock_db.json       # Sandbox local JSON filesystem database
│   ├── mongodb.ts         # Connected MongoDB client with local fallbacks
│   ├── store.ts           # LocalStorage-persisted Zustand cart store
│   └── utils.ts           # Classnames merger helper
├── public/
│   ├── Hero Frames/       # 240 JPG frames for scroll scrubbing
│   ├── favicon.ico        # Custom brand tab icon
│   └── logo.png           # Transparent colorized brand logo
└── sections/
    ├── Companies.tsx      # Trusted by brands infinite tickers
    ├── Customize.tsx      # Mix-and-match custom package builder
    ├── FeaturedHighlights.tsx # Featured vertical showreel cards
    ├── Hero.tsx           # Sticky image sequence scroller and interactive text
    └── Packages.tsx       # Standard pricing tiers
```

---

## ⚙️ Configuration & Installation

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory to customize keys:
```env
# MongoDB Connection (Falls back to lib/mock_db.json if empty)
MONGODB_URI=your_mongodb_connection_uri

# Razorpay Keys (Runs in simulated Sandbox Mode if empty)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 4. Build for Production
```bash
npm run build
npm run start
```
