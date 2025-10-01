# MCAN Frontend

MCAN Frontend is a Progressive Web App (PWA) built with React and TypeScript for the MCAN-HQ organization. It provides a modern, responsive interface for members, administrators, and visitors to access resources, manage memberships, view prayer times, and more.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup & Installation](#setup--installation)
- [Available Scripts](#available-scripts)
- [PWA Support](#pwa-support)
- [Netlify Deployment](#netlify-deployment)
- [Detailed Module Breakdown](#detailed-module-breakdown)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

MCAN Frontend is designed to serve the needs of MCAN-HQ members and administrators. It offers authentication, dashboards, Islamic resources, notifications, and more, all in a modern, mobile-friendly interface. The app is installable as a PWA and supports offline usage.

## Features

- **User Authentication:** Login, registration, password reset, protected routes.
- **Admin Dashboard:** Manage members, view statistics, and property management.
- **Prayer Times:** Accurate daily prayer times and Islamic resources.
- **State Chapters Map:** Interactive map of MCAN chapters by state.
- **Membership Management:** Join, renew, and manage memberships.
- **Notification System:** Real-time notifications and notification center.
- **Dark Mode:** Toggle between light and dark themes.
- **Responsive Design:** Works on all devices.
- **PWA Support:** Installable, offline access, and push notifications.

## Tech Stack

- **Frontend:** React, TypeScript
- **Styling:** CSS
- **PWA:** Service Worker, Manifest
- **Deployment:** Netlify

## Folder Structure

```
public/
  index.html          # Main HTML file
  manifest.json       # PWA manifest
  sw.js               # Service worker
  mcanlogo.jpg        # Logo asset
  _redirects          # Netlify redirects
src/
  App.tsx             # Main app component
  index.tsx           # Entry point
  index.css           # Global styles
  assets/             # Static assets
  components/         # Reusable UI components
    auth/             # Auth-related components
    dashboard/        # Dashboard widgets
    islamic/          # Islamic resources
    layout/           # Navbar, Footer, etc.
    map/              # State chapters map
    notifications/    # Notification system
    prayer/           # Prayer times
    pwa/              # PWA install prompt
  contexts/           # React Contexts (Auth, Theme)
  data/               # Mock data
  pages/              # Application pages
    admin/            # Admin dashboard
    auth/             # Auth pages
    dashboard/        # User dashboard
    services/         # Service pages
  services/           # API service modules
  types/              # TypeScript type definitions
  utils/              # Utility functions
netlify.toml          # Netlify configuration
package.json          # Project metadata and scripts
tsconfig.json         # TypeScript configuration
```

## Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/MCAN-HQ/mcan_frontend.git
   cd mcan_frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will run at `http://localhost:3000`.

## Available Scripts

- `npm start` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Lint codebase

## PWA Support

- **Manifest:** Located in `public/manifest.json` for app metadata and icons.
- **Service Worker:** `public/sw.js` enables offline support and caching.
- **Install Prompt:** Custom install prompt in `src/components/pwa/InstallPrompt.tsx`.
- **Offline Access:** App works offline after first load.

## Netlify Deployment

- **Configuration:** `netlify.toml` and `public/_redirects` handle routing and SPA support.
- **Continuous Deployment:** Pushes to `master` branch trigger automatic deploys.

## Detailed Module Breakdown

### Components
- **Auth:** Login, Register, ProtectedRoute, Forgot/Reset Password
- **Dashboard:** StatsCard, EIDCard, DashboardChart
- **Islamic:** IslamicResources
- **Layout:** Navbar, Footer, DarkModeToggle, SearchBar
- **Map:** StateChaptersMap
- **Notifications:** NotificationBell, NotificationCenter
- **Prayer:** PrayerTimes
- **PWA:** InstallPrompt

### Contexts
- **AuthContext:** Handles authentication state and user info
- **ThemeContext:** Manages dark/light mode

### Pages
- **HomePage:** Landing page
- **AboutPage, ContactPage, ServicesPage:** Informational pages
- **MembershipPage:** Membership management
- **IslamicResourcesPage, PrayerTimesPage:** Islamic content
- **StatesPage:** State chapters overview
- **AdminDashboard:** Admin controls
- **DashboardPage, EIDPage, ProfilePage:** User dashboard and profile
- **NotFoundPage:** 404 handler

### Services
- **authService.ts:** Authentication API calls
- **adminService.ts:** Admin-related API calls
- **eidService.ts:** EID card management
- **propertyService.ts:** Property management

### Types
- **index.ts:** Shared types and interfaces
- **images.d.ts:** Image type declarations

### Utilities
- **theme.ts:** Theme switching logic

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

### Coding Standards
- Use TypeScript for all code
- Follow React best practices
- Write clear, descriptive commit messages
- Add comments and documentation where necessary

## License

This project is licensed under the MIT License.

---

For questions or support, contact MCAN-HQ or open an issue on GitHub.
