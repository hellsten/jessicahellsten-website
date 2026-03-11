import defaultImage from "../images/default.jpg";

const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    image: defaultImage,
    intro:
      "Personal developer portfolio built with React showcasing projects, skills, and technical work through a responsive modern interface.",
    skills: ["React", "JavaScript", "SCSS", "Responsive Design", "Git"],
    demoLink: "https://jessicahellsten.com",
    codeLink: "https://github.com/hellsten/jessicahellsten-website.git",
  },
  {
    id: "canhunt",
    image: defaultImage,
    title: "CANhunt",
    intro:
      "Cross-platform hunting app for web, Android, and iOS, providing map layer boundaries, regional hunting regulations, and the ability to save favorite spots.",
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
    demoLink: "https://canhunt.app",
    codeLink: "#",
  },
  {
    id: "cansimplan",
    image: defaultImage,
    title: "CAN-Simplan",
    intro:
      "AI-assisted urban planning platform that helps municipal planners evaluate development proposals using simulation and data analysis. The system models impacts on infrastructure, urban form, and financial feasibility while maintaining transparency through review flags, versioned simulations, and an auditable decision trail.",
    skills: ["React", "JavaScript", "Express.js", "REST APIs", "SCSS", "Git"],
    demoLink: "https://www.jenniferyaya.ca/can-simplan.html",
    codeLink: "#",
  },
  {
    id: "instock",
    image: defaultImage,
    title: "Instock",
    intro:
      "Web and mobile inventory management app that stores warehouses, warehouse details, and inventory information, enabling organized tracking and easy data access.",
    skills: [
      "React",
      "JavaScript",
      "REST APIs",
      "React",
      "Responsive Design",
      "Git",
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: "eventure",
    image: defaultImage,
    title: "Eventure",
    intro:
      "Event management web application that allows users to create events, browse upcoming events, and sign up to attend. The platform uses a React-based interface and REST APIs to manage event data and provide a smooth user experience.",
    skills: ["React", "JavaScript", "REST APIs", "SCSS", "Git"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: "trailbucket",
    image: defaultImage,
    title: "TrailBucket (TBD)",
    intro:
      "Cross-platform trail app for web, Android, and iOS, offering boundary map layers, the ability to record routes, access saved public trails, and track outdoor adventures.",
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
    demoLink: "#",
    codeLink: "#",
  },
];

export default projects;
