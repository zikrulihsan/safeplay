# 🛡️ Aman Yuk! — Interactive Learning Platform for Kids

> A fully animated, accessible web app that helps young children become safe and aware of the world around them — a **multi-module** platform hosted by **Robi**, a friendly robot guardian. The first module teaches **what not to do** around everyday hazards (fire, electricity, sharp objects, water, chemicals, heights); more modules (environment, road safety, manners, hygiene) are on the way. Content is in Bahasa Indonesia.

<p align="left">
  <img alt="React" src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white">
  <img alt="Tests" src="https://img.shields.io/badge/tests-23%20passing-2FA84F">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">
</p>

---

## ✨ Demo

> 📸 _Drop a screenshot or screen recording here once deployed._ A short GIF of the card flip + the “Aman atau Bahaya?” quiz makes the strongest first impression.

```bash
# Run it locally in ~30 seconds (see Getting Started below)
npm install && npm run dev
```

Recommended free hosting: **Vercel**, **Netlify**, or **GitHub Pages** (the Vite config uses a relative `base`, so it works on a project subpath out of the box).

---

## 🎯 What it does

The app is a **hub of learning modules**. The home page greets the child with Robi and a grid of module cards; tapping one opens that module at its own URL (`/#/keselamatan`, `/#/lingkungan`, …). Modules still in progress show a friendly “Segera hadir” (coming soon) placeholder.

**Modules**

| Module | Slug | Status |
| --- | --- | --- |
| 🛡️ Keselamatan di Rumah (home safety) | `keselamatan` | ✅ Available |
| 🌱 Sayang Lingkungan (environment) | `lingkungan` | 🚧 Coming soon |
| 🚦 Aman di Luar Rumah (road/outdoor safety) | `jalan` | 🚧 Coming soon |
| 🤝 Sopan & Berbagi (manners & sharing) | `sosial` | 🚧 Coming soon |
| 🧼 Bersih & Sehat (hygiene) | `kebersihan` | 🚧 Coming soon |

Inside the **Keselamatan** module, children learn through three connected experiences:

1. **Hero** — Robi the robot mascot (animated SVG) introduces the mission.
2. **“Awas, Ini Berbahaya!”** — six flippable hazard cards. The front shows the hazard and a clear _“JANGAN…”_ (don’t) message; the back explains **why** it’s dangerous and **what to do instead**.
3. **“Cerita Robi”** — pick a topic and step through a short, illustrated example story (scene by scene, with a closing _“Pesan Robi”_ takeaway). The story models the **safe choice** — never how to perform the unsafe act. Topics without a story yet are shown as “segera hadir”.
4. **“Aman atau Bahaya?”** — an interactive quiz. Kids tap **Aman** (safe) or **Bahaya** (dangerous) on everyday scenarios, collect stars, get instant encouraging feedback with confetti, and see a friendly results screen.

A closing **“Jurus Anak Pintar”** section and a note **for parents** round out the experience.

> **Content-safety design:** every topic is framed as _“don’t do this → do this safer thing instead.”_ The app never explains how to perform an unsafe action — it only teaches avoidance and the safe alternative.

---

## 🧩 Features

- **Full motion design** — staggered page-load reveals, scroll-triggered section reveals, an animated mascot, looping SVG illustrations, a CSS 3D card flip, and a physics-y confetti burst.
- **Accessibility first**
  - Respects `prefers-reduced-motion` at two layers: a global CSS fallback _and_ a `useReducedMotion` hook that disables JS/SVG animation per-component.
  - Flip cards are real `<button>`s with `aria-expanded`; the safe-action text is always in the DOM for screen readers (not hidden behind a visual flip).
  - Live regions (`aria-live`) announce the score and quiz feedback.
  - Visible `:focus-visible` rings; full keyboard operability.
- **Type-safe domain model** — `Hazard`, `SafetyScenario`, `SafetyTip` with `readonly` fields; data is fully decoupled from UI.
- **Tested game engine** — quiz logic is a pure `useReducer` state machine, unit-tested independently of the DOM.
- **Production tooling** — strict TypeScript, ESLint (incl. `jsx-a11y`), Prettier, Vitest + Testing Library, and a GitHub Actions CI pipeline.

---

## 🛠️ Tech stack & why

| Choice | Reason |
| --- | --- |
| **React 18 + TypeScript (strict)** | Component model fits a card/quiz UI; `strict` + `noUncheckedIndexedAccess` + `exactOptionalPropertyTypes` catch real bugs at compile time. |
| **Vite** | Fast dev server and lean, tree-shaken production builds; first-class TS/JSX. |
| **Tailwind CSS** | Design tokens (colors, fonts, keyframes) centralised in `tailwind.config.ts`; consistent styling without a separate CSS-naming burden. |
| **Framer Motion** | Declarative orchestration (staggered reveals, `whileInView`, `AnimatePresence`) that’s easy to gate behind reduced-motion. |
| **Vitest + Testing Library** | Vite-native test runner; tests behaviour (roles, a11y attributes) rather than implementation details. |
| **ESLint + Prettier + GitHub Actions** | Enforced quality gates so the repo stays green and reviewable. |

> I deliberately chose **stable, widely-recognised versions** (React 18, Tailwind 3) over bleeding-edge ones to keep the project easy to clone, review, and build for anyone visiting from GitHub.

---

## 🏗️ Architecture

The app separates **modules**, **data**, **domain logic**, and **presentation**. A single registry drives both the home hub and the router:

```
src/
├── App.tsx                # HashRouter; builds one route per module from the registry
├── types/
│   ├── module.ts          # LearningModule, ModuleStatus, ModuleAccent
│   └── index.ts           # Domain models (Hazard, SafetyScenario, SafetyTip)
├── data/
│   ├── modules.ts         # 🔑 Module registry (single source of truth)
│   ├── hazards.ts         # Keselamatan content — no UI here
│   └── questions.ts       # Quiz scenarios + tips
├── pages/
│   ├── HomePage.tsx       # Hub: Robi intro + grid of module cards
│   ├── SafetyModule.tsx   # The Keselamatan module page
│   └── ComingSoon.tsx     # Placeholder for modules still in progress
├── lib/                   # Pure, testable helpers (shuffle, gameResult, cn)
├── hooks/
│   ├── useGame.ts         # Quiz state machine (useReducer) + exported reducer for tests
│   └── useReducedMotion.ts# Tracks the OS reduced-motion preference
├── components/
│   ├── home/              # ModuleCard
│   ├── layout/            # ModuleLayout (shared chrome), Hero, Footer, BackgroundDecor, SectionHeading
│   ├── mascot/            # RobiMascot (animated SVG)
│   ├── hazards/           # HazardSection, HazardCard, illustrations/*
│   ├── game/              # SafetyGame, ScenarioCard, ScoreBoard, GameResult
│   ├── tips/              # TipsSection
│   └── ui/                # Button, Reveal, Confetti (reusable primitives)
├── styles/index.css       # Tailwind layers + reduced-motion fallback
└── main.tsx
```

**Design principles**

- **The module registry is the single source of truth.** `src/data/modules.ts` lists every module; `App.tsx` generates a route per entry and `HomePage` renders a card per entry. Adding or shipping a module is a one-object edit there.
- **Routing degrades gracefully on static hosts.** `HashRouter` is used because Vite builds with a relative `base`, so deep links and refreshes work on GitHub Pages / Netlify without server-side SPA fallback.
- **Pure logic is isolated and tested.** The quiz never randomises _inside_ the reducer; the deck is built outside and passed via the `START` action, keeping the reducer pure and the RNG injectable.
- **Data is content, not code.** Adding a hazard or quiz scenario is a one-object edit in `src/data/` — no component changes required.
- **Motion is a prop, not a global assumption.** Each page reads `useReducedMotion` and threads `reduceMotion` down, so every animated component has a non-animated branch.

---

## ♿ Accessibility notes

- `prefers-reduced-motion` is honoured globally (CSS) and granularly (hook), so users who opt out get a calm, static experience.
- Interactive elements are semantic (`<button>`), labelled, keyboard-operable, and expose state via ARIA.
- Color choices target legible contrast on the playful palette; text on gradient card backs is white on saturated colors.

---

## 🚀 Getting started

**Prerequisites:** Node.js ≥ 18 and npm.

```bash
# 1. Install
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

### Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR. |
| `npm run build` | Type-check then build to `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run typecheck` | Run `tsc --noEmit` over app and config. |
| `npm run lint` | ESLint with zero-warning policy. |
| `npm run format` / `format:check` | Apply / verify Prettier formatting. |
| `npm run test` | Run the Vitest suite once. |
| `npm run test:watch` | Watch mode. |
| `npm run test:coverage` | Coverage report (v8). |

---

## 🧪 Testing

23 tests across pure logic, hooks, and components:

- `lib/shuffle.test.ts` — immutability, permutation invariant, determinism.
- `lib/gameResult.test.ts` — score → message mapping, divide-by-zero guard.
- `hooks/useGame.test.ts` — reducer transitions (scoring, locking, advancing, finishing) and full-round play via `renderHook`.
- `components/hazards/HazardCard.test.tsx` — flip toggles `aria-expanded`; safe-action text is always present.
- `components/game/SafetyGame.test.tsx` — answering reveals feedback and locks the buttons.

```bash
npm run test
```

---

## 🤝 Continuous integration

`.github/workflows/ci.yml` runs on every push and PR to `main`: install → type-check → lint → format check → test → build. The repo is configured to stay green end-to-end.

---

## ➕ Adding a new module

The scaffold makes new modules a focused, repeatable job:

1. Add content data under `src/data/` (e.g. `src/data/lingkungan.ts`), following the pattern of `hazards.ts` / `questions.ts`.
2. Build the module page under `src/pages/` (reuse `SectionHeading`, `Reveal`, `Button`, and `useGame` — the quiz state machine is generic over `SafetyScenario`).
3. In `src/data/modules.ts`, flip the module's `status` to `'available'` and set its `Component`. The home card and route update automatically.

### Adding a topic story

Stories live in `src/data/stories.ts` as `Story` objects (one per `HazardId`). To add one:

1. Draw scene illustrations under `src/components/stories/illustrations/` (each is an `IllustrationProps` SVG, like the `ApiStory*` components) and re-export them from that folder's `index.ts`.
2. Append a `Story` to `STORIES` with its `scenes` (text + `Illustration`) and a closing `moral`.

The “Cerita Robi” section picks it up automatically: the topic chip unlocks and the carousel renders the new scenes. No component changes needed.

## 🗺️ Possible extensions

- 🔊 Audio narration / text-to-speech for pre-readers.
- 🌐 `i18n` layer (the content is already isolated in `src/data/`).
- 💾 Persisted progress and a parent “progress” view across modules.
- 🎒 Fill in the four placeholder modules (environment, road safety, manners, hygiene).

---

## 📄 License

[MIT](./LICENSE) © Zikrul

> Built as an educational tool. Parental supervision remains the primary safeguard for children — this app is a companion, not a replacement.
