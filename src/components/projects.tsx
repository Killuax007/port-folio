"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

import { MagicCard } from "./magicui/magic-card";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ShimmerButton } from "./magicui/shimmer-button";
import { projects } from "../../projects";

export default function Projects() {
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

        <div className=" flex flex-col items-center justify-center cursor-pointer   gap-8 ">
          {projects &&
            projects.map((project) => (
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
                className="overflow-hidden rounded-xl w-full max-w-xl  border border-gray-700"
              >
                <MagicCard
                  gradientFrom="#10b981"
                  gradientTo="#FE8FB5"
                  gradientSize={100}
                >
                  <div className=" p-4">
                    <h3 className="mb-2 text-xl font-bold hover:text-teal-400">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-400 text-wrap">
                      {project.description}
                    </p>
                    <div className="flex gap-2 pb-2">
                      <Link href={project.liveUrl}>
                        <Badge className="flex font-bold">
                          <ExternalLink className="" /> Live
                        </Badge>
                      </Link>
                      <Link className="flex" href={project.githubUrl}>
                        <Badge className="flex font-bold">
                          {" "}
                          <FaGithub className="" /> Source
                        </Badge>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="hover:font-bold hover:bg-white hover:text-black"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </MagicCard>
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
