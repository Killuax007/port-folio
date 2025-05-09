"use client";

import { motion } from "framer-motion";
import { Globe, GitBranch } from "lucide-react";
import { SiShadcnui } from "react-icons/si";

import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { FaCloudflare } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { SiDjango } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { IconCloud } from "./magicui/icon-cloud";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";

const skills = [
  { name: "Java", icon: FaJava, color: "text-rose-500", type: "react-icons" },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-400",
    type: "react-icons",
  },
  { name: "HTML/CSS", icon: Globe, color: "text-red-800", type: "lucide" },
  {
    name: "Bootstrap",
    icon: BsBootstrapFill,
    color: "text-purple-900",
    type: "lucide",
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "text-yellow-400 bg-black ",
    type: "lucide",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500 bg-black",
    type: "react-icons",
  },

  {
    name: "React",
    icon: FaReact,
    color: "text-blue-600 ",
    type: "react-icons",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-600",
    type: "react-icons",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
    type: "react-icons",
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    type: "react-icons",
  },
  {
    name: "Shadcn Ui",
    icon: SiShadcnui,
    color: "text-black",
    type: "react-icons",
  },
  {
    name: "Framer-Motion",
    icon: FiFramer,
    color: "text-black",
    type: "react-icons",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    type: "react-icons",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "text-green-700",
    type: "react-icons",
  },
  {
    name: "Spring-Boot",
    icon: SiSpringboot,
    color: "text-green-600",
    type: "react-icons",
  },
  { name: "Git", icon: GitBranch, color: "text-orange-500", type: "lucide" },
  { name: "Github", icon: FaGithub, color: "text-black", type: "lucide" },
  {
    name: "Gemini",
    icon: RiGeminiFill,
    color: "text-purple-400",
    type: "lucide",
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "text-orange-500",
    type: "lucide",
  },
  {
    name: "Supabase",
    icon: RiSupabaseFill,
    color: "text-green-500",
    type: "lucide",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-black",
    type: "react-icons",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    type: "react-icons",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "text-purple-[#336791]",
    type: "react-icons",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-black",
    type: "react-icons",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-400",
    type: "react-icons",
  },
  { name: "AWS", icon: FaAws, color: "text-black", type: "react-icons" },
  {
    name: "Cloudflare",
    icon: FaCloudflare,
    color: "text-orange-500",
    type: "react-icons",
  },
  { name: "Linux", icon: FcLinux, color: "text-black", type: "react-icons" },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  const slugs = [
    "typescript",
    "javascript",

    "react",
    "Next.js",
    "tailwindcss",
    "html5",
    "css3",
    "bootstrap",
    "firebase",
    "supabase",
    "redux",
    "framer",
    "django",
    "springboot",
    "netlify",
    "cloudflare",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonwebservices",
    "leetcode",
    "vite",
    "sqlite",
    "postgresql",
    "mysql",
    "mongodb",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "googlegemini",

    "figma",
    "linux",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}?viewbox=auto&size=40`
  );
  return (
    <section id="skills" className="py-20 ">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500" />
          <p className="text-gray-400">
            I&apos;ve worked with a variety of technologies in the web
            development world. Here are my main areas of expertise:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-2/3 mx-auto max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8"
        >
          <div className="flex justify-center items-center w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1200px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap  max-sm:ml-">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
                className="flex items-center rounded-lg text-center border  hover:border-amber-500 transition-all  duration-100 cursor-pointer"
              >
                <Badge variant={"default"} className="flex font-bold">
                  {skill.name}
                  {skill.type === "lucide" ? (
                    <skill.icon className={`w-8 h-8 ${skill.color} `} />
                  ) : (
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  )}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="relative flex size-full h-auto mx-auto max-w-lg items-center justify-center overflow-hidden rounded-lg ">
          <IconCloud images={images} />
        </div>
      </div>
    </section>
  );
}
