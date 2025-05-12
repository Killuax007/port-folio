"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

import { MagicCard } from "./magicui/magic-card";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ShimmerButton } from "./magicui/shimmer-button";

const projects = [
  {
    id: 1,
    title: "Whisperly",
    description:
      "Whisperly is an anonymous social messaging app built with Next.js, enabling users to exchange AI-generated messages securely, fostering curiosity, fun, and open interaction.",
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
      "A Medium-style web app for publishing and reading articles, featuring rich text editing, user authentication, responsive design, and seamless content management for writers.",
    image:
      "https://res.cloudinary.com/dwajmx8y7/image/upload/v1746723818/images/rdc8pkkwoicslslxjasi.png",
    tags: ["React", "Tailwind CSS", "Node Js", "PostgreSQL", "Prisma"],
    liveUrl: "https://medium-clone-sigma-five.vercel.app/",
    githubUrl: "https://github.com/Killuax007/Medium-clone",
  },
  {
    id: 3,
    title: "Urban-Bites",
    description:
      "Urban Bites delivers fresh, delicious meals fast. Order online, track your food in real-time, and enjoy a seamless dining experience.",
    image:
      "https://res.cloudinary.com/dwajmx8y7/image/upload/v1746758492/images/bmdpybrradlu412yr82l.png",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Context API",
      "Node.js",
      "Nodemailer",
      "Mongodb",
    ],
    liveUrl: "https://github.com/Killuax007/Urban-Bites",
    githubUrl: "https://github.com/Killuax007/Urban-Bites",
  },
  {
    id: 4,
    title: "Employee-Management",
    description:
      "A simple Spring Boot web application to manage employee records with CRUD operations, RESTful APIs, and integrated database support for efficient data handling.",
    image:
      "https://res.cloudinary.com/dwajmx8y7/image/upload/v1746759012/images/fgxwiifzoilctbqzlqsb.png",
    tags: ["React", "Tailwindcss", "Spring-Boot", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Killuax007/Employee-Management-",
  },
];

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
                    <Badge className="flex font-bold">
                      <ExternalLink className="" /> Live
                    </Badge>
                    <Badge className="flex font-bold">
                      <FaGithub className="" /> Source
                    </Badge>
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
