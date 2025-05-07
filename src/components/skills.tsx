"use client"

import { motion } from "framer-motion"
import { Braces, Globe, Smartphone, Figma, GitBranch, Terminal, Cloud } from "lucide-react"
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si"

const skills = [
  { name: "HTML/CSS", icon: Globe, color: "text-orange-400", type: "lucide" },
  { name: "JavaScript", icon: Braces, color: "text-yellow-400", type: "lucide" },
  { name: "React", icon: FaReact, color: "text-blue-400", type: "react-icons" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", type: "react-icons" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", type: "react-icons" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400", type: "react-icons" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", type: "react-icons" },
  { name: "UI/UX Design", icon: Figma, color: "text-pink-400", type: "lucide" },
  { name: "Git", icon: GitBranch, color: "text-orange-500", type: "lucide" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", type: "react-icons" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400", type: "react-icons" },
  { name: "AWS", icon: FaAws, color: "text-yellow-500", type: "react-icons" },
  { name: "Terminal", icon: Terminal, color: "text-gray-300", type: "lucide" },
  { name: "Cloud Services", icon: Cloud, color: "text-blue-300", type: "lucide" },
  { name: "Responsive Design", icon: Smartphone, color: "text-teal-400", type: "lucide" },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
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
            I've worked with a variety of technologies in the web development world. Here are my main areas of
            expertise:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
              className="flex flex-col items-center p-6 text-center bg-gray-800 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-900">
                {skill.type === "lucide" ? (
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                ) : (
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                )}
              </div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
