# GCPLens | Premium GCP Usage & Location Insights Dashboard

![GitHub](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)
![GitHub](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)
![GitHub](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![GitHub](https://img.shields.io/badge/Google_Maps-API-4285F4?logo=google-maps)
![GitHub](https://img.shields.io/badge/GCP-Ready-4285F4?logo=google-cloud)

**GCPLens** is a high-end, futuristic dashboard designed to visualize Google Cloud resource usage, costs, and service health across global locations. Built with a focus on "Vibrant" aesthetics and glassmorphism, it provides distributed SaaS and industrial teams with real-time operational insights.

---

## 🚀 Key Features

- **Interactive Global Footprint**: Real-time Google Maps integration with custom animated markers for site tracking and project correlation.
- **Granular Usage Analysis**: Advanced resource consumption visualization using Recharts (Area & Bar charts).
- **Service Health Monitoring**: Comprehensive regional health dashboard with incident investigating timelines and SLA tracking.
- **Optimization Heuristics**: Built-in suggestion engine for cost and performance optimizations.
- **Premium UI**: Dark-mode glassmorphism design system with Framer Motion animations.

## 🛠️ Technical Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Visuals**: [Framer Motion](https://www.framer.com/motion/), [Recharts](https://recharts.org/)
- **Maps**: [@vis.gl/react-google-maps](https://github.com/visgl/react-google-maps)
- **Deployment**: [Docker](https://www.docker.com/), [Google Cloud Run](https://cloud.google.com/run)

---

## 🏗️ Getting Started

### 1. Requirements
- Node.js 18+
- Google Maps JavaScript API Key

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 4. Run Development
```bash
npm run dev
```

---

## ☁️ Deployment (GCP Cloud Run)

This project is configured for **Continuous Deployment** from GitHub to Google Cloud Run. 

1. Push this code to your GitHub repository.
2. Go to [GCP Cloud Run Console](https://console.cloud.google.com/run).
3. Select **Continuously deploy from a repository**.
4. Cloud Run will use the included `Dockerfile` to automatically build and host the dashboard.

---

## 🏷️ Tags
#GCP #NextJS #TypeScript #CloudArchitecture #FullStackDevelopment #Docker #CloudRun #DataVisualization #Dashboard #React #TailwindCSS #GoogleCloudPlatform #DevOps
