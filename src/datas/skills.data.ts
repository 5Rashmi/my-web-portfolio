import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiCanva,
} from "react-icons/si";

import type { Skill } from "../types/skillType";

export const skillsData: Skill[] = [
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
  { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-sky-400" },
  { name: "React", Icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-600" },
  { name: "MERN Stack", Icon: FaReact, color: "text-purple-400" },
  { name: "GitHub", Icon: FaGithub, color: "text-white" },
  { name: "Canva", Icon: SiCanva, color: "text-indigo-400" },
];
