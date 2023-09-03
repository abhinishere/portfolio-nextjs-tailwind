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
  SiPostgresql,
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
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Challo",
    description:
      "Challo is a full-fledged social media app with a primary focus on live video-based discussions. Tech stack includes Flutter, Python, Firebase, AWS, and Agora SDK.",
    image: "/challo-preview.png",
    link: "https://github.com/abhinishere/challo",
  },
  {
    title: "next-gallery-modal",
    description:
      "A WordPress-like image upload gallery modal built with Next.js, TailwindCSS, Typescript, shadcn-ui, and Supabase.",
    image: "/next-gallery-modal-preview.png",
    link: "https://github.com/abhinishere/next-gallery-modal",
  },
  {
    title: "varthaCMS",
    description:
      "An open-source news-focused CMS project I'm building with Next.js, Tailwind, Typescript, and Supabase.",
    image: "/varthacms-preview.png",
    link: "https://github.com/varthaCMS/varthaCMS",
  },
  {
    title: "VRThingy",
    description:
      "GSMArena-like comparison website for VR devices; built with...",
    image: "/varthacms-preview.png",
    link: "https://github.com/varthaCMS/vrthingy",
  },
  {
    title: "Portfolio template",
    description:
      "Clean-looking portfolio template built with TypeScript, Next and Tailwind, and deployed on Vercel.",
    image: "/varthacms-preview.png",
    link: "https://github.com/abhinishere/portfolio",
  },
  {
    title: "News template",
    description:
      "Next.js template for static news, magazine, and blog websites.",
    image: "/nextjs-news-preview.png",
    link: "https://github.com/abhinishere/nextjs-news-template",
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
    company: "Mixedware",
    logo: "/mixedware-preview.jpg",
    position: "Full-Stack Developer",
    description:
      "I was hired as a full stack developer at Mixedware after freelancing for them for two months. I was responsible for building an AR mobile app with Flutter, ARKit, ARCore & Firebase, and a revamped web app with e-commerce functionality using TypeScript, Next/React, Node, Express, MongoDB (MERN) stack.",
    years: "Apr, 2022 - Aug, 2023",
  },
  {
    company: "Freelance",
    logo: "/freelance-preview.jpg",
    position: "Full-Stack Dev & Marketer",
    description:
      "I freelanced as a full stack web-and-app developer and marketer for 2+ years with clients of all sizes, including a top price comparison site and a VR startup.",
    years: "Jan, 2020 - Mar, 2022",
  },
  {
    company: "Niveosys",
    logo: "/niveosys-preview.jpg",
    position: "Intern",
    description:
      "Interned at Niveosys as part of college degree and familiarized development tools, best coding practices, and project management methodologies.",
    years: "Aug, 2018 - Sep, 2018",
  },
  {
    company: "SSET",
    logo: "/scms-preview.jpg",
    position: "Student",
    description:
      "I graduated with a B.Tech in Computer Science & Engineering from SCMS School of Engineering & Technology, Ernakulam.",
    years: "Aug, 2015 - Jun, 2019",
  },
];

export const aboutYou = {
  name: "Abhin Mahipalan",
  description:
    "👋 Hi, I'm Abhin. Full-stack developer. I'm passionate about building web experiences that solve real problems and improve lives. When not working, I am mostly likely digging through Reddit or spinning up websites around obscure topics.",
  yearsOfExperience: "3.5 years",
  location: "Keralam, India 🇮🇳",
  email: "getabhin@gmail.com",
};

export const logoText = "@abhinishere";

export const marketingHeadlines = {
  mainHeadline: "I convert YOUR digital vision into reality.",
  subHeadline: "Simple. Consistent. Lasting.",
};

export const websiteMetadata = {
  title: "Abhin Mahipalan | Full Stack Developer",
  description: "👋 Hey, Abhin here. Welcome to my portflio/blog.",
};
