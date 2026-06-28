"use client";

import { motion } from "framer-motion";
import { MagicCard } from "./magicui/magic-card";
import Image from "next/image";
// import Link from "next/link";
import { experience } from "../../experiences";
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
            About{" "}
            <span className="mb-4 text-3xl font-bold md:text-4xl text-teal-400">
              {" "}
              Me
            </span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl"
          />
          <motion.p variants={fadeInUp} className="text-gray-200">
            I&apos;m a Data Engineer with 2 years of experience designing
            healthcare data platforms and ETL pipelines using Azure Databricks,
            PySpark, Delta Lake, SQL, and Azure Data Factory. My work focuses on
            building scalable ingestion pipelines, improving data quality,
            optimizing Spark workloads, and delivering analytics-ready datasets.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-gray-200">
            Outside of work, I enjoy building production-style data engineering
            projects, exploring distributed systems, and continuously learning
            new cloud and big data technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center w-full max-w-xl lg:max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-center text-3xl font-bold md:text-4xl"
            >
              Education
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl"
            />
            <div className="">
              <MagicCard gradientSize={100} className="rounded-2xl ">
                <div className="flex p-2 ">
                  <Image
                    width={100}
                    height={100}
                    className="rounded-full size-15 object-cover md:my-0 my-2 "
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
                        className="text-white text-[10px] md:text-sm  my-2 w-15 md:w-full md:my-1"
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
            <motion.div
              variants={fadeInUp}
              className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl"
            />
            <div className="">
              {experience &&
                experience.map((exp) => (
                  <MagicCard
                    className=" rounded-2xl "
                    gradientSize={100}
                    key={exp.id}
                  >
                    <div className="flex p-2 ">
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full size-15 object-cover"
                        alt="college"
                        src={exp.logo}
                      />
                      <div className="w-full flex justify-between mx-2 ">
                        <div className="items-center my-2  md:my-0">
                          <motion.h2
                            variants={fadeInUp}
                            className="text-[14px] md:text-xl"
                          >
                            {exp.company_name}
                          </motion.h2>
                          <motion.p
                            variants={fadeInUp}
                            className="text-gray-400 text-[13px]"
                          >
                            {exp.project_name}
                          </motion.p>
                        </div>
                        <div>
                          <motion.p
                            variants={fadeInUp}
                            className="text-white  text-[10px] md:text-[13px]  font-mono  my-1 md:my-1"
                          >
                            {exp.serve_date}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-2 my-1 ">
                      {exp.description?.map((desc, i) => (
                        <motion.div
                          key={i}
                          variants={fadeInUp}
                          className="flex gap-4"
                        >
                          <div className="pt-[5px]">
                            <span className="block h-2 w-2 rounded-full bg-emerald-500" />
                          </div>

                          <p className="text-gray-300 leading-6 text-[12px]">
                            {desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </MagicCard>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
