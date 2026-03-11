# My Homepage

A mobile-first homepage built with **Next.js 14** + **Tailwind CSS**, ready to deploy on Vercel.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

## Deploy to Vercel

### Option A — Vercel Dashboard (easiest)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! 🎉

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel
```

## Project Structure

```
my-homepage/
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles + Tailwind
├── components/         # (add reusable components here)
├── public/             # Static assets (images, icons)
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Customising

- **Business name/logo**: Edit the `Brand.` text in `app/page.tsx`
- **Colors**: Change `#f55d0e` (orange brand color) in the page or `tailwind.config.js`
- **Fonts**: Swap Google Fonts import in `globals.css`
- **Sections**: Add/remove sections in `app/page.tsx`
