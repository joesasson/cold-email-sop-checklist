# Cold Email SOP Checklist

Web app for running through the Tedia Cold Email SOP one campaign at a time. Each campaign is a "run" — a fresh checklist instance with its own progress and notes.

**Live:** https://cold-email-sop-checklist.vercel.app

## What it does

The cold email SOP has 8 phases (Close Out Last → Strategy → Targeting → Copy → Tech → Send → Monitor → Post-Mortem) with 33 checklist items total. Each item expands to show the summary, ordered steps, and notes from the SOP.

This app turns that SOP into a trackable workflow:
- Create a run per campaign
- Tick items as you complete them
- Watch the progress bar fill
- Come back later — state persists in your browser

## How to use it

1. Open https://cold-email-sop-checklist.vercel.app
2. Click **+ new run** — names it with today's date by default
3. Rename it (e.g. `2026-Q2 enterprise outbound`) and add a one-line description
4. Work top to bottom. Click any item to expand the detail panel with the SOP steps
5. Check items off as you finish them. Progress bar at the top updates live
6. Leave and come back — your run is saved in localStorage on this browser

### Multiple runs

The home page (`/`) lists every run with completion %. Click one to open it (`/run/:id`). Use **+ new run** to start another campaign without losing the previous one. **reset** clears checkboxes on the current run; **delete** removes it entirely.

### Storage caveats

- Data lives in your browser's localStorage under key `cold-email-sop-runs-v1`
- Clearing site data wipes all runs
- Runs do not sync across devices or browsers
- No backend, no auth, no analytics

## Stack

- Vite + React 19 + TypeScript
- React Router v7
- Plain CSS with the dark-theme variables from the original HTML prototype
- localStorage for persistence
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev      # localhost:5173
npm run build    # type-check + production bundle
npm run preview  # serve the built bundle
```

## Project structure

```
src/
  checklist-data.ts   # all section/item content from the SOP
  pages/
    Home.tsx          # run list at /
    RunPage.tsx       # individual checklist at /run/:id
  storage.ts          # localStorage helpers
  App.tsx             # router
```

To edit checklist content, change [src/checklist-data.ts](src/checklist-data.ts) and redeploy.

## Deployment

Pushes to `master` auto-deploy on Vercel. Manual:

```bash
vercel --prod
```

`vercel.json` rewrites all paths to `index.html` so `/run/:id` deep links work.
