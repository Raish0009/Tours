# Wanderlust Tour & Travels - Luxury Travel Website Frontend

A modern, responsive, animated frontend website for a luxury Tour & Travel agency built with **Bootstrap 5.3**, **Bootstrap Icons**, **AOS (Animate on Scroll)**, and vanilla CSS & JavaScript.

---

## 🌟 Pages Overview

1. **Home (`index.html`)**
   - High-impact hero section with award badge and call-to-actions
   - Interactive live trip search & filter bar (Destination, Trip Style, Dates, Guests)
   - Value proposition cards (Handcrafted itineraries, Best price guarantee, 24/7 concierge, Flexible booking)
   - Trending destination cards (Santorini, Swiss Alps, Kyoto, Dubai)
   - Handcrafted tour package cards with "Quick Details" and "Book Now" triggers
   - Limited-time flash deal banner with a real-time countdown timer
   - Animated traveler statistics counter (18,500+ Explorers, 280+ Destinations, 99.4% Rating)
   - Verified traveler review testimonials
   - Instagram moments preview strip
   - VIP Travel Club newsletter with instant feedback toast

2. **About Us (`about.html`)**
   - Company background story and philosophy
   - Core pillars & principles (Safety, Sustainability, Authenticity, Bespoke Luxury)
   - Company journey & milestones timeline (2014 founding to 2026 #1 ranking)
   - Certified lead expedition guide profiles with portraits and specialties
   - Official accreditations (IATA, UNWTO, SafeTravels, TripAdvisor)

3. **Tour Packages (`packages.html`)**
   - Live search input filtering destinations and package titles in real-time
   - Category filter pills (Beach & Islands, Mountain & Trek, Culture & Heritage, Desert Safari, Nature & Aurora)
   - Sort dropdown (Price Low/High, Rating, Duration)
   - 8 comprehensive tour package cards with pricing, duration, inclusion icons, and discount tags
   - Interactive package details modal with full day-by-day highlights
   - Interactive instant reservation modal with real-time price calculator (Adults, Children 50% discount, Insurance, VIP Airport Transfer)

4. **Gallery (`gallery.html`)**
   - Category filtering (All, Beach, Mountain, Heritage, Desert, Nature)
   - 12 high-resolution photographic showcase cards with location and caption overlays
   - Custom Fullscreen Lightbox Modal with Next/Previous arrows, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Esc`), and image counter
   - 4K aerial drone cinematic tour video previews

5. **Contact Us (`contact.html`)**
   - Direct communication cards (Headquarters, 24/7 Hotline, Email, Working Hours)
   - Custom trip consultation form with validation and animated confirmation toast
   - Interactive Frequently Asked Questions (FAQ) accordion
   - Embedded headquarters location map frame

---

## 🚀 How to Run Locally

You can open any HTML file directly in any modern web browser, or serve it using Python or any local web server:

```bash
# Using Python
python -m http.server 8080

# Then open in your browser:
# http://localhost:8080
```

---

## 📁 Project Structure

```text
TourTravel/
├── index.html            # Home page
├── about.html            # About Us page
├── packages.html         # Tour Packages page
├── gallery.html          # Photo & Video Gallery page
├── contact.html          # Contact Us page
├── css/
│   └── style.css         # Custom responsive styles, animations, variables
├── js/
│   └── main.js           # Live search, filters, price calculator, lightbox, counters
├── images/               # High-resolution destination & guide portrait assets
│   ├── hero-bora-bora.jpg
│   ├── swiss-alps.jpg
│   ├── kyoto-japan.jpg
│   ├── santorini-greece.jpg
│   ├── dubai-desert.jpg
│   ├── rome-colosseum.jpg
│   ├── bali-waterfall.jpg
│   ├── iceland-aurora.jpg
│   ├── guide-1.jpg
│   └── guide-2.jpg
└── README.md
```

---

## 📱 Responsiveness & Browser Compatibility

- Built with Bootstrap 5 mobile-first grid system.
- Optimized for mobile phones (320px - 480px), tablets (768px), laptops (1024px), and ultra-wide screens (1440px+).
- Offcanvas slide-out menu on mobile devices.
- Floating WhatsApp and Smooth Back-to-Top buttons.
