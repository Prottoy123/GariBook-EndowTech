# 🚗 Garibook - Modern Car Rental & Intercity Travel Platform

<p align="center">
  <img src="./src/assets/garibook/gaibook-logo.svg" alt="Garibook Logo" width="220" />
</p>

<p align="center">
  A pixel-perfect, responsive web application inspired by <strong><a href="https://garibook.com/">Garibook</a></strong> — Bangladesh's premier platform for intercity car rental, airport transfers, and hourly chauffeur services.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/AOS-Animation-orange" alt="AOS" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel" alt="Vercel" />
</p>

---

## 🌟 Key Features

### 1. 🧭 Navigation Bar
- Responsive top navbar with clean typography and spacing.
- Integrated language selector (`English` / `বাংলা`) and direct user login buttons.
- Mobile-friendly responsive menu toggle.

### 2. ⚡ Hero Section & Typewriter Effect
- Smooth GSAP-powered staggered entrance animations.
- Dynamic typewriter title cycling through signature phrases without layout shifts:
  - *“Assurance of Effortless Travel”*
  - *“Luxury Trips with Comfort”*
  - *“Your Journey Starts Here ...”*
- One-click app download CTA button linking directly to Garibook mobile app.

### 3. 📝 Interactive Multi-Modal Booking Widget
A dynamic booking form supporting multiple travel modes with intelligent field swapping:
- **Car Rental Modes**:
  - **One Way**: Choose Car, Pickup Location, Drop-off Location, Pickup Date & Time.
  - **Round Way**: Automatically reveals an additional **Return Date & Time** input field.
  - **Hourly Rental**: Dynamically switches the layout to replace Drop-off with a responsive **Hours Stepper (`-` / `+`)** and repositions the Date & Time picker.
- **Airport Rental Modes**:
  - **From Airport**: Select arrival airport from major airports across Bangladesh, with custom drop-off destination.
  - **From Home**: Reverse pickup and destination logic with dedicated airport selection.
- **Fleet Selector**: Interactive custom dropdown menu showing available vehicle classes (*Sedan*, *Sedan Premium*, *Noah*, *HiAce*) with seat capacity badges.

### 4. 📊 Stats & Impact Section
- Bold section header: *"From Everyday Rides to Meaningful Journeys"*.
- Authentic Garibook golden yellow counters (`#fdd300`) with snappy scroll-triggered staggered transitions.
- Interactive stats including *Trip Requests (300,000+)*, *Total Customers (850,000+)*, *Active Drivers (35,000+)*, and *Districts Covered (64)*.
- Infinite moving city skyline animation featuring a driving Sedan car GIF.

### 5. 🚘 Comprehensive Business Sections
- **Services Grid**: Showcases intercity rides, airport transfers, corporate transport, and hourly rentals with custom illustrations.
- **Freedom Journey & People Together**: Brand storytelling highlighting customer peace of mind, affordability, and nationwide coverage.
- **Booking to Arrival**: Step-by-step ride flow visualization.
- **Smart Driver Program**: Highlights trained, verified chauffeurs.
- **Featured News & Media**: Coverage from top national media portals.
- **Passenger Testimonials**: Real passenger stories and ratings.
- **Beyond Destinations**: Travel guide and tourist spots across Bangladesh.
- **Mobile App Download Banner**: Direct links to Google Play and Apple App Store.
- **Floating Support Widgets**: Always-accessible live chat and communication buttons.

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool & Bundler**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS animations
- **Animation Libraries**:
  - [GSAP (GreenSock)](https://greensock.com/gsap/) & `@gsap/react`
  - [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Garibook SVGs
- **Linter**: [Oxlint](https://oxc.rs/)
- **Deployment**: [Vercel](https://vercel.com/) (with SPA rewrite support via `vercel.json`)

---

## 📁 Project Structure

```text
Garibook/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Brand logos, icons, vehicle graphics, and media
│   │   └── garibook/       # Garibook-specific SVGs, WebPs, and PNGs
│   ├── components/
│   │   ├── booking/        # Interactive booking widget & fleet selectors
│   │   │   └── BookingWidget.jsx
│   │   ├── hero/           # Hero banner & animated typewriter headline
│   │   │   └── Hero.jsx
│   │   ├── layout/         # Navigation, Footer, and Floating Action Buttons
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── FloatingWidgets.jsx
│   │   └── sections/       # Landing page feature & informational sections
│   │       ├── Stats.jsx
│   │       ├── ServicesGrid.jsx
│   │       ├── FreedomJourney.jsx
│   │       ├── PeopleTogether.jsx
│   │       ├── BookingArrival.jsx
│   │       ├── SmartDriver.jsx
│   │       ├── FeaturedNews.jsx
│   │       ├── PassengerSpeak.jsx
│   │       ├── BeyondDestinations.jsx
│   │       └── DownloadApp.jsx
│   ├── App.css             # Component-level animation rules & custom utilities
│   ├── App.jsx             # Main application orchestrator & AOS initializers
│   ├── index.css           # Tailwind v4 configuration & root font styling
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
├── vercel.json             # SPA route rewrites for clean Vercel deployment
└── vite.config.js          # Vite build & plugin settings
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0 or newer) installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Garibook-Endowtech/Garibook
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:5173/` (or the port specified in terminal output).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite dev server with hot module replacement (HMR). |
| `npm run build` | Builds the optimized production bundle in the `dist` folder. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Fast linting using Oxlint. |

---

## 🌐 Deployment

The project is pre-configured for instant deployment on **Vercel** with the included `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

To deploy using Vercel CLI:
```bash
npm install -g vercel
vercel
```
Or simply connect your Git repository directly via the [Vercel Dashboard](https://vercel.com/).

---

## 📄 License & Credits

- Inspired by the official [Garibook](https://garibook.com/) platform.
- Developed by **Endowtech**.
