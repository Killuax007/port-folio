"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates and team features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Framer Motion", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An analytics dashboard for tracking financial data with interactive charts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "D3.js", "Tailwind CSS", "API Integration"],
    liveUrl: "#",
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
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            My <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500" />
          <p className="text-gray-400">
            Here are some of my recent projects. Each one was built with a focus
            on solving real problems with elegant solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
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
              className="overflow-hidden rounded-xl bg-gray-800 border border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform:
                      hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-teal-900/70 flex items-center justify-center"
                >
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-700 hover:bg-gray-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-teal-600 text-teal-400 hover:bg-teal-600/10"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
