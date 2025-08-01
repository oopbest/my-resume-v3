import { FaReact, FaNode, FaBootstrap, FaMagento, FaPhp } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoRedux,
} from "react-icons/bi";
import {
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiCloudinary,
  SiMysql,
  SiGooglecloud,
  SiJsonwebtokens,
  SiDaisyui,
  SiChakraui,
  SiMongoose,
  SiPrisma,
  SiPostgresql,
  SiGraphql,
  SiApollographql,
  SiRender,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const projects = [
  {
    id: 7,
    title: "A Full-Stack Expense Tracker",
    description:
      "The application is a full-stack expense tracker built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Apollo GraphQL integration.",
    stacks: [
      {
        icon: <FaReact className="text-blue-500 text-xl" />,
        name: "React",
      },
      {
        icon: <BiLogoTailwindCss className="text-sky-500 text-xl" />,
        name: "Tailwind CSS",
      },
      {
        icon: <FaNode className="text-green-500 text-xl" />,
        name: "Node.js",
      },
      {
        icon: <SiExpress className="text-black-500 text-xl" />,
        name: "Express.js",
      },
      {
        icon: <SiGraphql className="text-pink-500 text-xl" />,
        name: "GraphQL",
      },
      {
        icon: <SiApollographql className="text-black-500 text-xl" />,
        name: "Apollo GraphQL",
      },
      {
        icon: <SiMongodb className="text-green-500 text-xl" />,
        name: "MongoDB",
      },
      {
        icon: <SiRender className="text-black-500 text-xs" />,
        name: "Render",
      },
    ],
    photos: [
      "/project-7/ss-1.png",
      "/project-7/ss-2.png",
      "/project-7/ss-3.png",
      "/project-7/ss-4.png",
      "/project-7/ss-5.png",
    ],
    projectUrl: "https://graphql-crash-course-hqnv.onrender.com",
    projectSrc: "https://github.com/oopbest/graphql-crash-course",
  },
  {
    id: 6,
    title: "Build a Complete Social Media App - Next.js",
    description:
      "A social media application built using a modern web development stack. It features user authentication, profile creation, post creation, and a social feed. The app is built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Prisma, and PostgreSQL.",
    stacks: [
      {
        icon: <RiNextjsFill className="text-black-500 text-xl" />,
        name: "Next.js",
      },
      {
        icon: <BiLogoTypescript className="text-yellow-500 text-xl" />,
        name: "Typescript",
      },
      {
        icon: <BiLogoTailwindCss className="text-sky-500 text-xl" />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiShadcnui className="text-black-500 text-xl" />,
        name: "shadcn/ui",
      },
      {
        icon: <SiPrisma className="text-black-500 text-xl" />,
        name: "Prisma",
      },
      {
        icon: <SiPostgresql className="text-black-500 text-xl" />,
        name: "PostgreSQL",
      },
      {
        icon: <img src="/devicons/neon.svg" className="w-5 h-5" />,
        name: "Neon",
      },
    ],
    photos: [
      "/project-6/ss-1.png",
      "/project-6/ss-2.png",
      "/project-6/ss-3.png",
      "/project-6/ss-4.png",
      "/project-6/ss-5.png",
      "/project-6/ss-6.png",
      "/project-6/ss-7.png",
    ],
    projectUrl: "https://nextjs-socially-six.vercel.app/",
    projectSrc: "https://github.com/oopbest/nextjs-socially",
  },
  {
    id: 5,
    title: "Spotify Clone - Advanced Project",
    description:
      "A real-time music streaming application inspired by Spotify. It offers features such as music playback with next and previous song navigation, volume control via a slider, an admin dashboard for managing albums and songs, integrated real-time chat, online/offline status indicators, and the ability to see what other users are listening to in real-time.",
    stacks: [
      {
        icon: <FaReact className="text-blue-500 text-xl" />,
        name: "React",
      },
      {
        icon: <BiLogoTypescript className="text-yellow-500 text-xl" />,
        name: "Typescript",
      },
      {
        icon: <img src="/devicons/zustand.svg" className="w-5 h-5" />,
        name: "Zustand",
      },
      {
        icon: <BiLogoTailwindCss className="text-sky-500 text-xl" />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiShadcnui className="text-black-500 text-sm" />,
        name: "shadcn/ui",
      },
      {
        icon: <FaNode className="text-green-500 text-xl" />,
        name: "Node.js",
      },
      {
        icon: <SiExpress className="text-black-500 text-xl" />,
        name: "Express",
      },
      {
        icon: <SiMongodb className="text-green-500 text-xl" />,
        name: "MongoDB",
      },
      {
        icon: <SiMongoose className="text-amber-950 text-xl" />,
        name: "Mongoose",
      },
      {
        icon: <SiSocketdotio className="text-black-500 text-xl" />,
        name: "Socket.io",
      },
      {
        icon: <SiCloudinary className="text-black-500 text-xl" />,
        name: "Cloudinary",
      },
      {
        icon: <SiRender className="text-black-500 text-xs" />,
        name: "Render",
      },
    ],
    photos: [
      "/project-5/ss-1.png",
      "/project-5/ss-2.png",
      "/project-5/ss-3.png",
      "/project-5/ss-4.png",
      "/project-5/ss-5.png",
      "/project-5/ss-6.png",
      "/project-5/ss-7.png",
      "/project-5/ss-8.png",
      "/project-5/ss-9.png",
      "/project-5/ss-10.png",
    ],
    projectUrl: "https://realtime-spotify-clone-4ey3.onrender.com",
    projectSrc: "https://github.com/oopbest/realtime-spotify-clone",
  },
  {
    id: 4,
    title: "E-Commerce Website - topvalue.com",
    description:
      "Topvalue.com is an e-commerce website offering a variety of products, including electronics, home appliances, and lifestyle goods. The website features a user-friendly interface, secure payment processing, and a customer support system.",
    stacks: [
      {
        icon: <RiNextjsFill className="text-black-500 text-xl" />,
        name: "Next.js",
      },
      {
        icon: <BiLogoTypescript className="text-yellow-500 text-xl" />,
        name: "Typescript",
      },
      {
        icon: <BiLogoRedux className="text-black-500 text-xl" />,
        name: "Redux Toolkit",
      },
      {
        icon: <FaBootstrap className="text-purple-500 text-xl" />,
        name: "Bootstrap",
      },
      {
        icon: <img src="/devicons/nextauth.png" className="w-5 h-5" />,
        name: "NextAuth.js",
      },

      {
        icon: <FaPhp className="text-black-500 text-xl" />,
        name: "PHP",
      },
      {
        icon: <FaMagento className="text-orange-500 text-xl" />,
        name: "Magento",
      },
      {
        icon: <SiMysql className="text-black-500 text-xl" />,
        name: "MySQL",
      },
      {
        icon: <SiGooglecloud className="text-black-500 text-xl" />,
        name: "Google cloud platform",
      },
      {
        icon: <img src="/devicons/omise.svg" className="object-contain h-5" />,
        name: "Omise",
      },
    ],
    photos: [
      "/project-4/ss-1.png",
      "/project-4/ss-2.png",
      "/project-4/ss-3.png",
      "/project-4/ss-4.png",
      "/project-4/ss-5.png",
      "/project-4/ss-6.png",
      "/project-4/ss-7.png",
    ],
    projectUrl: "https://topvalue.com",
    projectSrc: "",
  },
  {
    id: 3,
    title: "Full-Stack Friendly Real-Time Chat App",
    description:
      "A real-time chat application built using the MERN stack. This application supports features such as one-on-one chats, user search functionality, and real-time notifications.",
    stacks: [
      {
        icon: <FaReact className="text-blue-500 text-xl" />,
        name: "React",
      },
      {
        icon: <img src="/devicons/zustand.svg" className="w-5 h-5" />,
        name: "Zustand",
      },
      {
        icon: <FaReact className="text-blue-500 text-xl" />,
        name: "useContext",
      },
      {
        icon: <BiLogoTailwindCss className="text-sky-500 text-xl" />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiDaisyui className="text-black-500 text-xl" />,
        name: "Daisy UI",
      },
      {
        icon: <FaNode className="text-green-500 text-xl" />,
        name: "Node.js",
      },
      {
        icon: <SiExpress className="text-black-500 text-xl" />,
        name: "Express",
      },
      {
        icon: <SiMongodb className="text-green-500 text-xl" />,
        name: "MongoDB",
      },
      {
        icon: <SiSocketdotio className="text-black-500 text-xl" />,
        name: "Socket.io",
      },
      {
        icon: <SiJsonwebtokens className="text-black-500 text-xl" />,
        name: "JWT",
      },
      {
        icon: <SiRender className="text-black-500 text-xs" />,
        name: "Render",
      },
    ],
    photos: [
      "/project-3/ss-1.png",
      "/project-3/ss-2.png",
      "/project-3/ss-3.png",
      "/project-3/ss-4.png",
    ],
    projectUrl: "https://mern-chat-app-yt-8xug.onrender.com",
    projectSrc: "https://github.com/oopbest/mern-chat-app",
  },
  {
    id: 2,
    title: "Full-Stack Real-Time Chat App with Image Uploads",
    description:
      "Real-time messaging, theme switch, image uploads, authentication, cloud hosting on Render.com",
    stacks: [
      {
        icon: <FaReact className="text-blue-500 text-xl" />,
        name: "React",
      },
      {
        icon: <img src="/devicons/zustand.svg" className="w-5 h-5" />,
        name: "Zustand",
      },
      {
        icon: <BiLogoTailwindCss className="text-sky-500 text-xl" />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiDaisyui className="text-black-500 text-xl" />,
        name: "Daisy UI",
      },
      {
        icon: <FaNode className="text-green-500 text-xl" />,
        name: "Node.js",
      },
      {
        icon: <SiExpress className="text-black-500 text-xl" />,
        name: "Express",
      },
      {
        icon: <SiMongodb className="text-green-500 text-xl" />,
        name: "MongoDB",
      },
      {
        icon: <SiMongoose className="text-amber-950 text-xl" />,
        name: "Mongoose",
      },
      {
        icon: <SiSocketdotio className="text-black-500 text-xl" />,
        name: "Socket.io",
      },
      {
        icon: <SiJsonwebtokens className="text-black-500 text-xl" />,
        name: "JWT",
      },
      {
        icon: <SiCloudinary className="text-black-500 text-xl" />,
        name: "Cloudinary",
      },
      {
        icon: <SiRender className="text-black-500 text-xs" />,
        name: "Render",
      },
    ],
    photos: [
      "/project-2/ss-1.png",
      "/project-2/ss-2.png",
      "/project-2/ss-3.png",
      "/project-2/ss-4.png",
      "/project-2/ss-5.png",
      "/project-2/ss-6.png",
    ],
    projectUrl: "https://fullstack-chat-app-gcmo.onrender.com",
    projectSrc: "https://github.com/oopbest/fullstack-chat-app",
  },
  {
    id: 1,
    title: "Full-stack a Product Store & Deployment",
    description:
      "A full-stack web application built using the MERN stack—MongoDB, Express.js, React.js, and Node.js. It serves as a beginner-friendly crash course for learning how to develop full-stack applications with these technologies. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on product data through a user-friendly interface.",
    stacks: [
      {
        icon: <FaReact className="text-blue-500 text-xl" />,
        name: "React",
      },
      {
        icon: <img src="/devicons/zustand.svg" className="w-5 h-5" />,
        name: "Zustand",
      },
      {
        icon: <SiChakraui className="text-black-500 text-xl" />,
        name: "Chakra UI",
      },
      {
        icon: <FaNode className="text-green-500 text-xl" />,
        name: "Node.js",
      },
      {
        icon: <SiExpress className="text-black-500 text-xl" />,
        name: "Express",
      },
      {
        icon: <SiMongodb className="text-green-500 text-xl" />,
        name: "MongoDB",
      },
      {
        icon: <SiMongoose className="text-amber-950 text-xl" />,
        name: "Mongoose",
      },
      {
        icon: <SiRender className="text-black-500 text-xs" />,
        name: "Render",
      },
    ],
    photos: [
      "/project-1/ss-1.png",
      "/project-1/ss-2.png",
      "/project-1/ss-3.png",
      "/project-1/ss-4.png",
    ],
    projectUrl: "https://mern-crash-course-q1vc.onrender.com",
    projectSrc: "https://github.com/oopbest/mern-crash-course",
  },
];
