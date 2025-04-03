import PortfioGrid from "./PortfioGrid";

const projects = [
  {
    id: 5,
    title: "Spotify Clone - Advanced Project",
    description:
      "A real-time music streaming application inspired by Spotify. It offers features such as music playback with next and previous song navigation, volume control via a slider, an admin dashboard for managing albums and songs, integrated real-time chat, online/offline status indicators, and the ability to see what other users are listening to in real-time.",
    stacks: [
      "React",
      "Typescript",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "Cloudinary",
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
      "Next.js",
      "Typescript",
      "Redux Toolkit",
      "Bootstrap",
      "NextAuth.js",
      "REST API",
      "PHP (Magento 2)",
      "MySQL",
      "Google cloud platform",
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
      "React",
      "Zustand",
      "useContext",
      "Tailwind CSS",
      "Daisy UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "JWT",
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
      "React",
      "Zustand",
      "Tailwind CSS",
      "Daisy UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Socket.io",
      "JWT",
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
    stacks: ["React", "Zustand", "Chakra UI", "Node.js", "MongoDB", "Mongoose"],
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

const Portfolio = () => {
  return (
    <div id="portfolio" className="p-2">
      <h2 className="text-center text-3xl font-bold py-8">Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {projects.map((project, index) => (
          <PortfioGrid key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
