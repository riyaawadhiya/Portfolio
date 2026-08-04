# Riya Awadhiya — Premium Portfolio (with SMTP Contact Backend)

A cinematic, award-site-style portfolio: matte-black + gold luxury theme, Lenis smooth
scroll, Framer Motion micro-interactions, a GSAP ScrollTrigger pinned "Development
Process" section (icon-led cards, not plain text), a custom gold cursor, click-to-expand
project case studies, and a **real Node/Express + MongoDB + SMTP contact form** — no
third-party email service required.

```
riya-premium-portfolio/
├── src/          React + Vite frontend (the site itself)
├── public/       resume PDF, static assets
└── server/       Express + MongoDB + Nodemailer backend (contact form)
```

## 1. Run the backend (`/server`)

The backend follows a strict repository pattern — exactly **3 logic files**:

- `src/contact.repository.js` — the Mongoose schema *and* all database operations
- `src/contact.controller.js` — validation, spam protection, SMTP email sending
- `src/contact.router.js` — maps HTTP routes to the controller

(`server.js` is just the tiny app bootstrap — CORS, JSON parsing, mounting the router.)

```bash
cd server
cp .env.example .env
# edit .env — add your MongoDB URI and SMTP credentials (see below)
npm install
npm run dev          # http://localhost:5000
```

**Getting SMTP working (Gmail example):**
1. Turn on 2-Step Verification on the Gmail account you want to send from
2. Generate an "App Password" at https://myaccount.google.com/apppasswords
3. Put that 16-character password (not your normal Gmail password) in `SMTP_PASS`
4. `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER` = that Gmail address

Any other SMTP provider (Zoho, Outlook, SendGrid SMTP relay, etc.) works the same way —
just change host/port/user/pass.

Every enquiry is saved to MongoDB **first**, then emailed — so even if the SMTP send
fails, nothing is lost; you can still read submissions from the database.

`GET /api/health` → health check
`POST /api/contact` → public, saves + emails a submission
`GET /api/contact` → protected; send header `x-admin-key: <ADMIN_KEY>` to list all enquiries

## 2. Run the frontend (`/`)

```bash
npm install
npm run dev           # http://localhost:5173
```

The Vite dev server proxies `/api/*` to `http://localhost:5000`, so run the backend
first (or alongside) for the contact form to actually send.

## 3. Editing content

Almost everything — your name, titles, about copy, skills, services, projects
(including case-study problem/solution/result text), experience, and process phases —
lives in one file: `src/data/content.js`. Update it there; sections re-render
automatically.

- **Full name**: shown once, clearly, in the Hero ("Hi, I'm Riya Awadhiya") and in the
  footer — the navbar uses a compact "RA" monogram instead of repeating the full name
  everywhere.
- **Resume**: `public/Riya_Awadhiya_Resume.pdf` — swap the file (same name) to update
  what "Download Resume" serves.
- **Social links**: `profile.socials` in `content.js` — currently placeholders (`#`),
  add your real GitHub/LinkedIn/portfolio URLs.

## 4. Notes on this revision

- **Contact form now uses your own SMTP backend** (Nodemailer) instead of EmailJS —
  fully under your control, no third-party account limits.
- **Development Process section** is now icon-led cards with a clearly distinct
  heading style (large bold title + "Phase 0X of 7" label + icon badge) instead of
  plain floating text, while keeping the same pinned-scroll animation.
- **Name repetition fixed** — full name appears once prominently (Hero + footer);
  the navbar uses a small "RA" monogram instead of repeating "Riya" on every section.

## 5. Build & deploy

```bash
npm run build          # frontend → dist/
cd server && npm start # backend, e.g. on Render/Railway
```

Deploy `dist/` to Vercel/Netlify, deploy `/server` to Render/Railway/a small VPS with
`MONGO_URI`, `CLIENT_URL`, SMTP vars, and `ADMIN_KEY` set as environment variables. If
frontend and backend are on different domains, point the frontend's `/api` calls at
your deployed backend URL (e.g. via a Vite env var) instead of relying on the dev proxy.
