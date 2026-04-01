
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,

  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import MERN from "../assets/company/MERN.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },



  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Full-Stack Developer In MERN",
    company_name: "Fresher",
    icon: MERN,
    iconBg: "#383E56",
    date: "Open to Work",
    points: [
      "Developing and maintaining dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborating with cross-functional teams — including designers, product managers, and developers — to deliver scalable and high-quality products.",
      "Implementing responsive, user-friendly interfaces with optimal performance and cross-browser compatibility.",
      "Participating in code reviews and offering constructive feedback to ensure clean, maintainable, and efficient code."

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Santosh turned our outdated website into a sleek, mobile-friendly platform. Our customer engagement has gone up by 70% since the redesign.",
    name: "Siddharth Menon",
    designation: "Co-Founder",
    company: "FreshBite Foods",
    image: firstTestimonial,
  },
  {
    testimonial:
      "The level of dedication Santosh showed during our project was impressive. They delivered before the deadline without compromising on quality.",
    name: "Ananya Gupta",
    designation: "Managing Director",
    company: "Urban Vogue",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Santosh’s expertise in MERN development helped us launch a feature-rich portal that works flawlessly, even during high traffic peaks.",
    name: "Vikram Joshi",
    designation: "Head of Technology",
    company: "EduPoint India",
    image: thirdTestimonial,
  },
];


const projects = [
  {
    name: "Chat APP",
    description:
      "A scalable full-stack job portal platform (HireHub) developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to simplify and modernize the job search and recruitment workflow. The application allows job seekers to explore opportunities, apply seamlessly, and track their application status, while recruiters can post jobs, manage listings, and evaluate candidates efficiently. It features secure JWT-based authentication, role-based access control, advanced job search and filtering mechanisms, and a dynamic application management dashboard. The platform leverages RESTful APIs for efficient data handling, integrates cloud-based media services for file management, and delivers a fully responsive, intuitive user interface built with React.js and Tailwind CSS, ensuring a seamless experience across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "white-text-gradient",
      },
      {
        name: "nodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },

    ],
    image: project2,
    source_code_link: "https://github.com/santoshpadhiali/CHATliFY",
  },
  {
    name: "FOODREEL",
    description:
    "A full-stack food ordering web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse restaurants and food items by categories, cuisines, or search instantly. Includes secure user authentication with JWT, add-to-cart and checkout functionality, live order tracking, integrated online payment, and order history. The admin dashboard enables restaurant/food management, order monitoring, and analytics for sales performance. Fully responsive UI for seamless experience across mobile and desktop devices, with optimized performance and real-time updates using Socket.io.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/santoshpadhiali/Foodinsta",
  },
  {
    name: "JOB PORTAL PLATFORM",
    description:
"A full-stack job portal web application (HireHub) built using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to streamline the job search and recruitment process. The platform enables users to explore job opportunities, apply seamlessly, and track application status, while recruiters can post jobs and manage candidates efficiently. Features include secure JWT-based authentication, role-based access for job seekers and recruiters, advanced job search and filtering, and a dynamic application dashboard. The system is supported by scalable RESTful APIs, cloud-based media handling, and a fully responsive, modern UI built with React.js and Tailwind CSS, ensuring an intuitive and user-friendly experience across devices." ,
   tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "white-text-gradient",
      },
      {
        name: "Express js ",
        color: "green-text-gradient",
      },
      {
        name: "JWT ",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/santoshpadhiali/Hire-HUB",
  },
];

export { services, technologies, experiences, testimonials, projects };
