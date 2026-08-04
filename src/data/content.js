export const profile = {
  name: "Riya Awadhiya",
  titles: [
    "Software Developer",
    "React.js Developer",
    "React Native Developer",
    "Shopify Developer",
    "MERN Stack Developer",
  ],
  location: "Jabalpur, Madhya Pradesh, India",
  email: "riyaawadhiya8200@gmail.com",
  status: "Open to Work",
  availability: [
    "Available for Full-Time Opportunities",
    "Available for Freelance Projects",
  ],
  resumeUrl: "/Riya_Awadhiya_Resume.pdf",
 socials: {
    github: "https://github.com/riyaawadhiya",
    linkedin: "https://www.linkedin.com/in/riya-awadhiya-888518281/",
  },
};

export const aboutParagraphs = [
  "Software Development Engineer with hands-on experience building highly responsive, reusable React.js interfaces for production web and cross-platform mobile applications. Comfortable owning a feature end-to-end — from reviewing requirements and UI/UX designs to shipping clean, maintainable JavaScript.",
  "Core strengths span front-end architecture, performance optimization, and REST API integration, backed by working knowledge of Node.js, Express.js and MongoDB. Experience covers Agile teams, early-stage startups, and independent freelance delivery — including production Shopify storefronts.",
  "Currently focused on clean architecture, scalable application design, and deepening full-stack ownership. Open to full-time engineering roles and freelance React.js, React Native, and Shopify projects.",
];

export const timeline = [
  {
    date: "2026",
    title: "B.Tech, Computer Science & Engineering",
    org: "Shri Ram Institute of Technology",
    detail: "CGPA 7.51",
  },
  {
    date: "2022",
    title: "Higher Secondary (MP Board)",
    org: "Govt. Model Higher Secondary School, Lakhnadon",
    detail: "81.7%",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo Router", "React Navigation", "AsyncStorage"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    label: "Database & State",
    skills: ["MongoDB", "Firebase", "Zustand", "React Query"],
  },
  {
    label: "E-Commerce",
    skills: ["Shopify Development", "Shopify Admin", "Theme Customization", "Storefront Management"],
  },
  {
    label: "Tools",
    skills: ["Git & GitHub", "VS Code", "Postman", "Debugging & Troubleshooting"],
  },
];

export const services = [
  {
    icon: "Globe",
    title: "Web Development",
    body: "Modern, responsive websites and web applications built with React.js and clean front-end architecture.",
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    body: "Cross-platform mobile applications using React Native, Expo Router, and React Navigation.",
  },
  {
    icon: "ShoppingBag",
    title: "Shopify Development",
    body: "Custom Shopify storefronts, theme customization, catalog management, and performance-minded e-commerce builds.",
  },
  {
    icon: "Sparkles",
    title: "Frontend Development",
    body: "Interactive, reusable UI components with production-grade animation, state, and accessibility in mind.",
  },
  {
    icon: "Plug",
    title: "API Integration",
    body: "REST API integration, authentication (JWT/Firebase), dashboards, and admin-panel data flows.",
  },
  {
    icon: "Briefcase",
    title: "Freelance Development",
    body: "Available for freelance and contract engagements — remote-ready, async-friendly collaboration.",
  },
];

export const projects = [
  {
    id: "vastra",
    name: "Vastra — Fashion Rental Platform",
    tag: "Full Stack · Core Team",
    tech: ["React.js", "Node.js", "MongoDB", "REST API"],
    description:
      "Production, multi-vendor fashion rental marketplace for Android & Web. Built authentication, product catalogue, search, filtering, and navigation as reusable React.js components.",
    gradient: "from-[#D4AF37] via-[#8a6d1f] to-[#151515]",
    live: "https://vastra-official-website.web.app/",
    github: null,
    problem:
      "Multiple vendors needed to list rental fashion inventory on one platform, with customers able to search, filter, and book across Android and Web from a single codebase-driven experience.",
    solution:
      "Built reusable React.js UI components for auth, catalogue, search and filtering, and navigation, working closely with the core team on requirements and interface design.",
    result:
      "Shipped a production, multi-vendor marketplace live on both Android and Web, with debugging carried through to deployment.",
  },
  {
    id: "bluewave",
    name: "BlueWave — Cross-Platform Mobile App",
    tag: "React Native · Expo",
    tech: ["React Native", "Expo", "Tailwind CSS", "REST API"],
    description:
      "Cross-platform mobile application built during an engineering internship at Ouranos Robotics — highly responsive UI components integrated with live REST APIs.",
    gradient: "from-[#F4C542] via-[#8a6d1f] to-[#151515]",
    live: null,
    github: null,
    problem:
      "The team needed a responsive, cross-platform mobile UI that could integrate cleanly with existing REST APIs without duplicating logic per platform.",
    solution:
      "Developed UI components in React Native with Expo and Tailwind CSS, reviewing designs with the team and wiring components to live REST endpoints.",
    result: "Delivered responsive, production-quality screens integrated end-to-end with the backend.",
  },
  {
    id: "grahak",
    name: "Grahak — QR-Based Token System",
    tag: "MERN · React Native · IoT",
    tech: ["MongoDB", "Express.js", "React Native", "IoT"],
    description:
      "Digital token management system for food vendors — QR token generation, real-time order tracking, and an analytics dashboard.",
    gradient: "from-[#FFD700] via-[#8a6d1f] to-[#151515]",
    live: null,
    github: null,
    problem:
      "Food vendors needed a faster, digital alternative to paper tokens — with visibility into order status and performance over time.",
    solution:
      "Built a MERN + React Native + IoT system generating QR-based tokens, tracking orders in real time, and surfacing the data on an analytics dashboard.",
    result: "A working token system covering generation, tracking, and reporting in one flow.",
  },
  {
    id: "shopify",
    name: "OllyPolly & Natchkin — Shopify Stores",
    tag: "Shopify · Theme Customization",
    tech: ["Shopify", "Liquid", "Theme Customization"],
    description:
      "Two production Shopify stores customized end-to-end — responsive theme layouts, storefront enhancements, and product catalog management via Shopify Admin.",
    gradient: "from-[#D4AF37] via-[#F4C542] to-[#151515]",
    live: null,
    github: null,
    problem:
      "Two independent store owners needed responsive, on-brand storefronts and ongoing catalog management without a dedicated in-house developer.",
    solution:
      "Customized themes, built responsive layouts, and managed product catalogs directly through Shopify Admin as a freelance engagement.",
    result: "Two live, production Shopify stores with owner-managed catalogs and a refreshed storefront experience.",
  },
];

export const experience = [
  {
    date: "Jan 2026 – Jul 2026",
    role: "Full Stack Developer (Core Team)",
    org: "Vastra — Fashion Rental Startup",
    points: [
      "Built responsive React.js UI components for a production, multi-vendor rental platform.",
      "Implemented authentication, catalogue, search, filtering, and navigation as reusable UI.",
      "Debugged and shipped through testing and production deployment.",
    ],
  },
  {
    date: "Nov 2025 – Jan 2026",
    role: "Freelance Shopify Developer",
    org: "Self-Employed",
    points: [
      "Customized two production Shopify stores (OllyPolly, Natchkin).",
      "Delivered responsive layouts and theme enhancements.",
      "Managed product catalogs and deployed updates via Shopify Admin.",
    ],
  },
  {
    date: "Apr 2025 – Nov 2025",
    role: "Web Developer Intern",
    org: "Ouranos Robotics Pvt. Ltd.",
    points: [
      "Built cross-platform UI for the BlueWave app with React Native, Expo & Tailwind CSS.",
      "Integrated REST APIs and reviewed interface designs with the team.",
      "Contributed to Shopify storefront customization and debugging.",
    ],
  },
  {
    date: "Sep 2024 – Jan 2025",
    role: "UI Designer Intern",
    org: "Hartalkar Innovations",
    points: [
      "Designed an EV Operating System interface, including a digital speedometer.",
      "Converted responsive UI designs into reusable React.js components.",
    ],
  },
];

export const processPhases = [
  {
    n: "01",
    icon: "Search",
    title: "Discovery",
    body: "Understand the goal, the users, and the constraints — reviewing requirements, designs, and existing technical debt before proposing an approach.",
  },
  {
    n: "02",
    icon: "ClipboardList",
    title: "Planning",
    body: "Map the work into components and API contracts — what state lives where, what's reusable, and in what order it should be built.",
  },
  {
    n: "03",
    icon: "Palette",
    title: "UI Design Review",
    body: "Translate UI/UX designs into an implementation plan — spacing, responsive behavior, and interaction states settled before code is written.",
  },
  {
    n: "04",
    icon: "LayoutTemplate",
    title: "Frontend Build",
    body: "Build reusable, responsive React.js / React Native components, following the agreed architecture and naming conventions.",
  },
  {
    n: "05",
    icon: "Server",
    title: "Backend & Integration",
    body: "Wire components to real data — REST APIs, SMTP, or a Node/Express + MongoDB service — with authentication where needed.",
  },
  {
    n: "06",
    icon: "Bug",
    title: "Testing & Debugging",
    body: "Test across devices and environments, fix edge cases, and confirm the app behaves under real, messy data — not just the happy path.",
  },
  {
    n: "07",
    icon: "Rocket",
    title: "Deployment & Support",
    body: "Ship to production and stay on to monitor, patch, and extend the app as real usage surfaces new needs.",
  },
];

export const freelancing = {
  title: "Helping businesses build modern digital products.",
  body: "Whether it's a new storefront, a customer-facing web app, or a mobile companion app, I work directly with founders and small teams to scope, build, and ship — without the overhead of a large agency.",
  offerings: [
    "Web Development",
    "Shopify Development",
    "Landing Pages",
    "Business Websites",
    "Admin Panels",
    "Maintenance & Bug Fixes",
    "Performance Optimization",
  ],
};

export const availabilityCards = [
  "Full-Time Job",
  "Remote Opportunities",
  "Freelance Projects",
  "Shopify Development",
  "React Development",
  "Mobile App Development",
];

export const contactCards = [
  { label: "Email", value: profile.email, icon: "Mail" },
  { label: "Phone", value: profile.phone, icon: "Phone" },
  { label: "Location", value: profile.location, icon: "MapPin" },
  { label: "Availability", value: "Full-time & Freelance", icon: "CalendarCheck" },
  { label: "Response Time", value: "Within 24 hours", icon: "Clock" },
];
