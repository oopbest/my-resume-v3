const myExps = [
  {
    company: "Topvalue Corporate Ltd.",
    position: "Full-stack Developer",
    startDate: "1 Sep 2017",
    endDate: "5 Jan 2025",
    responsibilities: [
      "Designed, developed and maintained software solutions using Next.js, React, Redux, Redux Toolkit, Typescript, Javascript, Bootstrap, Tailwind CSS, RESTful APIs, PHP, MySQL, Magento and other tech stacks.",
      "Managed project timelines and priorities, ensuring alignment with business objectives.",
      "Developed and maintained e-commerce platforms using Next.js, TypeScript, Magento",
      "Led migration from Magento 1 to Magento 2, improving performance and scalability",
      "Integrated payment gateways (2C2P, Omise, Direct Bank Payment)",
      "Built a real-time admin dashboard with React, Laravel, and Firebase",
      "Collaborated with outsourced teams to develop hybrid mobile applications",
      "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 50%",
    ],
    keyProject: [
      "Topvalue E-commerce website - topvalue.com (Electronics, Home appliances, and Lifestyle goods)",
      "Topvalue Housebrand websites (Alectric, Altec, Cocugu, Fennix, Namiko)",
      "Developed microservices for Topvalue & CJ Express (Easy Shopping)",
      "Dashboard Realtime Monitoring, Promotions Report can be Import,Export (First React Project)",
      "POS System (Offline store management)",
      "E-commerce website - topcosme.com (Cosmetics & Beauty)",
      "Integrated Payment Gateway e.g., 2C2P API, Omise API",
      "Integrated Direct Bank Payment Gateway and installment payment ( e.g., TBANK, KBANK, SCB, BAY, BBL )",
      "Developed and Integreated modules for Magento 1, Magento 2",
    ],
  },
  {
    company: "iBusiness Coporation Co., Ltd.",
    position: "PHP Developer",
    startDate: "1 Jun 2013",
    endDate: "31 Aug 2017",
    responsibilities: [
      "Designed, developed, and deployed web applications for clients using various tech stacks, including using PHP, MySQL, HTML, CSS, Javascript, jQuery, Ajax, SOAP, XML, Bootstrap and responsive design.",
      "Implemented user authentication and authorization",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Managed project timelines and priorities, ensuring delivery on-time.",
    ],
    keyProject: [
      "Developed custom CMS, e-commerce websites, and booking systems using PHP, MySQL",
      "Built HR payroll systems for generating salary slips and employee management",
      "Integrated SOAP & REST APIs for various enterprise solutions",
    ],
  },
];

const WorkExp = () => {
  return (
    <div id="work" className="p-6 bg-zinc-600">
      <h3 className="text-center text-3xl font-bold py-8">Work Experience</h3>
      {myExps.map((exp, index) => (
        <div className="p-4" key={index}>
          <h4 className="text-xl font-bold">{exp.company}</h4>
          <p>{exp.position}</p>
          <p>
            {exp.startDate} - {exp.endDate}
          </p>
          <div className="mt-4">
            <h4 className="font-bold">Responsibilities</h4>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Key Project</h4>
            <ul className="list-disc list-inside">
              {exp.keyProject.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExp;
