import defaultImage from "../images/default.jpg";

const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    image: defaultImage,
    tagline:
      "Personal developer portfolio showcasing projects and technical work.",
    stats: [
      { label: "Type", value: "Developer Portfolio" },
      { label: "Platforms", value: "Web" },
      { label: "Framework", value: "React" },
      { label: "Responsive", value: "Mobile & Desktop" },
      { label: "Completed", value: "Incomplete" },
    ],
    started: "March 3 2026 - Present",
    intro: 
      "Personal developer portfolio built with React showcasing projects, skills, and technical work through a responsive modern interface.",
    overview:
      "This portfolio was built to showcase development projects and technical experience through a clean, responsive interface. The site highlights software projects, technical skills, and case studies while emphasizing usability and performance.",
    features: [
      "Project showcase pages",
      "Responsive layout for desktop and mobile",
      "Modern React component architecture",
      "SCSS-based styling system",
    ],
    skills: ["React", "JavaScript", "SCSS", "Responsive Design", "Git"],
    screenshots: [
      {
        images: [defaultImage, defaultImage],
        title: "Portfolio Homepage",
        description:
          "The homepage introduces the developer and highlights featured projects with a clean and responsive layout.",
      },
      {
        images: [defaultImage],
        title: "Project Showcase",
        description:
          "Projects are displayed as cards with technologies used, descriptions, and links to live demos or code.",
      },
    ],
    resources: [
      {
        name: "React Documentation",
        description: "Framework used for building the site UI.",
        link: "https://react.dev",
      },
      {
        name: "SCSS Documentation",
        description: "Styling preprocessor used for modular CSS.",
        link: "https://sass-lang.com/documentation/",
      },
    ],
    demoLink: "https://jessicahellsten.com",
    codeLink: "https://github.com/hellsten/jessicahellsten-website.git",
  },
  {
    id: "canhunt",
    title: "CANhunt",
    image: defaultImage,
    tagline: "Cross-platform hunting navigation and regulation assistant.",
    stats: [
      { label: "Type", value: "navigation" },
      { label: "Platforms", value: "web, iOS, android" },
      { label: "Framework", value: "react & React Native" },
      { label: "Responsive", value: "mobile & desktop" },
      { label: "Status", value: "incomplete" },
    ],
    started: "January 2026 - Present",
    intro:
      "Cross-platform hunting app for web, Android, and iOS, providing map layer boundaries, regional hunting regulations, and the ability to save favorite spots.",
    overview:
      "CANhunt simplifies how hunters access geographic boundaries and hunting regulations by combining mapping tools and planning features into a single application.",
    features: [
      "Interactive hunting boundary maps",
      "Regional hunting regulation references",
      "Saved hunting locations",
      "Cross-platform support",
    ],
    skills: [
      "TypeScript",
      "React",
      "Claude AI",
      "React Native",
      "Mapbox / Leaflet",
      "REST APIs",
      "Data Visualization",
      "Responsive Design",
      "Git",
    ],
    screenshots: [
      {
        images: [defaultImage],
        title: "Interactive Map",
        description:
          "Hunters can view hunting zones, terrain layers, and geographic overlays in a single map interface.",
      },
      {
        images: [defaultImage],
        title: "Regulation Lookup",
        description:
          "Users can quickly search hunting regulations without navigating government PDFs.",
      },
    ],
    resources: [
      {
        name: "Mapbox",
        description: "Mapping platform used for geographic visualization.",
        link: "https://www.mapbox.com/",
      },
      {
        name: "Leaflet",
        description: "Lightweight open-source mapping library.",
        link: "https://leafletjs.com/",
      },
    ],
    demoLink: "https://canhunt.app",
    codeLink: "#",
  },
  {
    id: "cansimplan",
    title: "CAN-Simplan",
    image: defaultImage,
    tagline: "AI-assisted urban planning simulation platform.",
    stats: [
      { label: "Type", value: "AI Proposal Analysis Platform" },
      { label: "Platforms", css: "web", value: "web" },
      { label: "Framework", css: "react", value: "react" },
      { label: "Responsive", css: "md",value: "mobile & desktop" },
      { label: "Status", css: "complete", value: "complete" },
    ],
    started: "Feb 26 2026 - March 1 2026",
    intro:
      "AI-assisted urban planning platform that helps municipal planners evaluate development proposals using simulation and data analysis. The system models impacts on infrastructure, urban form, and financial feasibility while maintaining transparency through review flags, versioned simulations, and an auditable decision trail.",
    overview:
      "CAN-Simplan models how development proposals affect infrastructure, urban design, and financial feasibility while maintaining transparent planning decisions.",
    features: [
      "Development simulation modeling",
      "Planner review flags",
      "Decision audit trail",
      "Urban impact visualization",
    ],
    skills: ["React", "JavaScript", "Express.js", "REST APIs", "SCSS", "Git"],
    screenshots: [
      {
        images: [defaultImage],
        title: "Simulation Dashboard",
        description:
          "Planners can run simulations to evaluate development impacts.",
      },
      {
        images: [defaultImage],
        title: "Planner Review Flags",
        description:
          "Flags identify issues requiring planner review before approval.",
      },
    ],

    resources: [
      {
        name: "Urban Planning Simulation Research",
        description: "Conceptual basis for modeling planning impacts.",
        link: "https://www.planning.org/",
      },
    ],

    demoLink: "https://www.jenniferyaya.ca/can-simplan.html",
    codeLink: "#",
  },
  {
    id: "instock",
    title: "Instock",
    image: defaultImage,
    tagline: "Warehouse inventory management system.",
    stats: [
      { label: "Type", value: "inventory management system" },
      { label: "Platforms", value: "web" },
      { label: "Framework", value: "react" },
      { label: "Responsive", value: "mobile & desktop" },
      { label: "Status", value: "complete" },
    ],
    started: "Feb 3 2026 - Feb 22 2026",
    intro:
      "Web and mobile inventory management app that stores warehouses, warehouse details, and inventory information, enabling organized tracking and easy data access.",
    overview:
      "Instock organizes warehouse information and product inventory through a structured interface that allows users to manage stock efficiently.",
    features: [
      "Warehouse management",
      "Inventory tracking",
      "Product detail pages",
      "REST API integration",
    ],
    skills: [
      "React",
      "JavaScript",
      "REST APIs",
      "React",
      "Responsive Design",
      "Git",
    ],
    screenshots: [
      {
        images: [defaultImage],
        title: "Warehouse Dashboard",
        description: "Displays warehouse locations and inventory summaries.",
      },
      {
        images: [defaultImage],
        title: "Inventory Details",
        description:
          "Users can view product quantities and update stock information.",
      },
    ],

    resources: [
      {
        name: "REST API Design Guide",
        description: "Reference used for API architecture.",
        link: "https://restfulapi.net/",
      },
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: "eventure",
    title: "Eventure",
    image: defaultImage,
    tagline: "Event discovery and management platform.",
    stats: [
      { label: "Type", value: "Event Management" },
      { label: "Platforms", value: "web" },
      { label: "Framework", value: "react" },
      { label: "Responsive", value: "mobile & desktop" },
      { label: "Status", value: "complete" },
    ],
    started: "Dec 21 2025 - Feb 1 2026",
    intro:
      "Event management web application that allows users to create events, browse upcoming events, and sign up to attend. The platform uses a React-based interface and REST APIs to manage event data and provide a smooth user experience.",
    overview:
      "Eventure provides tools to create events, browse upcoming events, and manage attendance through a responsive web interface.",
    features: [
      "Event creation",
      "Event discovery",
      "User event registration",
      "Responsive UI",
    ],
    skills: ["React", "JavaScript", "REST APIs", "SCSS", "Git"],
    screenshots: [
      {
        images: [defaultImage],
        title: "Event Listing",
        description:
          "Users can browse upcoming events through an event listing interface.",
      },
      {
        images: [defaultImage],
        title: "Event Details",
        description:
          "Event pages display event information and registration options.",
      },
    ],

    resources: [
      {
        name: "React Documentation",
        description: "Framework used for the frontend.",
        link: "https://react.dev",
      },
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: "trailbucket",
    title: "TrailBucket (TBD)",
    image: defaultImage,
    tagline: "Outdoor trail tracking and exploration platform.",
    stats: [
      { label: "Type", css: "nav", value: "navigation" },
      { label: "Platforms", css: "wia", value: "web, iOS, android" },
      { label: "Framework", css: "rrn", value: "react & react native" },
      { label: "Responsive", css: "md", value: "mobile & desktop" },
      { label: "Status", css: "i", value: "incomplete" },
    ],
    started: "Not Started",
    intro:
      "Cross-platform trail app for web, Android, and iOS, offering boundary map layers, the ability to record routes, access saved public trails, and track outdoor adventures.",
    overview:
      "TrailBucket helps outdoor explorers discover trails, record routes, and track adventures using GPS and map data.",
    features: [
      "Trail discovery",
      "Route recording",
      "Public trail database",
      "GPS activity tracking",
    ],
    skills: [
      "TypeScript",
      "React",
      "React Native",
      "Mapbox / Leaflet",
      "REST APIs",
      "Data Visualization",
      "GPS Tracking",
      "Responsive Design",
      "Git",
    ],
    screenshots: [
      {
        images: [defaultImage],
        title: "Trail Map",
        description:
          "Users can browse public trails through an interactive map interface.",
      },
      {
        images: [defaultImage],
        title: "Route Tracking",
        description:
          "GPS tracking allows users to record and save outdoor routes.",
      },
    ],

    resources: [
      {
        name: "Mapbox",
        description: "Mapping service used for trail visualization.",
        link: "https://www.mapbox.com/",
      },
    ],
    demoLink: "#",
    codeLink: "#",
  },
];

export default projects;
