import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiJavascript,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";         // Official Azure Logo

export const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: ".NET / ASP.NET Core", icon: SiDotnet },
      { name: "REST APIs", icon: FaNodeJs },
      { name: "JWT Authentication", icon: FaMicrosoft },
      { name: "MVC", icon: FaMicrosoft },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: FaMicrosoft },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "C#", icon: FaMicrosoft },
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: FaMicrosoft },
    ],
  },

  {
    title: "Cloud & Deployment",
    skills: [
      { name: "Azure", icon: VscAzure },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiVercel },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Visual Studio", icon: FaMicrosoft },
      { name: "VS Code", icon: FaMicrosoft },
    ],
  },
];