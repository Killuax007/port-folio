"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Music } from "lucide-react";
import { useRef } from "react";

export default function Footer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const socialIcons = [
    {
      icon: Github,
      href: "https://github.com/",
      label: "GitHub",
      color: "text-black",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/",
      label: "LinkedIn",
      color: "text-blue-700",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/",
      label: "Twitter",
      color: "text-sky-500",
    },
  ];

  return (
    <footer className="flex w-full items-center justify-between border-t px-6 py-4 text-sm text-gray-500">
      {/* Left: Social Icons */}
      <div className="flex items-center space-x-4">
        {socialIcons.map(({ icon: Icon, href, label, color }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all grayscale hover:grayscale-0 ${color}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}

        {/* Music Icon with Play */}
        <motion.button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.paused
                ? audioRef.current.play()
                : audioRef.current.pause();
            }
          }}
          whileHover={{ rotate: 15, scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="text-green-600 transition-all grayscale hover:grayscale-0"
          title="Play/Pause Music"
        >
          <Music size={20} />
        </motion.button>

        {/* Audio */}
        <audio ref={audioRef} src="/your-audio.mp3" preload="auto" />
      </div>

      {/* Right: Love Message */}
      <div className="text-xs text-gray-400">
        Made with <span className="text-red-500 text-sm">❤️</span>
      </div>
    </footer>
  );
}
