# MCU Watchlist • Marvel Cinematic Universe Tracker

> A sleek, mobile-first, offline-capable Progressive Web Application (PWA) to track your journey through the Marvel Cinematic Universe from Phase 1 all the way through Phase 6 and the Multiverse Saga finale.

---

## ⚡ Key Features

- **Comprehensive MCU Database**: Complete catalog of 72 entries spanning Phase 1 to Phase 6+ (feature films, Disney+ series, and classic Marvel One-Shots).
- **Dual Timeline Sorting**: Instant toggle between **Release Order** and **In-Universe Chronological Order**.
- **4 Preset Watchlist Views**:
  - `All Connected`: Full MCU canon.
  - `Films Only`: Core cinematic releases only.
  - `Disney+ Collection`: Entries available to stream on Disney+.
  - `Custom Watchlist`: Select, curate, and track your own custom list of titles.
- **Auto-Adjusting Mobile Cards**: Cards automatically adjust their height to fit multi-line titles without truncation (`...`), ensuring a clean layout across all screen sizes.
- **Zero Backend / Instant Offline**: All watched states, filters, and custom lists persist locally in your device's `localStorage`.
- **Milestone Celebration**: Interactive progress bar with confetti celebrations upon hitting 100% completion.
- **Cinematic Marvel Aesthetic**: High-contrast dark theme (`#0B0E14`), Marvel crimson accents (`#E62429`), gold phase badges, and an animated Arc Reactor branding icon.

---

## 🚀 How It Works Offline

This application is designed as a **100% client-side, zero-network-dependency PWA**:

1. **Embedded Static Dataset**: All film and series metadata (titles, release dates, phases, orders, Disney+ availability) is bundled directly into the application code (`src/data/mcuData.ts`). There are no external API calls or database lookups.
2. **Service Worker Pre-Caching**: Powered by `vite-plugin-pwa` and Google Workbox, the service worker caches the HTML, CSS, JavaScript, icons, and fonts during the first visit. Subsequent visits load instantly from the local Cache Storage—even in complete airplane mode.
3. **Local State Persistence**: Checklist progress is saved to browser `localStorage`. Your progress stays safe across app closes, browser restarts, and offline sessions without needing any account or login.

---

## 📱 How to Install as a Progressive Web App (PWA)

### On iOS (iPhone / iPad - Safari)
1. Open **Safari** and navigate to your deployed URL or local network address (e.g. `http://<your-pc-ip>:8085`).
2. Tap the **Share** icon (square with an arrow pointing up at the bottom of the screen).
3. Scroll down and select **"Add to Home Screen"** (`➕`).
4. (Optional) Name the app **"MCU Tracker"** and tap **Add** in the top-right corner.
5. The **Arc Reactor** app icon will now appear on your home screen. Tapping it opens the app in **standalone fullscreen mode** (no browser bars or URL inputs).

### On Android (Chrome / Brave / Edge)
1. Open the app in **Chrome**.
2. Tap the **three dots menu** (`⋮`) in the top-right corner.
3. Tap **"Install app"** or **"Add to Home screen"**.
4. Confirm by tapping **Install**.

### On Desktop (Chrome / Edge)
1. Navigate to the app URL.
2. Click the **Install** icon on the right side of the browser URL address bar (or go to `Settings > Apps > Install MCU Watchlist`).

---

## 🛠️ Development & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm` or `yarn`

### Installation
```bash
# Clone or navigate to the project directory
cd mcu-film-checklist

# Install dependencies
npm install

# Start development server on port 8085
npm run dev
```

The dev server will be accessible at:
- **Local**: `http://localhost:8085/`
- **Network**: `http://<your-local-ip>:8085/` (to test on mobile devices connected to the same Wi-Fi)

### Building for Production
```bash
npm run build
```
This compiles TypeScript, bundles optimized assets with Vite, and generates the service worker (`dist/sw.js`) and web app manifest (`dist/manifest.webmanifest`).

To preview the production build locally:
```bash
npm run preview
```

---

## 🗂️ Tech Stack
- **Framework**: React 18 with TypeScript
- **Bundler & PWA**: Vite + `vite-plugin-pwa` (Workbox)
- **Styling**: Tailwind CSS (with iOS safe-area utilities: `pt-[env(safe-area-inset-top)]`, `pb-[env(safe-area-inset-bottom)]`)
- **Icons**: Lucide React + custom SVG Arc Reactor badge
- **Micro-Interactions**: Canvas Confetti
