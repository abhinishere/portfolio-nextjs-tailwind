import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiFlutter,
    text: "Flutter",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiHeroku,
    text: "Heroku",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "Give a short description about project 1",
    link: "https://github.com/",
  },
  {
    title: "Project 2",
    description: "Give a short description about project 2",
    link: "https://github.com/",
  },
  {
    title: "Project 3",
    description: "Give a short description about project 3",
    link: "https://github.com/",
  },
  {
    title: "Project 4",
    description: "Give a short description about project 4",
    link: "https://github.com/",
  },
  {
    title: "Project 5",
    description: "Give a short description about project 5",
    link: "https://github.com/",
  },
  {
    title: "Project 6",
    description: "Give a short description about project 6",
    link: "https://github.com/",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Company 3",
    logo: "/company-logo.png",
    position: "Company 3 Position",
    description: "Write briefly on your experience working at Company 3.",
    years: "Apr, 2022 - Aug, 2023",
  },
  {
    company: "Company 2",
    logo: "/company-logo.png",
    position: "Company 2 Position",
    description: "Write briefly on your experience working at Company 2.",
    years: "Jan, 2020 - Mar, 2022",
  },
  {
    company: "Company 1",
    logo: "/company-logo.png",
    position: "Company 1 Position",
    description: "Write briefly on your experience working at Company 1.",
    years: "Aug, 2018 - Sep, 2018",
  },
  {
    company: "Uni Name",
    logo: "/company-logo.png",
    position: "Student",
    description:
      "Write briefly about your university experience (degree, subject, etc.)",
    years: "Aug, 2015 - Jun, 2019",
  },
];

export const aboutYou = {
  name: "Your Name",
  description:
    "👋 Hi, I'm Random Person. Developer. I'm passionate about.... This is a short description about yourself.... goes in the left sidebar of the landing page.",
  yearsOfExperience: "x years",
  location: "Your Place",
  email: "email@example.com",
};

export const logoText = "@yourname";

export const marketingHeadlines = {
  mainHeadline: "This is the MAIN headline.",
  subHeadline: "Bottom. Sub. Headline.",
};

export const websiteMetadata = {
  title: "Your Name | Designation",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};
