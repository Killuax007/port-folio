"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MagicCard } from "./magicui/magic-card";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ShimmerButton } from "./magicui/shimmer-button";

const projects = [
  {
    id: 1,
    title: "Whisperly",
    description:
      "Whisperly is an anonymous social messaging platform built with Next.js. It allows users to send and receive open-ended, AI-generated messages without revealing their identity. Ideal for curious minds, fun prompts, and social interaction — safely and securely.",
    image:
      "https://res.cloudinary.com/dwajmx8y7/image/upload/v1746674812/images/ai7cy5o7ie14kb75exm7.png",
    tags: ["Next.js", "Tailwind CSS", "Mongodb", "Nodemailer", "Gemini"],
    liveUrl: "https://whissperly.vercel.app/",
    githubUrl: "https://github.com/Killuax007/whissperly",
  },
  {
    id: 2,
    title: "Medium-Clone",
    description:
      "A Blog Web-Application inspiried from Medium  Where an user can post blogs , Read Blog from other user Save a blog  , ",
    image:
      "https://res.cloudinary.com/dwajmx8y7/image/upload/v1746723818/images/rdc8pkkwoicslslxjasi.png",
    tags: ["React", "Firebase", "Framer Motion", "TypeScript"],
    liveUrl: "https://medium-clone-sigma-five.vercel.app/",
    githubUrl: "https://github.com/Killuax007/Medium-clone",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An analytics dashboard for tracking financial data with interactive charts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "D3.js", "Tailwind CSS", "API Integration"],
    liveUrl: "",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A community platform with profiles, posts, and real-time messaging.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            My <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500" />
        </motion.div>

        <div className=" flex flex-wrap justify-center   gap-8 ">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="overflow-hidden rounded-xl w-[300px]  border border-gray-700"
            >
              <Link href={project.githubUrl}>
                <MagicCard
                  gradientFrom="#10b981"
                  gradientTo="#FE8FB5"
                  gradientSize={100}
                >
                  <div className="relative overflow-hidden p-4  ">
                    <Image
                      unoptimized
                      height={100}
                      width={100}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover  transition-transform duration-300 ease-in-out"
                      style={{
                        transform:
                          hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                        transition:
                          "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0  flex items-center justify-center"
                    >
                      <div className="flex gap-4">
                        <Button size="sm" variant="secondary" asChild>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                  <div className="  p-4">
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="mb-4 max-w-[400px] text-gray-400 text-wrap">
                      {project.description.split(" ").slice(0, 15).join(" ") +
                        "..."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="font-normal hover:bg-white hover:text-black"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-12 text-center  "
        >
          <Link href={"https://github.com/Killuax007?tab=repositories"}>
            <ShimmerButton className="shadow-2xl hover:bg-emerald-400 tranasation-all delay-300">
              <span className="flex whitespace-pre-wrap  text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                <FaGithub className="mr-1 size-3 md:size-4 " />
                View More on GitHub
                <IoIosArrowRoundForward className="ml-1 size-3 md:size-4 " />
              </span>
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
