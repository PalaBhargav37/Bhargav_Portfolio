# Pala Bhargav — Portfolio v2.0

A **premium React portfolio** with animated starfield hero, scroll-reveal animations, 3D project card tilt, working contact form via EmailJS, and a cohesive cosmic dark design system.

---

## 🚀 Quick Start

```bash
# 1. Unzip and enter folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server → http://localhost:3000
npm start
```

---

## ✉️ Activate the Contact Form (5 minutes, FREE)

The contact form uses **EmailJS** — no backend needed, 200 free emails/month.

### Step 1 — Create account
Go to → **https://www.emailjs.com** → Sign up (free)

### Step 2 — Add Email Service
- Dashboard → **Email Services** → **Add New Service**
- Choose **Gmail** → Connect your Gmail account → **Create Service**
- Copy the **Service ID** (e.g. `service_abc123`)

### Step 3 — Create Email Template
- Dashboard → **Email Templates** → **Create New Template**
- Set the template body. Use these exact variable names:
  ```
  From: {{from_name}} <{{from_email}}>
  Subject: {{subject}}

  {{message}}
  ```
- **Save** → copy the **Template ID** (e.g. `template_xyz789`)

### Step 4 — Get your Public Key
- Dashboard → **Account** → **General** → copy **Public Key**

### Step 5 — Paste into Contact.jsx
Open `src/components/Contact.jsx` and replace lines 14-16:

```js
const EMAILJS_SERVICE_ID  = 'service_abc123';   // ← your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';  // ← your Template ID
const EMAILJS_PUBLIC_KEY  = 'AbCdEfGhIjKlMnOp'; // ← your Public Key
```

**That's it!** The form will now deliver emails directly to your Gmail inbox.

---

## 🌐 Deploy

### Vercel (recommended — 1 click)
1. Push folder to a new GitHub repo
2. Go to **vercel.com** → New Project → Import repo
3. Framework Preset: **Create React App**
4. Click **Deploy** ✓

Your live URL will be: `https://bhargav-portfolio.vercel.app`

### Netlify
1. Push to GitHub
2. **netlify.com** → Add new site → Import from Git
3. Build command: `npm run build` | Publish dir: `build`
4. Deploy ✓

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://PalaBhargav37.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then: `npm run deploy`

---

## 🗂 Project Structure

```
src/
├── global.css              ← Design tokens, keyframes, utilities
├── App.jsx                 ← Root component
├── index.js
├── components/
│   ├── Navbar.jsx / .css   ← Fixed nav + mobile drawer
│   ├── Hero.jsx / .css     ← Animated starfield + typewriter
│   ├── About.jsx / .css    ← Bio + spinning avatar card
│   ├── Skills.jsx / .css   ← Animated skill bars + pills
│   ├── Experience.jsx/.css ← Tabbed experience + edu timeline
│   ├── Projects.jsx / .css ← 3D tilt cards + shimmer hover
│   ├── Contact.jsx / .css  ← EmailJS form with validation
│   ├── Footer.jsx / .css
│   └── Sidebar.jsx / .css  ← Fixed social links
└── hooks/
    └── useReveal.js        ← Scroll-triggered reveal hook
```

---

## ✨ Features

| Feature | Detail |
|---|---|
| Animated starfield | Canvas-based, 180 twinkling stars, no library |
| Typewriter effect | 5 rotating roles, custom speed |
| Scroll reveals | IntersectionObserver, 6 animation types |
| 3D card tilt | Mouse-tracking perspective tilt on project cards |
| Shimmer hover | CSS gradient shimmer on project cards |
| Skill bars | Animated fill bars with glow, triggered on scroll |
| Tabbed experience | Smooth tab switching with fade animation |
| Education timeline | Gradient vertical line timeline |
| Working contact form | EmailJS, validation, loading/success/error states |
| Mobile drawer | Full-screen animated menu for mobile |
| Fixed sidebars | Social icons + email, desktop only |
| Scroll-aware nav | Blur backdrop on scroll, active link tracking |
| Smooth scroll | CSS native smooth scroll |
| Reduced motion | Respects `prefers-reduced-motion` |
| Custom scrollbar | Gradient violet-cyan scrollbar |
