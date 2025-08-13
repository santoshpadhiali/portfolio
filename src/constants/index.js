
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
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
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
      "A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for instant communication. Includes private and group chats, image sharing via Cloudinary, JWT-based authentication, user profile management, and a fully responsive UI for seamless use across devices.",
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
    source_code_link: "https://github.com/santoshpadhiali/CHAT-APP",
  },
  {
    name: "BOOK stor",
    description:
      "A full-stack online book store application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include browsing and searching books by category or author, secure user authentication with JWT, shopping cart management, order placement, and an admin dashboard for inventory and sales management. Fully responsive design for a smooth experience across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cleark",
        color: "green-text-gradient",
      },
      {
        name: "Strapi",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/santoshpadhiali/BOOK-STORE",
  },
  {
    name: "Task traker",
    description:
      "A task management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to add, edit, mark as complete, and delete tasks. Features include secure user authentication with JWT, persistent data storage, and a clean, responsive UI for seamless task tracking across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/santoshpadhiali/TODO-LIST",
  },
];

export { services, technologies, experiences, testimonials, projects };
