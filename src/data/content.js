import profileImg from '../assets/Profile.png';

export const personalData = {
  name: "Mohamed Feroz",
  profileImage: profileImg,
  title: "Full Stack Developer",
  contact: {
    email: "mohamedferoz778@gmail.com",
    phone: "+91 9489512450",
    location: "Kottakuppam, Tamil Nadu",
    github: "https://github.com/FEROZ130405/",
  },
  summary:
    "Computer Science Engineering graduate experienced in full-stack development, proficient in React.js and Spring Boot, with a focus on practical problem-solving.",
  skills: [
    "Java",
    "JavaScript",
    "Python",
    "CPP",
    "C",
    "React.js",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
  ],
  skillsCategorized: [
    {
      category: "Programming Languages",
      items: ["Java", "JavaScript", "Python", "CPP", "C", "SQL"],
    },
    {
      category: "Frontend Development",
      items: ["React.js", "HTML", "CSS"],
    },
    {
      category: "Backend & Frameworks",
      items: ["Node.js", "Express.js", "Spring Boot"],
    },
    {
      category: "Database & Tools",
      items: ["MongoDB", "Git", "GitHub"],
    },
  ],
  experience: [
    {
      role: "React.js Developer Intern",
      company: "Adappt Mobile Cloud Applications Pvt Ltd",
      period: "June 2024 - July 2024",
      type: "Internship",
      description:
        "Developed dynamic user interfaces using React.js, implemented RESTful APIs using Node.js, and collaborated on user-focused applications.",
      achievements: [
        "Developed responsive and dynamic user interfaces using React.js to enhance user experience.",
        "Designed and implemented robust RESTful APIs using Node.js for seamless client-server communication.",
        "Collaborated with cross-functional teams to build and deliver user-focused web applications.",
      ],
      technologies: ["React.js", "Node.js", "REST APIs", "JavaScript", "CSS"],
    },
  ],
  projects: [
    {
      title: "HealthCare Management System",
      description:
        "Integrated MongoDB with React.js and Node.js for seamless data handling, featuring prescription and appointment management.",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      features: [
        "Prescription and appointment management workflow",
        "Seamless patient and doctor record handling with MongoDB",
        "Responsive web interface with real-time updates",
      ],
      githubUrl: "https://github.com/FEROZ130405/",
    },
    {
      title: "E-waste Management Application",
      description:
        "Built a system with pickup/drop-off features and integrated an AI chatbot for user guidance using React.js, Node.js, and MongoDB.",
      tags: ["React.js", "Node.js", "MongoDB", "AI Chatbot"],
      features: [
        "Scheduled electronic waste pickup and drop-off locator",
        "Interactive AI chatbot providing instant recycling guidance",
        "End-to-end full stack architecture for disposal tracking",
      ],
      githubUrl: "https://github.com/FEROZ130405/",
    },
    {
      title: "Basic Implementations",
      description:
        "Developed a responsive Todo List in React.js and a multi-step form with Redux for state management and validation.",
      tags: ["React.js", "Redux", "Form Validation", "State Management"],
      features: [
        "Intuitive task manager with filtering and local persistence",
        "Multi-step form wizard with real-time field validation",
        "Centralized state management powered by Redux",
      ],
      githubUrl: "https://github.com/FEROZ130405/",
    },
  ],
  education: {
    degree: "B.E. Computer Science Engineering",
    institution: "R.M.D. Engineering College",
    period: "Graduating April 2026",
    cgpa: "8.41 CGPA",
    highlights:
      "Strong foundation in data structures, algorithms, object-oriented programming, and software engineering principles.",
  },
  navLinks: [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
};

export default personalData;
