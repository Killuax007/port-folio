"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, User, Briefcase, Mail, Code2Icon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const blurValue = useTransform(scrollY, [0, 100], [0, 8]);
  const opacityValue = useTransform(scrollY, [0, 100], [1, 0.8]);
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.7]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "skills", icon: Code2Icon, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4"
      style={{
        backdropFilter: `blur(${blurValue.get()}px)`,
        backgroundColor: `rgba(17, 24, 39, ${backgroundOpacity.get()})`,
        opacity: opacityValue,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center space-x-4 "
      >
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="relative flex flex-col items-center"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                activeSection === item.id
                  ? ` text-amber-400  `
                  : "text-gray-400 hover:text-white  "
              }`}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <item.icon size={20} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 h-1 w-1 rounded-full bg-amber-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
}
