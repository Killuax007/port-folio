"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, CalendarDaysIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const greetingText = "Hey, I'm";
  const nameText = "Manoj kumar ";

  return (
    <>
      <section
        id="home"
        className="relative flex flex-col min-h-screen  items-center justify-center px-4 py-20 md:px-8 bg-white dark:bg-black "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-gray-950" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="z-10 flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div variants={item} className="my-10 overflow-hidden  p-1">
            <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-800 md:h-40 md:w-40">
              <Image
                src="https://res.cloudinary.com/dwajmx8y7/image/upload/v1748057041/images/ChatGPT_Image_May_24_2025_08_53_36_AM_jehagd.png"
                alt="Profile"
                width={100}
                height={100}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mb-4 flex gap-4 "
          >
            <div className="flex justify-center text-4xl font-bold tracking-tight md:text-6xl">
              {greetingText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <div className="flex justify-center text-4xl font-bold tracking-tight md:text-6xl">
              {nameText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="bg-white bg-clip-text text-transparent"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.h2
            variants={item}
            className="mb-6 text-md font-medium text-gray-300 md:text-lg"
          >
            A full-stack developer who loves turning ideas into clean,
            functional code. Whether it’s fixing old bugs or playing with new
            tech, I’m always leveling up. Open for freelancing—let’s build
            something awesome!
          </motion.h2>

          <motion.div
            whileHover="hover"
            variants={item}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href={"#contact"}>
              <Button className="rounded-xl p-5 text-base cursor-pointer">
                <span className="flex font-semibold mr-1">Book a call </span>
                <motion.span
                  whileHover={{ rotate: 15, x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="inline-block"
                >
                  <CalendarDaysIcon size={20} />
                </motion.span>
              </Button>
            </Link>
            <Button
              variant={"outline"}
              className="rounded-xl p-5 text-base cursor-pointer"
            >
              <div className="relative h-2 w-2">
                {/* Static green dot */}
                <span className="absolute inset-0 rounded-full bg-green-500" />

                {/* Pulsing ring */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-green-400"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
              Available for work
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex gap-4">
            <motion.a
              href="https://github.com/Killuax007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors text-gray-300 hover:text-white "
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manoj-kumar-panda-527089272"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="  hover:text-sky-800 "
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://x.com/Killuax_007?t=mKKPELafgeTl3NalEvgBZQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="  transition-colors "
            >
              <FaXTwitter size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="size-5 text-white" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
