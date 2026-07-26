export const projects = [
  {
    id: 1,
    featured: true,
    title: "Event Management & Ticketing System",
    subtitle: "Cloud-Based Full Stack Event Platform",
    description:
      "A cloud-based event management platform with secure authentication, QR ticketing, booking flow, and role-based access.",
    features: [
      "JWT authentication",
      "Role-based access control",
      "QR-based digital ticketing",
      "Real-time reservation flow",
      "RESTful APIs",
      "MongoDB Atlas with indexing and auto-expiry reservations",
    ],
    tech: ["ASP.NET Core", "React", "MongoDB", "JWT", "Azure", "Vercel"],
    github: "https://github.com/SyedAhmed321/Event-And-Ticketing-Management-System",
    live: "#",
    image: "/event.png",
  },
  {
    id: 2,
    title: "Pharmacy Management System",
    description:
      "A POS-style pharmacy system with inventory management, sales tracking, authentication, and CRUD operations.",
    tech: ["ASP.NET MVC", "SQL Server", "Bootstrap"],
    github: "#",
    live: "#",
    image: "/projects/pharmacy.png",
  },
  {
    id: 3,
    title: "Smart Medicine Recommendation System",
    description:
      "An ML-based system for disease prediction and medicine recommendations using classification models.",
    tech: ["Python", "Machine Learning", "Google Colab"],
    github: "#",
    live: "#",
    image: "/projects/ml.png",
  },
  {
    id: 4,
    title: "Banking Management System",
    description:
      "A desktop banking application built with Java Swing for account and transaction management.",
    tech: ["Java", "MySQL", "Swing"],
    github: "#",
    live: "#",
    image: "/projects/bank.png",
  },
];