export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  year: string;
  description: string;
  achievements?: string[];
  technologies: string[];
  logo: string;
  certificate?: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "Revnix Technologies",
    location: "Haripur, Pakistan",
    duration: "October 2024 - Present",
    year: "2024",
    description: "Worked on frontend development using React, Next.js, TypeScript and Tailwind CSS. Built reusable UI components, integrated APIs, and improved responsive user interfaces.",
    achievements: [],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    logo: "", // Dummy data, update later
    certificate: ""
  },
  {
    role: "Web Developer Intern (Remote)",
    company: "Rhombix Technologies",
    location: "Lahore, Pakistan",
    duration: "October 2024 - January 2025",
    year: "2024",
    description: "Developed responsive web applications using React, JavaScript, HTML, CSS and Tailwind CSS. Worked on improving usability and frontend functionality.",
    achievements: [],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    logo: "",
    certificate: ""
  },
  {
    role: "Web Developer Intern",
    company: "Benazir Income Support Programme (BISP)",
    location: "Islamabad, Pakistan",
    duration: "July 2024 - September 2024",
    year: "2024",
    description: "Supported web application development using C#, SQL and Bootstrap. Worked on responsive interfaces and practical software development workflows.",
    achievements: [],
    technologies: ["C#", "SQL", "Bootstrap", "HTML", "CSS"],
    logo: "",
    certificate: ""
  }
];
