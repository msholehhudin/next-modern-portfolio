export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Animation Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bluespider Contact Center CRM - Omnichannel",
    des: "A full-stack omnichannel CRM platform designed to centralize customer communication across Calls, WhatsApp, Email, and Internal Chats.",
    images: ["/BS.png", "/medixpress.png", "/CashQueen.png"],
    iconLists: [
      "/vuejs.svg",
      "/laravel.svg",
      "/bootstrap.svg",
      "/mysql.svg",
      "/firebase.svg",
      "/dock.svg",
    ],
    link: "https://demo-crm.aosgraha.com/",
    isPrivate: true,
    details: {
      role: "Fullstack Engineer",
      stack: "Vue.js, Laravel (Inertia.js), MySQL, Firebase, Docker",
      desc: [
        "Built with Vue.js, Laravel (Inertia.js), and MySQL, this CRM integrates real-time messaging via Firebase and multiple WhatsApp APIs (Qontak, Alibaba, Ivosight) to help customer service teams manage omnichannel communication efficiently.",
        "The newest web-based version replaces a legacy desktop system, introducing full omnichannel support for telecollection and telemarketing operations in the banking sector. The ticketing system is being redeveloped to align with the new architecture and real-time communication model.",
      ],
      keyFeatures: [
        "Migrated a legacy desktop contact center application into a scalable web-based platform using Laravel and Vue.js (Inertia.js).",
        "Implemented real-time WhatsApp, internal chat, and email notifications powered by Firebase.",
        "Integrated multiple WhatsApp API providers (Qontak, Alibaba, Ivosight) for flexible, unified customer communication.",
        "Enhanced the agent dashboard UI with a responsive Bootstrap design for improved usability.",
        "Managed backend queries, containerization with Docker, and deployed updates to production servers independently.",
        "Redeveloped the ticketing system to enhance multi-channel support and simplify case management workflows.",
      ],
      note: "This project is deployed on a private server and requires client access.",
    },
  },
  {
    id: 2,
    title: "MediXpress - Pharmacy Delivery System",
    des: "A web-based medicine delivery management system that streamlines hospital pharmacy operations by eliminating long waiting times.",
    images: ["/medixpress.png"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://medixpress.vercel.app/",
    isPrivate: true,
    details: {
      role: "Fullstack Engineer",
      stack: "Next.js, Supabase, TailwindCSS, TypeScript",
      desc: [
        "A logistics-style platform enabling pharmacists to register and track medicine deliveries for patients. Pharmacists can record patient details, prescriptions, courier assignments, delivery fees, and costs in a single interface—independent of the hospital's SIMRS.",
        "The platform improves efficiency and transparency in outpatient medicine delivery, eliminating long waiting times at the pharmacy counter.",
      ],
      keyFeatures: [
        "Built real-time delivery management platform with Next.js and Supabase.",
        "Created secure forms for delivery registration including patient info and courier assignment.",
        "Designed a responsive interface with Tailwind CSS and Shadcn UI for tablet and desktop use.",
        "Implemented serverless CRUD operations via Supabase for fast data management.",
        "Added real-time tracking for delivery progress and cost transparency.",
        "Deployed and maintained independently with focus on performance and scalability.",
      ],
      note: "This project requires authentication for access.",
    },
  },
  {
    id: 3,
    title: "CashQueen - Financial Tracking System",
    des: "A modern financial tracking web app that helps users manage income, expenses, and budgeting with visual insights.",
    images: ["/CashQueen.png"],
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/prisma.svg",
      "/psql.svg",
    ],
    link: "https://cashqueen.revingerz.com/",
    isPrivate: false,
    details: {
      role: "Fullstack Engineer",
      stack: "Next.js, Express.js, Prisma, PostgreSQL, TailwindCSS",
      desc: [
        "CashQueen is a financial management web app that allows users to track income and expenses with real-time updates and clean visual dashboards.",
        "It provides budgeting features, categorized analytics, and responsive design for seamless use on any device.",
      ],
      keyFeatures: [
        "Developed a financial tracking system with real-time data visualization.",
        "Implemented backend API with Express.js and Prisma ORM connected to PostgreSQL.",
        "Built a modern responsive UI using Next.js and Tailwind CSS.",
        "Designed dynamic chart visualizations for expense and income summaries.",
        "Handled secure authentication and user session management.",
        "Deployed the project with a focus on clean UX and performance.",
      ],
      note: "This project is publicly accessible for demo purposes.",
    },
  },
  {
    id: 4,
    title: "Nike Cloning Website",
    des: "A responsive recreation of Nike’s official website to showcase frontend development skills and modern UI/UX design.",
    images: ["/nike.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://nike-cloning.vercel.app/",
    isPrivate: false,
    details: {
      role: "Frontend Engineer",
      stack: "Next.js, TypeScript, TailwindCSS, Framer Motion, Three.js",
      desc: [
        "A pixel-perfect recreation of the Nike official website, focusing on advanced frontend animation and layout techniques.",
        "Developed as a practice project to demonstrate skills in responsive design, smooth transitions, and interactive UI elements.",
      ],
      keyFeatures: [
        "Rebuilt Nike’s homepage using Next.js and Tailwind CSS.",
        "Implemented smooth scroll animations with Framer Motion.",
        "Used Three.js for minimal 3D visual enhancements.",
        "Optimized responsiveness for all screen sizes.",
        "Showcased professional-level UI replication and front-end performance optimization.",
      ],
      note: "This is a public project designed for learning and portfolio showcase.",
    },
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lead Fullstack Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies and backend popular technologies. ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Alterra Academy Frontend Bootcamp ",
    desc: "Designed and developed web app platforms using React JS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on a hosting servers.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Fullstack Developer Bootcamp",
    desc: "Learning on Dicoding Academy with Fullstack Developer Path between React as Frontend and Express as Backend tech stack.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/msholehhudin",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/revingerz",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammad-sholehhudin/",
  },
];
