# CardsFlow Frontend

This repository contains the production-ready frontend for CardsFlow, a high-performance modern virtual card issuance platform. built with Next.js 16 (App Router), React, Tailwind CSS v4, and Framer Motion.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v20.x` or later
- npm `v10.x` or later

### 2. Environment Variables
Copy the `.env.example` file to `.env.local` to configure your local environment:
```bash
cp .env.example .env.local
```
Update the API URL and site URL as needed before starting the application.

### 3. Installation
Install the required dependencies:
```bash
npm install
```

### 4. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Build for Production

This project uses Turbopack and is fully optimized for static generation and server-side rendering where applicable.

```bash
# Compile and build Next.js output
npm run build

# Start production server
npm run start
```

## 🛠 Project Architecture

- `src/app/`: Next.js App Router setup with all 14+ static paths.
- `src/components/ui/`: Primitive UI components (buttons, magnetize-wrappers, etc.).
- `src/components/blocks/`: Reusable, higher-order UI blocks (Hero, CTAs, Grid Cards).
- `src/components/layout/`: Global layout elements (Navbar, Footer, SubPageLayout).
- `src/components/sections/`: Home page specific sections.
- `src/types/`: Typescript types for structured data, specifically designed to help backend API integration.
- `src/lib/`: Utility functions (Tailwind Merge, clsx bindings).

## 🔗 Backend/API Integration Plan

All sections of the application have been stubbed out structurally. Current client-side data is exported from `src/data/data.ts` or hardcoded in templates. To integrate a live backend:

1. **StatsBar**: Hardcoded statistics → `GET /api/stats`
2. **UseCaseTabs / ElectricCard**: Hardcoded card specs → `GET /api/card-products`
3. **Authentication**: Link `/onboarding` and `/register` CTA endpoints to actual OAuth or JWT login callbacks. 
4. **Forms**: All CTA forms point to `#` or `/contact` natively but currently lack API POST handlers.

## 🧪 Testing

We recommend verifying visual regression via `npm run lint` and a Lighthouse performance audit on any structural changes. This frontend achieves baseline ≥90+ in all Google Lighthouse vitals.
