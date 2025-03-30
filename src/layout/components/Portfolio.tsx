import PortfioGrid from "./PortfioGrid";

const projects = [
  {
    id: 4,
    title: "Website E-Commerce topvalue.com",
    description: "Description of Project 4",
    stacks: [
      "Next.js 12, Redux Toolkit, NextAuth.js, REST API, PHP (Magento 2), MySQL, Google Cloud Platform",
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
  },
  {
    id: 3,
    title: "Full-Stack Friendly Real-Time Chat App",
    description: "Description of Project 1",
    stacks: [
      "React, Tailwind CSS, Daisy UI, Node.js, Express, MongoDB, Mongoose, Zustand, useContext, Socket.io, JWT",
    ],
    photos: [
      "/project-3/ss-1.png",
      "/project-3/ss-2.png",
      "/project-3/ss-3.png",
      "/project-3/ss-4.png",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Real-Time Chat App with Image Uploads",
    description: "Description of Project 2",
    stacks: [
      "React, Tailwind CSS, Daisy UI, Node.js, Express, MongoDB, Mongoose, Zustand, Cloudinary, Socket.io, JWT",
    ],
    photos: [
      "/project-2/ss-1.png",
      "/project-2/ss-2.png",
      "/project-2/ss-3.png",
      "/project-2/ss-4.png",
      "/project-2/ss-5.png",
      "/project-2/ss-6.png",
    ],
  },
  {
    id: 1,
    title: "Full-stack a Product Store & Deployment",
    description: "Description of Project 3",
    stacks: ["React, Chakra UI, Zustand, Node.js, MongoDB, Mongoose"],
    photos: [
      "/project-1/ss-1.png",
      "/project-1/ss-2.png",
      "/project-1/ss-3.png",
      "/project-1/ss-4.png",
    ],
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="p-2">
      <h2 className="text-center text-3xl font-bold py-8">Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {projects.map((project, index) => (
          <PortfioGrid key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
