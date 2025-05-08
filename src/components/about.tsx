"use client";

import { motion } from "framer-motion";
import { MagicCard } from "./magicui/magic-card";
import Image from "next/image";
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
    <section id="about" className="py-20 ">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto mb-10 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500"
          />
          <motion.p variants={fadeInUp} className="text-gray-200">
            I’m a dedicated developer with a strong focus on building responsive
            websites and scalable backend systems. I’ve completed a Java
            internship at <span className="font-semibold">@Tutor Mentor</span> ,
            where I deepened my backend skills. I don’t claim to be a
            perfectionist—but I’m driven by the desire to improve constantly and
            deliver high-quality, reliable solutions that make a real impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center w-full max-w-xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-center text-3xl font-bold md:text-4xl"
            >
              Education
            </motion.h2>
            <div className="">
              <MagicCard className="rounded-2xl ">
                <div className="flex p-2 ">
                  <Image
                    width={100}
                    height={100}
                    className="rounded-full size-15 object-cover"
                    alt="college"
                    src={
                      "https://res.cloudinary.com/dwajmx8y7/image/upload/v1746669009/images/qi7lgrassf5fulyimbwz.jpg"
                    }
                  />
                  <div className="w-full flex justify-between  mx-2 ">
                    <div className="items-center my-2  md:my-0">
                      <motion.h2
                        variants={fadeInUp}
                        className="text-[14px] md:text-xl"
                      >
                        Bachelor of Computer Application
                      </motion.h2>
                      <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-[13px]"
                      >
                        Kalam Institute of Technology
                      </motion.p>
                    </div>
                    <div>
                      <motion.p
                        variants={fadeInUp}
                        className="text-white text-[10px] md:text-sm    my-2 md:my-1"
                      >
                        2021 - 2024
                      </motion.p>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-center text-3xl font-bold md:text-4xl"
            >
              Experience
            </motion.h2>
            <div className="">
              <MagicCard className=" rounded-2xl ">
                <div className="flex p-2 ">
                  <Image
                    width={100}
                    height={100}
                    className="rounded-full size-15 object-cover"
                    alt="college"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvFllKcHXrPabeN6zxiK0JmMZEGZRk206bw&s"
                    }
                  />
                  <div className="w-full flex justify-between mx-2 ">
                    <div className="items-center my-2  md:my-0">
                      <motion.h2
                        variants={fadeInUp}
                        className="text-[14px] md:text-xl"
                      >
                        Tutor Mentor
                      </motion.h2>
                      <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-[13px]"
                      >
                        Java Developer Intern
                      </motion.p>
                    </div>
                    <div>
                      <motion.p
                        variants={fadeInUp}
                        className="text-white  text-[10px] md:text-sm  font-mono  my-2 md:my-1"
                      >
                        Sep 2024 - Present
                      </motion.p>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
