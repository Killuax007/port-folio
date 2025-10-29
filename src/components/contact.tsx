"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosSend } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ShimmerButton } from "./magicui/shimmer-button";
import { AuroraText } from "./magicui/aurora-text";
import { Loader2 } from "lucide-react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent ✅", {
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to sent ❌ ", {
          description: "Something went wrong",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/Killuax007", label: "GitHub" },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/manoj-kumar-panda-527089272",
      label: "LinkedIn",
      color: "text-[#0077b5]",
    },
    {
      icon: FaXTwitter,
      url: "https://x.com/Killuax_007?t=mKKPELafgeTl3NalEvgBZQ&s=09",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/oniii_chan_69_/",
      label: "Instagram",
      color: "text-[#e4405f]",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/7846983437?text=Hello%20Manoj,%20I'm%20interested%20in%20working%20with%20you",
      label: "Whats-App",
      color: "text-[#25d366]",
    },
  ];
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-10 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500" />
          <p className="text-gray-400">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
          <p className="text-gray-400">
            Excited to collaborate and take on new oppurtunities ! Whether youre
            looking for a freelancer or full-time work im just a message away
            You got response quickly :)
          </p>
        </motion.div>
        <AuroraText className="flex justify-center w-full my-4 text-center text-2xl">
          Let&apos;s connect
        </AuroraText>

        <motion.div variants={item} className="mb-8 flex justify-center gap-4">
          {socialLinks.map((item, i) => {
            return (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors text-gray-300  "
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <item.icon
                        size={20}
                        className={`${item.color}  cursor-pointer`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="grid md:mx-auto mx-6 gap-5 md:w-1/3">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-gray-800 border-gray-700 focus:border-teal-500"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="bg-gray-800 border-gray-700 focus:border-teal-500"
                  />
                </motion.div>
              </div>
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="bg-gray-800 border-gray-700 focus:border-teal-500"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-gray-800 border-gray-700 focus:border-teal-500"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="min-h-[150px] bg-gray-800 border-gray-700 focus:border-teal-500"
                />
              </motion.div>
              <ShimmerButton
                type="submit"
                disabled={isSubmitting}
                className="shadow-2xl hover:bg-amber-400 tranasation-all delay-300 mx-auto"
              >
                <span className="flex whitespace-pre-wrap  text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <IoIosSend className="w-5 h-5 mr-2 hover:translate-x-6" />
                      Send Message
                    </span>
                  )}
                </span>
              </ShimmerButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
