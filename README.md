# JBA — Operator Dashboard · Call & Events

A premium "Upcoming Events" experience for the **Jewel Business Accelerator** operator home dashboard. Built with React + Vite + Framer Motion. Designed to be hosted on GitHub Pages.

---

## ✦ What it does

- **Featured Next Event** hero with live countdown — auto-promotes the soonest upcoming session
- **Agenda (list) view** — default, clean, scannable
- **Premium Card (grid) view** — elevated, for retreats & flagship events
- **Auto-hides past events** and auto-sorts everything chronologically
- **Replay Library** toggle for completed sessions
- **Filters**: All · CEO Operating · JEWEL Labs · Retreats
- **Search** by session or host
- **Join buttons** wired to Zoom links (replaces RSVP)
- **Sticky Next-Event** bar
- **Admin panel** (gear icon, top-right) — non-technical add/edit/remove
- **Status badges**: Live Now · Live Soon · Registration Open · Completed
- Loading skeletons, empty states, hover micro-interactions
- **Dark mode** toggle
- Fully mobile responsive

---

## ✦ Quick start (local)

```bash
npm install
npm run dev
```

Open the printed `localhost` URL.

---

## ✦ Editing events (non-technical)

Two ways:

**1. Admin panel (easiest)** — click the ⚙ gear icon in the top-right of the dashboard. Add, edit, or remove events with a simple form. Changes save in the browser instantly.

**2. The JSON file** — open `src/data/events.js`. Each event is a plain object. Copy one, paste it, change the fields. Detailed instructions are written at the top of that file. Use the admin panel's **"Reset to file defaults"** button to clear browser changes and fall back to this file.

Event fields:

| Field | Example | Notes |
|---|---|---|
| `title` | `"JEWEL Lab Session"` | |
| `date` | `"2026-06-18"` | `YYYY-MM-DD` |
| `startTime` / `endTime` | `"12:00"` / `"13:00"` | 24-hour |
| `host` | `"Eleanor"` | |
| `category` | `"ceo"` / `"lab"` / `"retreat"` | must be one of these |
| `featured` | `true` | optional — pins to hero |
| `joinUrl` | Zoom link | |
| `description` | short paragraph | |
| `image` | URL or `""` | optional thumbnail |

The system **automatically**: hides past events, sorts chronologically, and promotes the nearest upcoming event into the Featured section. No manual maintenance.

---

## ✦ Deploy to GitHub Pages

1. Create a GitHub repo and push this folder.
2. In `vite.config.js`, the `base` is set to `"./"` which works for project pages. (If routing breaks, set it to `"/<your-repo-name>/"`.)
3. Build and deploy:

```bash
npm run build
npm run deploy
```

4. In your repo: **Settings → Pages → Source → `gh-pages` branch**.

Alternatively, drag the `dist/` folder into Netlify, or connect the repo to Vercel — both auto-detect Vite.

---

## ✦ Future integrations

The data layer (`src/data/events.js` + `eventEngine.js`) is intentionally decoupled from the UI. To connect a backend later, replace the static `EVENTS` import with a fetch from:

- **Supabase** — swap `EVENTS` for a `supabase.from('events').select()`
- **Airtable / Notion** — fetch records, map to the same object shape
- **Google Calendar API** — map calendar items to `{ title, date, startTime, ... }`
- **Zoom API** — generate per-operator unique join links into `joinUrl`
- **Circle** — embed this component or mirror events

As long as the data matches the event object shape, the entire dashboard works unchanged.

---

## ✦ Tech

React 18 · Vite 5 · Framer Motion 11 · No CSS framework dependency (self-contained styles) · Fraunces + Manrope typefaces.
