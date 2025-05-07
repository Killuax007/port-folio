"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Lightbulb, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  const fadeInUp = {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            About <span className="text-teal-400">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500"
          />
          <motion.p variants={fadeInUp} className="text-gray-400">
            I'm a passionate developer with 5+ years of experience creating
            beautiful, functional, and user-centered digital experiences. With a
            background in both design and development, I bring a unique
            perspective to every project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 mb-2 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-teal-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  I create scalable, performant applications using modern
                  frameworks and best practices.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 mb-2 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-teal-400" />
                </div>
                <CardTitle className="text-xl text-white">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  I value simple, clean design patterns and thoughtful
                  interactions.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 mb-2 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-teal-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Problem Solving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  I enjoy tackling complex problems and finding elegant
                  solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 mb-2 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-teal-400" />
                </div>
                <CardTitle className="text-xl text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  I stay on the cutting edge of technology to deliver modern
                  solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
