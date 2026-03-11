import defaultImage from "../images/default.jpg";

const projects = [
  {
    id: "portfolio",
    image: defaultImage,
    title: "Portfolio",
    intro:
      "Modern portfolio application built with React, JavaScript, and SCSS featuring responsive design and project showcases.",
    skills: ["React", "JavaScript", "SCSS"],
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
    id: "trailbucket",
    image: defaultImage,
    title: "TrailBucket (future)",
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
