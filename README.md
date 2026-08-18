# Ayush Saxena — Portfolio

Live site: [ayush-saxena.dev](https://ayush-saxena.dev)

A personal portfolio built to do one specific job: help a recruiter and a technical hiring manager each get what they actually need, without either of them wading through content meant for the other.

## Why this exists

Most portfolios are a resume with better CSS. This one is built around a different idea, the site isn't the place to list what I've done, it's the place to show how I think. Every project case study follows the same structure: the problem, the approach, the results, and honestly, what I'd do differently. That last part is deliberate. Most portfolios only show the wins.

The homepage forks into two paths:

- **For Recruiters** — why I'd be a good fit, told through real examples rather than adjectives
- **For Engineers** — how I actually approach a new problem, with the reasoning shown, not just the conclusion

## Tech stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Animation:** Framer Motion
- **Deployment:** Vercel, with GitHub Actions CI/CD
- **Analytics:** Vercel Web Analytics

## Project structure

```
app/
  page.tsx                → Homepage, the fork
  for-recruiters/         → Non-technical case for hiring me
  for-engineers/          → Technical case, how I think and approach problems
  work/[slug]/            → Dynamic case study template, pulls from lib/projects.ts
  about/                  → Background, education, experience, personality
  contact/                → Direct contact links

components/               → Shared UI (Navbar, ApproachSection, BackButton, etc.)
lib/projects.ts           → Single source of truth for all project data
public/                   → Resume, logo, static assets
```

Case studies are data-driven rather than hardcoded per page. Adding a new project means adding an entry to `lib/projects.ts`, not building a new page from scratch.

## Running locally

```bash
git clone https://github.com/DRIFT-619/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Author

**Ayush Saxena** <br/>
[Portfolio](https://ayush-saxena.dev) · [LinkedIn](https://www.linkedin.com/in/ayush-saxena-ml) · [GitHub](https://github.com/DRIFT-619)
