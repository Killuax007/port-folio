"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
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
    { icon: FaGithub, url: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-500" />
          <p className="text-gray-400">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-gray-400">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative work,
                I'd love to hear about it!
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-lg bg-teal-500/20">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <p className="text-lg">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-lg bg-teal-500/20">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                    <p className="text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-lg bg-teal-500/20">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">
                      Location
                    </h4>
                    <p className="text-lg">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="mb-3 text-lg font-medium">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-teal-400 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

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
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 animate-spin"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
