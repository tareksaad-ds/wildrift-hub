# Tekoo Hub

A landing page for **Tekoo Hub** — a League of Legends Challenger mid lane player offering personal coaching sessions. Visitors can submit their email to get contacted by Tekoo directly.

---

## Features

- Hero section introducing Tekoo Hub and his coaching offer
- Stats bar highlighting rank, role, and coaching experience
- "What You'll Learn" section covering key mid lane topics
- Email sign-up form with client-side validation and a success confirmation state
- Fully responsive layout with a dark gold-accented design

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 7 |
| SWC | via `@vitejs/plugin-react-swc` |
| ESLint | 9 (flat config) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check then build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

## Project Structure

```
├── src/
│   ├── main.tsx        # App entry point
│   ├── App.tsx         # Landing page component
│   ├── App.css         # Page styles
│   ├── index.css       # Global base styles
│   └── assets/         # Static assets
├── public/             # Public assets (served as-is)
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── CLAUDE.md           # AI assistant instructions
```

## License

MIT
