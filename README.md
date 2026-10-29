# Suvo Dev — Portfolio

Personal portfolio of **Suvo Dev**, a Full Stack Web Developer (WordPress, Shopify & React / Next.js) from Sylhet, Bangladesh.

**Live site:** _add your live link here_
**Resume:** [public/resume.pdf](public/resume.pdf)

## Features

- **Responsive navbar** with links to every section and a mobile menu
- **Hero section** with designation, professional photo, **Download Resume** button and social links (GitHub, LinkedIn, Fiverr, website)
- **About Me**: programming journey, the work I enjoy, hobbies and interests
- **Skills** shown with progress bars and ring charts, grouped into Frontend, Backend, CMS & Platforms, and Design & Tools
- **Education** and certifications
- **Experience**: Hexa's Zindabazar, Fiverr, GreatestDeals LLC, Home Furnishings Depot
- **Projects**: 7 project cards with image, name and a **View Details** button. Each details page shows:
  - Main technology stack
  - Description
  - Live project link
  - GitHub repository link (client)
  - Challenges faced
  - Improvements and future plans
- **Contact**: email, phone, WhatsApp and a contact form
- **Footer** with quick links and social icons
- Clean dark-green design that works on mobile, tablet, laptop and desktop

## Projects

| Project | Stack | Live |
|---|---|---|
| BazarDor — Bangla Market Price Tracker | Next.js, React 19, Tailwind, MongoDB, Better Auth | [Live](https://bazardor-puce.vercel.app) · [GitHub](https://github.com/devsuvo/bazardor) |
| Suvo Pharmacy — Online Medicine Store | React, TypeScript, Vite, Tailwind | [Live](https://pharmacy-omega-ashen.vercel.app) · [GitHub](https://github.com/devsuvo/Pharmacy) |
| School Website — Education Portal | React, TypeScript, Vite, Tailwind | [Live](https://school-website-ten-fawn.vercel.app) · [GitHub](https://github.com/devsuvo/school-website) |
| Dev Stack Builder | React, Tailwind, DaisyUI | [Live](https://dev-stack-builder-five.vercel.app) · [GitHub](https://github.com/devsuvo/dev-stack-builder) |
| FireBar Labs | WordPress, XStore, WooCommerce | [Live](https://firebarlabs.com) |
| Home Furnishings Depot | WordPress, XStore, WooCommerce | [Live](https://homefurniturenyc.com) |
| Hexa's Zindabazar | WordPress, XStore | [Live](https://hexaszindabazar.com) |

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- React 19
- Plain CSS (`app/globals.css`)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

```bash
# install dependencies
npm install

# run locally at http://localhost:3000
npm run dev

# production build (static files go to the out/ folder)
npm run build
```

## Project Structure

```
app/                 pages (home, about, services, skills, education, projects, contact)
app/projects/[slug]/ project details page
components/          navbar, footer, socials, contact form and page sections
lib/data.js          all content: profile, skills, education, experience, projects
public/              profile photo, project screenshots, resume.pdf
```

## Editing Content

All text lives in [lib/data.js](lib/data.js). To add a project, add an object to the `projects` array and put its screenshot in `public/projects/`. To update the resume, replace `public/resume.pdf`.

## Deployment

The site builds to static files, so it can be hosted on Vercel, Netlify or GitHub Pages. On Vercel, import the GitHub repo and deploy with the default Next.js settings.

## Contact

- Email: [sddev960@gmail.com](mailto:sddev960@gmail.com)
- Phone / WhatsApp: +880 1601-721703
- GitHub: [devsuvo](https://github.com/devsuvo)
- LinkedIn: [devsuvo](https://www.linkedin.com/in/devsuvo/)
