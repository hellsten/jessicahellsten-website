import defaultImage from "../images/default.jpg";

import portfolioImage from "../images/projects/portfolio/portfolioImage.png";
import portfolioAINav from "../images/projects/portfolio/portfolioAINav.png";
import portfolioFooter from "../images/projects/portfolio/portfolioFooter.png";
import portfolioContact from "../images/projects/portfolio/portfolioContact.png";

import canhuntImage from "../images/projects/canhunt/canhuntImage.jpg";
import canhuntLayers from "../images/projects/canhunt/canhuntLayers.png";
import canhuntSearchBar from "../images/projects/canhunt/canhuntSearchBar.png";
import canhuntConditions from "../images/projects/canhunt/canhuntConditions.jpg";

import cansimplanImage from "../images/projects/cansimplan/cansimplanImage.png";
import cansimplanDashboard from "../images/projects/cansimplan/cansimplanDashboard.png";
import cansimplanProposal from "../images/projects/cansimplan/cansimplanProposal.png";
import cansimplanTable from "../images/projects/cansimplan/cansimplanTable.png";
import cansimplanLogin from "../images/projects/cansimplan/cansimplanLogin.png";

import instockImage from "../images/projects/instock/warehouses.webp";
import instockAddInventory from "../images/projects/instock/addInventory.webp";
import instockAddWarehouse from "../images/projects/instock/addWarehouse.webp";
import instockDeleteInventory from "../images/projects/instock/deleteInventory.webp";
import instockDeleteWarehouse from "../images/projects/instock/deleteWarehouse.webp";
import instockEditInventory from "../images/projects/instock/editInventory.webp";
import instockEditWarehouse from "../images/projects/instock/editWarehouse.webp";
import instockInventoryDetails from "../images/projects/instock/inventoryDetails.webp";
import instockWarehouseDetails from "../images/projects/instock/warehouseDetails.webp";
import instockWarehouses from "../images/projects/instock/warehouses.webp";
import instockInventory from "../images/projects/instock/inventory.webp";

import eventureImage from "../images/projects/eventure/eventureImage.webp";
import eventureVideo from "../images/projects/eventure/eventureVideo.mp4";
import eventureList from "../images/projects/eventure/eventureList.webp";
import eventureStep1 from "../images/projects/eventure/eventureStep1.webp";
import eventureStep1Validation from "../images/projects/eventure/eventureStep1Validation.webp";
import eventureStep2 from "../images/projects/eventure/eventureStep2.webp";
import eventureStep3Confirm from "../images/projects/eventure/eventureStep3Confirm.webp";
import eventureStep3Success from "../images/projects/eventure/eventureStep3Success.webp";
import eventureAttendingEvent from "../images/projects/eventure/eventureAttendingEvent.webp";
import eventureYourEvents from "../images/projects/eventure/eventureYourEvents.webp";
import eventureYourEvents2 from "../images/projects/eventure/eventureYourEvents2.webp";
import eventureLearnMore from "../images/projects/eventure/eventureLearnMore.webp";

const projects = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    image: portfolioImage,

    tagline:
      "Custom-built developer portfolio showcasing projects, AI-assisted workflows, and interactive web experiences.",

    stats: [
      { label: "Type", value: "Developer Portfolio" },
      { label: "Platforms", css: "web", value: "web" },
      { label: "Framework", css: "react", value: "react" },
      { label: "Responsive", css: "md", value: "mobile & desktop" },
      { label: "Status", css: "complete", value: "Completed" },
    ],

    started: "March 2026",

    intro:
      "This portfolio was designed and developed as a central hub to showcase my projects, technical skills, and development experience. It combines structured data-driven components with creative UI design, while also exploring how AI can be integrated into real-world workflows and features.",

    overview:
      "The portfolio provides an interactive experience where users can explore projects in depth, navigate seamlessly between sections, and view AI-assisted experimental pages. Built with scalability in mind, it uses reusable components and structured JavaScript data to manage content efficiently.",

    problem:
      "Traditional portfolio websites are often static, difficult to scale, and lack interactivity or personalization. They also rarely demonstrate how modern developers integrate AI into real workflows.",

    solution:
      "This portfolio introduces a dynamic, component-based architecture with structured project data, interactive navigation, and AI-assisted features. It highlights both technical ability and modern development practices, including the use of AI to enhance functionality and user experience.",

    features: [
      "Dynamic project pages powered by structured JavaScript data",
      "AI navigation linking to AI-generated experimental pages",
      "Responsive multi-section layout with smooth navigation",
      "Footer with site map and project selection navigation",
      "Contact form powered by Formspree",
      "AI-assisted unique visitor counter tracking all-time visits",
    ],

    skills: ["ReactJS", "JavaScript", "Sass", "Git"],

    allSkills: [
      "ReactJS",
      "JavaScript",
      "Sass",
      "Git",
      "Component Architecture",
      "Responsive Design",
      "Formspree Integration",
      "AI-Assisted Development",
      "Frontend Performance Optimization",
    ],

    screenshots: [
      {
        images: [portfolioAINav],
        title: "AI Navigation & Experimental Pages",
        description:
          "An AI-driven navigation section that links to pages generated with AI. This demonstrates my ability to use AI as a practical development tool to create experimental interfaces, explore new ideas, and extend beyond traditional static portfolio design.",
      },
      {
        images: [portfolioFooter],
        title: "Footer Navigation & Visitor Tracking",
        description:
          "The footer includes a full site map for navigating between sections, quick access to projects, and links to AI-reformatted pages. It also integrates an AI-assisted visitor tracking system using a custom `visitor.js` file and `VisitorCount.jsx` component to count unique IP-based visits across the site for an all-time total.",
      },
      {
        images: [portfolioContact],
        title: "Contact System",
        description:
          "The contact section allows users to send messages directly through the site. Formspree is used to handle submissions and deliver emails, providing a simple and reliable solution without requiring a custom backend.",
      },
    ],

    contributions: [
      "Designed and developed the full portfolio architecture using React",
      "Built reusable components for projects, navigation, and layout sections",
      "Implemented structured JavaScript data for scalable content management",
      "Integrated AI-assisted features including navigation and visitor tracking",
      "Developed responsive UI/UX for both desktop and mobile experiences",
    ],

    highlights: [
      "Combines traditional portfolio structure with AI-assisted features",
      "Demonstrates real-world use of AI in development workflows",
      "Built with scalability using reusable components and data-driven design",
      "Balances clean UI design with interactive and experimental elements",
    ],

    resources: [
      {
        name: "Formspree",
        description:
          "Used to handle contact form submissions and send emails directly from the portfolio.",
        link: "https://formspree.io/",
      },
      {
        name: "React",
        description:
          "Core framework used to build the portfolio with reusable components and dynamic rendering.",
        link: "https://react.dev/",
      },
      {
        name: "Vite",
        description:
          "Frontend tooling used for fast development and optimized builds.",
        link: "https://vite.dev/",
      },
    ],
    demoLink: "https://jessica-hellsten.netlify.app/",
    codeLink: "https://github.com/hellsten/jessicahellsten-website.git",
  },
  {
    id: "canhunt",
    title: "CANhunt",
    image: canhuntImage,

    tagline:
      "AI-generated geospatial application for exploring hunting zones, regulations, and environmental conditions.",

    stats: [
      { label: "Type", value: "Geospatial Mapping Application" },
      { label: "Platforms", css: "web", value: "web" },
      { label: "Framework", css: "react", value: "react" },
      { label: "Responsive", css: "md", value: "mobile & desktop" },
      { label: "Status", css: "complete", value: "Completed (Experimental)" },
    ],

    started: "March 2026",

    intro:
      "Canhunt is an AI-generated geospatial web application designed to help users explore hunting zones, boundaries, and environmental conditions across Canada. The project was developed entirely using Claude AI, demonstrating rapid prototyping and full application generation through AI-assisted development.",

    overview:
      "The platform integrates geographic boundary data sourced from government APIs with an interactive map interface, allowing users to visualize hunting areas, apply filters, and assess environmental conditions in real time.",

    problem:
      "Accessing accurate hunting zone boundaries and environmental data often requires navigating multiple fragmented government resources, making it difficult for users to quickly gather the information they need.",

    solution:
      "Canhunt consolidates boundary data and environmental insights into a single, interactive interface. By leveraging AI-generated code and real-world data sources, the platform simplifies exploration and improves accessibility for users.",

    features: [
      "Interactive map with hunting zone boundaries",
      "Government API integration for geospatial data",
      "Dynamic layer toggling for map visualization",
      "Search functionality for quick navigation",
      "Environmental condition overlays",
    ],

    skills: ["ReactJS", "JavaScript", "Sass", "Git"],

    allSkills: [
      "ReactJS",
      "JavaScript",
      "Sass",
      "REST APIs",
      "Geospatial Data Handling",
      "AI-Assisted Development (Claude AI)",
    ],

    screenshots: [
      {
        images: [canhuntLayers],
        title: "Map Layers & Boundary Visualization",
        description:
          "Users can toggle between multiple map layers to visualize hunting zones and geographic boundaries. All boundary data is sourced from government APIs, ensuring accuracy and real-world applicability.",
      },
      {
        images: [canhuntSearchBar],
        title: "Search & Navigation",
        description:
          "A responsive search interface allows users to quickly locate specific regions and hunting zones, improving accessibility and reducing the need to manually browse large datasets.",
      },
      {
        images: [canhuntConditions],
        title: "Environmental Conditions Overlay",
        description:
          "Environmental data overlays provide additional context such as conditions and terrain, helping users make more informed decisions when exploring hunting areas.",
      },
    ],

    contributions: [
      "Built a fully functional application using Claude AI for end-to-end development",
      "Integrated government APIs to retrieve and display geospatial boundary data",
      "Structured map-based UI for intuitive exploration and interaction",
      "Implemented dynamic layers and search functionality",
      "Developed a responsive interface for cross-device usability",
    ],

    highlights: [
      "Entire application generated through AI-assisted development (Claude AI)",
      "Real-world data integration from government sources",
      "Focus on geospatial visualization and usability",
      "Rapid prototyping of a complex mapping interface",
    ],

    resources: [
      {
        name: "Live Application",
        description: "Explore the Canhunt platform.",
        link: "https://canhunt.app/",
      },
      {
        name: "Claude AI (Anthropic)",
        description:
          "AI assistant and development platform used for building applications, generating code, and solving complex problems through natural language.",
        link: "https://claude.com/",
      },
    ],

    demoLink: "https://canhunt.app/",
    codeLink: "#",
  },
  {
    id: "cansimplan",
    title: "CAN-Simplan",
    image: cansimplanImage,

    tagline:
      "AI-driven platform for evaluating urban development proposals through simulation, analytics, and transparent decision workflows.",

    stats: [
      { label: "Type", value: "AI Proposal Analysis Platform" },
      { label: "Platforms", css: "web", value: "web" },
      { label: "Framework", css: "react", value: "react" },
      { label: "Responsive", css: "md", value: "mobile & desktop" },
      { label: "Status", css: "complete", value: "Completed (MVP)" },
    ],

    started: "Feb 26 2026 - March 1 2026",

    intro:
      "CAN-Simplan is an AI-assisted urban planning platform designed to help municipal planners evaluate development proposals through simulation and structured analysis. The system models impacts on infrastructure, land use, and financial feasibility while ensuring transparency through review flags, version-controlled simulations, and a clear decision audit trail.",

    overview:
      "Urban planning decisions are complex, involving infrastructure constraints, financial feasibility, and long-term city impact. CAN-Simplan simplifies this process by providing planners with a simulation-driven workflow that highlights risks, surfaces key insights, and ensures every decision is backed by transparent data.",

    problem:
      "Municipal planners often rely on fragmented tools and manual processes to evaluate development proposals, making it difficult to assess long-term impacts, track decisions, and maintain transparency.",

    solution:
      "CAN-Simplan introduces a unified platform that combines simulation, analytics, and structured workflows. It allows planners to evaluate proposals in one place, flag issues, and maintain a clear audit trail for every decision made.",

    features: [
      "AI-assisted development simulation modeling",
      "Interactive planner review and flagging system",
      "Transparent decision audit trail",
      "Urban and infrastructure impact visualization",
      "Proposal status tracking and workflow management",
    ],

    skills: ["ReactJS", "JavaScript", "Sass", "Git"],

    allSkills: [
      "ReactJS",
      "JavaScript",
      "Sass",
      "Git",
      "Express.js",
      "REST APIs",
      "UI/UX Design",
      "Component Architecture",
    ],

    screenshots: [
      {
        images: [cansimplanDashboard, cansimplanTable],
        title: "Analytics Dashboard & Proposal Workflow",
        description:
          "A unified dashboard that combines high-level analytics with a structured proposal management table. Planners can filter, review, and track proposal statuses while quickly identifying flagged issues and simulation results.",
      },
      {
        images: [cansimplanProposal],
        title: "Detailed Proposal Analysis",
        description:
          "A deep-dive view into individual proposals, presenting simulation outputs, planning metrics, and flagged concerns. Designed to support confident, data-driven decision-making with clear and structured information.",
      },
      {
        images: [cansimplanLogin],
        title: "Secure Authentication System",
        description:
          "A streamlined login experience with authentication handling to protect sensitive planning data while maintaining a smooth and intuitive user interface.",
      },
    ],

    contributions: [
      "Designed and developed a full React-based frontend architecture",
      "Built reusable components for dashboards, tables, and proposal views",
      "Implemented structured data flows for simulation and proposal analysis",
      "Developed responsive layouts for both desktop and mobile experiences",
      "Integrated REST APIs to handle proposal data and workflows",
    ],

    highlights: [
      "Simulated real-world urban planning workflows",
      "Focused on transparency with audit trails and review flags",
      "Designed for scalability with modular component architecture",
      "Bridged technical implementation with real-world planning concepts",
    ],

    resources: [
      {
        name: "Urban Planning Simulation Research",
        description:
          "Reference material supporting the modeling of infrastructure and development impact analysis.",
        link: "https://www.planning.org/",
      },
      {
        name: "CAN-Simplan Case Study (UX Design)",
        description:
          "Detailed UX design case study outlining the research, user flows, and design decisions behind the CAN-Simplan platform.",
        link: "https://www.jenniferyaya.ca/can-simplan.html",
      },
    ],

    demoLink: "#",
    codeLink: "https://github.com/hellsten/CAN-Simplan-Front-End",
  },
  {
    id: "instock",
    title: "Instock",
    image: instockImage,
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
    skills: ["ReactJS", "JavaScript", "Sass", "MySQL", "Git"],
    allSkills: [
      "ReactJS",
      "JavaScript",
      "SCSS",
      "Express.js",
      "Node.js",
      "MySQL",
      "REST APIs",
      "Axios",
      "CRUD Operations",
      "Responsive Design",
      "Git",
      "GitHub",
      "Postman",
      "Nodemon",
      "dotenv",
    ],
    screenshots: [
      {
        images: [instockWarehouses, instockWarehouseDetails],
        title: "Warehouse Management Flow",
        description:
          "Users can browse all warehouses and open detailed warehouse pages to view contact information and associated inventory.",
      },
      {
        images: [
          instockAddWarehouse,
          instockEditWarehouse,
          instockDeleteWarehouse,
        ],
        title: "Warehouse CRUD Actions",
        description:
          "Instock supports full warehouse management, allowing users to add new warehouses, edit existing details, and safely delete records through confirmation flows.",
      },
      {
        images: [instockInventory, instockInventoryDetails],
        title: "Inventory Management Flow",
        description:
          "Users can browse inventory listings and open detailed item pages to review stock levels, status, and warehouse assignment.",
      },
      {
        images: [
          instockAddInventory,
          instockEditInventory,
          instockDeleteInventory,
        ],
        title: "Inventory CRUD Actions",
        description:
          "The application includes full inventory management with forms for creating items, editing stock details, and deleting entries through protected confirmation steps.",
      },
    ],

    resources: [
      {
        name: "React Documentation",
        description:
          "Used to build the frontend UI with reusable components and state management.",
        link: "https://react.dev",
      },
      {
        name: "JavaScript (MDN)",
        description:
          "Core language used for building application logic and handling data interactions.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "Sass (SCSS)",
        description:
          "Used for modular and maintainable styling across the application.",
        link: "https://sass-lang.com/documentation/",
      },
      {
        name: "REST API Design Guide",
        description:
          "Reference for structuring API endpoints and handling CRUD operations between frontend and backend.",
        link: "https://restfulapi.net/",
      },
      {
        name: "Axios",
        description:
          "HTTP client used to communicate with backend APIs and handle asynchronous requests.",
        link: "https://axios-http.com/",
      },
      {
        name: "Express.js",
        description:
          "Backend framework used to build API routes and manage server-side logic.",
        link: "https://expressjs.com/",
      },
      {
        name: "MySQL Documentation",
        description:
          "Relational database used to store warehouse and inventory data.",
        link: "https://dev.mysql.com/doc/",
      },
      {
        name: "MySQL Workbench",
        description:
          "Tool used for database design, querying, and data management during development.",
        link: "https://www.mysql.com/products/workbench/",
      },
      {
        name: "Node.js",
        description:
          "Runtime environment used to run the backend server and API logic.",
        link: "https://nodejs.org/",
      },
      {
        name: "Git & GitHub",
        description:
          "Used for version control, collaboration, and managing project history.",
        link: "https://github.com/",
      },
      {
        name: "dotenv",
        description:
          "Used to manage environment variables securely for database credentials and configuration.",
        link: "https://www.npmjs.com/package/dotenv",
      },
    ],
    demoLink: "#",
    codeLink: "https://github.com/hellsten/Instock-Server",
  },
  {
    id: "eventure",
    title: "Eventure",
    image: eventureImage,
    video: eventureVideo,
    tagline: "Event discovery and management platform",
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
    skills: ["ReactJS", "JavaScript", "Sass", "Git"],
    allSkills: ["ReactJS", "JavaScript", "Sass", "Git", "REST APIs"],
    screenshots: [
      {
        images: [eventureList],
        title: "Event Discovery Homepage",
        description:
          "The homepage gives users a clear overview of available events in a scrollable event listing layout. From here, users can quickly browse upcoming opportunities and click “Register Now” to begin the sign-up flow.",
      },
      {
        images: [eventureLearnMore],
        title: "Event Attendee Details",
        description:
          "From the homepage, users can access detailed attendee information by selecting the 'Learn More' option on an event. This view displays a list of registered participants, including names and contact details, providing organizers with quick insight into event attendance.",
      },
      {
        images: [eventureStep1, eventureStep1Validation],
        title: "Step 1: Personal Details",
        description:
          "The first registration step collects attendee information such as name, email, role, and phone number. Validation states are built directly into the form to guide users with clear feedback when required fields are missing or values are entered in an invalid format.",
      },
      {
        images: [eventureStep2],
        title: "Step 2: Event Selection and Attendance Details",
        description:
          "In the second step, users can provide their reason for attending and select additional events using a checkbox-based interface. This makes it easy to reserve spots for multiple related events during a single registration flow.",
      },
      {
        images: [eventureStep3Confirm, eventureStep3Success],
        title: "Step 3: Confirmation and Submission",
        description:
          "The final step presents a confirmation screen where users can review their personal information, attendance details, and selected events before submitting. After submission, a success page confirms that responses were saved and gives users easy access to next actions such as returning to events or reviewing policies.",
      },
      {
        images: [
          eventureAttendingEvent,
          eventureYourEvents,
          eventureYourEvents2,
        ],
        title: "Managing Registered Events",
        description:
          "Beyond registration, Eventure also provides a self-service flow for attendees to look up and manage their event registrations. Users can navigate to a dedicated area from the homepage, search by email, and view a list of all events they are currently registered to attend.",
      },
    ],

    resources: [
      {
        name: "React Documentation",
        description: "Frontend framework used to build the user interface.",
        link: "https://react.dev",
      },
      {
        name: "REST API Concepts",
        description:
          "Used to structure communication between frontend and backend services.",
        link: "https://restfulapi.net/",
      },
      {
        name: "MySQL Documentation",
        description: "Database used to store and manage event and user data.",
        link: "https://dev.mysql.com/doc/",
      },
      {
        name: "Express.js Guide",
        description: "Backend framework used to build API endpoints.",
        link: "https://expressjs.com/",
      },
      {
        name: "Responsive Web Design",
        description:
          "Principles used to ensure the application works across mobile and desktop.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      },
    ],
    demoLink: "#",
    codeLink: "https://github.com/hellsten/Eventure-Sprint-Server",
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
    skills: ["TypeScript", "ReactJS", "Git"],
    allSkills: [
      "TypeScript",
      "ReactJS",
      "Git",
      "React Native",
      "Mapbox / Leaflet",
      "REST APIs",
      "Data Visualization",
      "GPS Tracking",
      "Responsive Design",
    ],
    screenshots: [],

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
