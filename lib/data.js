// ✏️ Edit everything about you in this one file.

export const profile = {
  name: "Suvo Dev",
  firstName: "Suvo",
  designation: "Full Stack Web Developer",
  roles: ["Full Stack Web Developer", "React & Next.js Developer", "WordPress & Shopify Expert", "UI/UX Enthusiast"],
  tagline:
    "I build fast, thoughtful websites and web apps that help brands look sharp and work even better — with React, Next.js, TypeScript, Laravel and WordPress.",
  photo: "/profile.png",
  resume: "/resume.pdf", // put your resume at public/resume.pdf
  email: "sddev960@gmail.com",
  phone: "+880 1601-721703",
  whatsapp: "8801601721703",
  location: "Sylhet, Bangladesh",
  socials: {
    github: "https://github.com/devsuvo",
    linkedin: "https://www.linkedin.com/in/devsuvo/",
    fiverr: "https://www.fiverr.com/wordpressguru41",
    website: "https://suvo.dev",
    whatsapp: "https://wa.me/8801601721703",
  },
};

export const about = {
  paragraphs: [
    "I'm Suvo, a full stack web developer based in Sylhet, Bangladesh. My programming journey started in 2019 with WordPress — I was fascinated by how a few tweaks could turn a blank page into a real business website. That curiosity pulled me into HTML, CSS and JavaScript, then PHP and Laravel, and finally React, Next.js and TypeScript.",
    "For the past 5+ years I've worked with clients across the US, Europe and Bangladesh — shipping 110+ projects, from WordPress marketing sites and Shopify stores to full stack React applications, with 99% client satisfaction on Fiverr.",
    "The work I enjoy most is turning an idea into a fast, polished product: clean UI, smooth interactions, solid SEO and code that performs well on every device. Right now I'm going deeper into advanced Next.js (App Router, Server Components, performance), JavaScript fundamentals and Data Structures & Algorithms.",
    "Outside of programming I love exploring UI/UX design, experimenting with motion and creative \"vibe coding\", travelling around Sylhet's tea gardens and hills, and learning languages — I speak Bangla, English and Hindi. I'm patient, honest about timelines and always learning, always building.",
  ],
  stats: [
    { value: "5+", label: "Years experience" },
    { value: "110+", label: "Projects shipped" },
    { value: "99%", label: "Client satisfaction" },
  ],
  hobbies: ["🎨 UI/UX Design", "✨ Motion & GSAP", "🌿 Travelling", "📚 Learning DSA", "🗣️ Languages"],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "Tailwind / Bootstrap", level: 92 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", level: 82 },
      { name: "Laravel", level: 78 },
      { name: "Node.js", level: 72 },
      { name: "MongoDB", level: 72 },
      { name: "Firebase", level: 80 },
      { name: "Better Auth / JWT", level: 75 },
    ],
  },
  {
    category: "CMS & Platforms",
    items: [
      { name: "WordPress", level: 97 },
      { name: "Elementor", level: 95 },
      { name: "Shopify", level: 88 },
      { name: "Wix / Webflow", level: 82 },
      { name: "SEO", level: 85 },
      { name: "Vercel / Hosting", level: 85 },
    ],
  },
  {
    category: "Design & Tools",
    items: [
      { name: "Figma", level: 85 },
      { name: "Photoshop", level: 78 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const education = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Jagatshi Gopal Krishna M. Saifur Rahman High School & College, Moulvibazar",
    period: "2022",
    details: "Completed higher secondary education while building WordPress sites for clients.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Tetaigaon Rashid Uddin High School, Kamalganj, Moulvibazar",
    period: "2019",
    details: "The year my programming journey started with WordPress.",
  },
  {
    degree: "Certifications",
    school: "SoftTech-IT Institute · Codemanbd · British Council",
    period: "2021 — 2025",
    details: "Advanced WordPress Development (2021), Web Design (2023), IELTS Overall Band 5.5 (2025).",
  },
  {
    degree: "Continuous Learning — Web Development",
    school: "Self-taught & online courses",
    period: "2019 — Present",
    details: "Full stack JavaScript, React, Next.js, TypeScript, Laravel and Data Structures & Algorithms.",
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "Hexa's Zindabazar · Sylhet, Bangladesh",
    period: "Jan 2026 — Present",
    points: [
      "Building and maintaining the official Hexa's Zindabazar website for an IELTS & Spoken English coaching center.",
      "Course pages, exam registration, student success showcases and blog.",
      "Ongoing performance and SEO improvements.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Fiverr · Remote",
    period: "Feb 2021 — Present",
    points: [
      "Web design, WordPress, Shopify and full stack builds for clients worldwide.",
      "Consistent five-star reviews and 99% client satisfaction.",
    ],
  },
  {
    role: "Website Admin & Developer",
    company: "GreatestDeals LLC · Playa Del Rey, CA",
    period: "Jan 2023 — Dec 2023",
    points: ["Managed and developed company websites, handling admin, updates and ongoing maintenance."],
  },
  {
    role: "WordPress Developer",
    company: "MetaTechDesk · New York (Remote)",
    period: "2 Years",
    points: ["Built and maintained client sites with Elementor — custom layouts, performance tuning and site management."],
  },
];

export const projects = [
  {
    slug: "bazardor",
    name: "BazarDor — Bangla Market Price Tracker",
    image: "/projects/bazardor.jpg",
    short: "A Bangla grocery price tracker showing today's prices, daily changes and market-wise comparisons.",
    stack: ["Next.js (App Router)", "React 19", "Tailwind CSS 4", "daisyUI", "Better Auth", "MongoDB Atlas"],
    description:
      "BazarDor (বাজার দর) shows today's prices for rice, lentils, oil, vegetables, fish, meat, eggs, dairy and spices — with price movement against yesterday and minimum, maximum and average prices across 12 markets. It features a live scrolling price ticker, 'what went up / down today' sections, sortable category pages, a protected product details page and authentication with Email/Password, Google and GitHub.",
    live: "https://bazardor-puce.vercel.app",
    github: "https://github.com/devsuvo/bazardor",
    challenges: [
      "Showing all prices, percentages and dates in Bangla digits while still sorting by numeric value, not by text.",
      "Protecting the product details route with Better Auth and handling redirects with clear toast messages.",
      "Building an infinite, pause-on-hover price ticker that stays smooth on mobile.",
      "Adding fallback API URLs and friendly 404 pages for invalid categories and products.",
    ],
    future: [
      "Historical price charts for each product.",
      "Price alerts by email or push notification.",
      "Location-based market suggestions and an admin panel for daily price updates.",
    ],
  },
  {
    slug: "suvo-pharmacy",
    name: "Suvo Pharmacy — Online Medicine Store",
    image: "/projects/pharmacy.jpg",
    short: "A modern online pharmacy with medicine shopping, prescription upload and order tracking.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini API"],
    description:
      "Suvo Pharmacy is a full online pharmacy experience: customers can search pills, vitamins and baby-care products, browse categories, upload prescriptions, apply offers and track their orders. It also includes a pharmacist desk view and a 24/7 support section, all wrapped in a clean, trustworthy healthcare UI.",
    live: "https://pharmacy-omega-ashen.vercel.app",
    github: "https://github.com/devsuvo/Pharmacy",
    challenges: [
      "Designing a UI that feels trustworthy and clinical while still being friendly and modern.",
      "Handling the prescription upload flow and cart state across many pages.",
      "Keeping a large TypeScript codebase organised with reusable components.",
    ],
    future: [
      "Real payment gateway integration (bKash, SSLCommerz, Stripe).",
      "Backend with inventory management and pharmacist verification.",
      "AI-assisted medicine search and reminders for refills.",
    ],
  },
  {
    slug: "school-website",
    name: "School Website — Education Portal",
    image: "/projects/school.jpg",
    short: "A complete school website with academics, admissions, notices and gallery.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    description:
      "A modern, fully responsive website for a school that presents academics, admission information, notices, events, teachers and a photo gallery. It's designed so parents and students can quickly find what they need on any device.",
    live: "https://school-website-ten-fawn.vercel.app",
    github: "https://github.com/devsuvo/school-website",
    challenges: [
      "Organising a lot of content (notices, events, staff, admissions) into clear navigation.",
      "Making image-heavy galleries load fast on slow mobile connections.",
      "Keeping the design consistent across many different page types.",
    ],
    future: [
      "Admin dashboard to publish notices and results without touching code.",
      "Online admission form with document upload.",
      "Student and parent login with results and attendance.",
    ],
  },
  {
    slug: "dev-stack-builder",
    name: "Dev Stack Builder",
    image: "/projects/devstack.jpg",
    short: "Explore modern technologies and build your own personalised developer stack.",
    stack: ["React (Vite)", "Tailwind CSS", "DaisyUI", "React-Toastify", "React Icons"],
    description:
      "Dev Stack Builder lets developers explore a curated library of frontend, backend, database and DevOps technologies, then build a personal development stack by adding and removing tools from an interactive sidebar. Technology data loads from a JSON file at runtime, with toast feedback for every action and a loading spinner.",
    live: "https://dev-stack-builder-five.vercel.app",
    github: "https://github.com/devsuvo/dev-stack-builder",
    challenges: [
      "Preventing duplicate additions and keeping sidebar state in sync with the catalog.",
      "Loading JSON data asynchronously with a proper loading state.",
      "Applying one shared gradient theme consistently across every component.",
    ],
    future: [
      "Save and share stacks with a unique link.",
      "Search, filters and many more technologies.",
      "Compare two stacks side by side.",
    ],
  },
  {
    slug: "firebar-labs",
    name: "FireBar Labs — Hemp & Smell-Proof Fashion Store",
    image: "/projects/firebarlabs.jpg",
    short: "A WooCommerce store for smell-proof bags and apparel, hemp edibles, mushroom chocolate and pet CBD.",
    stack: ["WordPress", "XStore Theme", "WooCommerce", "Elementor"],
    description:
      "FireBar Labs is a US e-commerce store selling lockable smell-proof bags and apparel, hemp edibles and tinctures, mushroom chocolate and FireBarks pet CBD. I built it on WordPress with the XStore theme and WooCommerce, with a clean product catalog, category pages, a smooth cart and checkout, and a fully responsive layout.",
    live: "https://firebarlabs.com",
    challenges: [
      "Organising a very mixed catalog (fashion, edibles, pet products) into clear categories.",
      "Customising the XStore theme to match the brand while keeping pages fast.",
      "Setting up product variations and a smooth WooCommerce checkout.",
    ],
    future: [
      "Product reviews and bundles to raise average order value.",
      "Further speed and SEO optimisation.",
    ],
  },
  {
    slug: "home-furnishings-depot",
    name: "Home Furnishings Depot — NYC Furniture Store",
    image: "/projects/homefurniturenyc.jpg",
    short: "An online furniture store for a New York City shop selling bedroom, dining, living room and office furniture.",
    stack: ["WordPress", "XStore Theme", "WooCommerce", "Elementor"],
    description:
      "Home Furnishings Depot is a New York City furniture store. I built their website with WordPress and the XStore theme, showcasing bedroom, dining room, living room, kids room and home office furniture with a large product catalog, room-based categories and an easy shopping experience on any device.",
    live: "https://homefurniturenyc.com",
    challenges: [
      "Presenting a large, image-heavy catalog while keeping load times low.",
      "Structuring products by room and type so customers find items quickly.",
      "Customising XStore layouts for a premium but affordable brand feel.",
    ],
    future: [
      "Room planner and 'shop the look' collections.",
      "Financing options and store-pickup scheduling.",
    ],
  },
  {
    slug: "hexas-zindabazar",
    name: "Hexa's Zindabazar — IELTS Institute Website",
    image: "/projects/hexaszindabazar.jpg",
    short: "A website for one of Bangladesh's top IELTS institutes, with courses, results and enrolment.",
    stack: ["WordPress", "XStore Theme", "WooCommerce", "Elementor"],
    description:
      "Hexa's Zindabazar is an IELTS institute in Sylhet, Bangladesh, and a 5-time country top performer. I built their website with WordPress and the XStore theme to present courses, student results and achievements, and make it easy for students to get in touch and enrol.",
    live: "https://hexaszindabazar.com",
    challenges: [
      "Showing courses, results and success stories in a clear, trustworthy way.",
      "Making the site fast and easy to use on mobile for students.",
      "Optimising pages for local SEO so students find the institute on Google.",
    ],
    future: [
      "Online course registration and payment.",
      "A student portal with mock test scores.",
    ],
  },
];

export const services = [
  { icon: "app", title: "Web Application Development", text: "Custom full-stack solutions, scalable backend architecture, API integration and security.", tags: ["React", "Next.js", "Laravel"], big: true },
  { icon: "wp", title: "WordPress Development", text: "Custom themes, Elementor builds, plugin setup, speed optimisation and ongoing care.", tags: ["Elementor", "WooCommerce"] },
  { icon: "shop", title: "Shopify Stores", text: "Storefront design and setup, product catalog management and payment integration.", tags: ["Themes", "Payments"] },
  { icon: "ui", title: "UI/UX Design", text: "Clean, conversion-focused interfaces designed in Figma and built pixel-perfect.", tags: ["Figma", "Prototyping"] },
  { icon: "seo", title: "SEO & Performance", text: "Technical SEO, Core Web Vitals and speed tuning so your site ranks and loads fast.", tags: ["Lighthouse", "On-page"] },
  { icon: "wix", title: "Wix & Webflow", text: "Creative site design, Velo custom logic and responsive mobile layouts.", tags: ["Velo", "CMS"] },
  { icon: "vibe", title: "Vibe Coding & Motion", text: "High-energy interaction design, GSAP motion graphics and cutting-edge frameworks.", tags: ["GSAP", "Animation"], big: true },
];

export const process = [
  { step: "01", title: "Discover", text: "We talk about your goals, audience and must-haves. I reply within 24 hours with honest thoughts and a plan." },
  { step: "02", title: "Design", text: "Wireframes and a polished UI in Figma, so you see exactly what you get before any code." },
  { step: "03", title: "Develop", text: "Clean, responsive, SEO-friendly code with regular progress updates and preview links." },
  { step: "04", title: "Launch & Support", text: "Testing, deployment and hand-over — plus ongoing support whenever you need it." },
];

export const testimonials = [
  { quote: "Delivered exactly what we needed — fast, clean, and better than the design we gave him.", name: "Michael R.", role: "Startup Founder", country: "🇺🇸 United States" },
  { quote: "Our WordPress site went from slow and dated to modern and lightning fast.", name: "Elena K.", role: "Marketing Lead", country: "🇩🇪 Germany" },
  { quote: "Professional, patient, and honest about timelines. Best freelancer we've worked with on Fiverr.", name: "Sarah T.", role: "Agency Director", country: "🇬🇧 United Kingdom" },
];

export const languages = [
  { name: "Bangla", level: "Native", value: 100, flag: "🇧🇩" },
  { name: "English", level: "Advanced", value: 85, flag: "🇬🇧" },
  { name: "Hindi", level: "Intermediate", value: 65, flag: "🇮🇳" },
];

export const now = [
  { emoji: "🎓", text: "Building the Hexa's Zindabazar website for an IELTS & Spoken English center in Sylhet" },
  { emoji: "⚡", text: "Exploring advanced Next.js — App Router, Server Components and performance" },
  { emoji: "📚", text: "Deepening JavaScript fundamentals and practising Data Structures & Algorithms" },
  { emoji: "🤝", text: "Open to collaborating on React / Next.js and WordPress projects" },
];

export const faqs = [
  { q: "How long does a typical website take?", a: "A WordPress or landing site usually takes 1–2 weeks. A custom full-stack web app takes 3–8 weeks depending on features. You get a clear timeline before we start." },
  { q: "Do you work with international clients?", a: "Yes — I've worked with clients in the US, Europe and Bangladesh. I'm in GMT+6 and keep overlapping hours for calls." },
  { q: "Can you redesign or speed up my existing site?", a: "Absolutely. Performance tuning and modern redesigns are some of my most requested jobs, often with big gains in speed and SEO." },
  { q: "Do you offer support after launch?", a: "Yes. I offer ongoing maintenance, updates and improvements so your site keeps running smoothly." },
  { q: "How do we get started?", a: "Send me a message by email, WhatsApp or the contact form with what you're building. I'll reply within 24 hours with thoughts and a plan." },
];

export const principles = [
  { title: "Simplicity scales", text: "Clean structure and plain code are easier to grow, hand over and maintain." },
  { title: "Performance is a feature", text: "Fast pages rank better, convert better and feel better on every phone." },
  { title: "Business before pixels", text: "Every section should help the client sell, inform or build trust." },
  { title: "Built to hand over", text: "Clients and their teams can update content themselves, without calling me." },
  { title: "Communicate often", text: "Clear updates, preview links and honest timelines from day one." },
  { title: "Measure everything", text: "Lighthouse, Core Web Vitals and analytics guide decisions, not guesses." },
  { title: "Accessible by default", text: "Readable contrast, keyboard-friendly navigation and semantic HTML." },
  { title: "Always learning", text: "New tools only when they make the product better for the people using it." },
];

export const aiWork = {
  intro:
    "I use AI tools every day to move faster on research, boilerplate and debugging, but every line that ships is reviewed, tested and understood by me.",
  items: [
    { title: "Faster prototypes", text: "Turn an idea into a clickable first version quickly, then refine it by hand." },
    { title: "Smarter debugging", text: "Use AI to explore possible causes of an error, then verify the fix myself." },
    { title: "Content & SEO drafts", text: "Draft meta tags and page copy, then edit them to match the brand voice." },
    { title: "AI features in products", text: "Integrated the Gemini API into Suvo Pharmacy for assisted medicine search." },
  ],
  tools: ["Claude", "ChatGPT", "Gemini API", "GitHub Copilot"],
};

export const toolbox = [
  { group: "Build", items: ["VS Code", "Git & GitHub", "Vite", "Next.js", "Tailwind CSS"] },
  { group: "WordPress", items: ["Elementor Pro", "XStore", "Woodmart", "WooCommerce", "Gravity Forms"] },
  { group: "Design", items: ["Figma", "Photoshop"] },
  { group: "Ship & Measure", items: ["Vercel", "cPanel", "Google Search Console", "PageSpeed Insights"] },
];
