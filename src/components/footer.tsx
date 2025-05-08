"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useRef, useState } from "react";

export default function Footer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const socialIcons = [
    {
      icon: FaGithub,
      href: "https://github.com/",
      label: "GitHub",
      color: "text-gray-200",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/",
      label: "LinkedIn",
      color: "text-blue-700",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/",
      label: "Twitter",
      color: "text-sky-500",
    },
  ];
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <footer className="flex w-full max-w-5xl items-center justify-between border-t px-6 py-4 text-sm text-gray-500 mx-auto">
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
          onClick={togglePlay}
          whileHover={{ rotate: 15, scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="text-green-600 transition-all grayscale hover:grayscale-0"
          title="Play/Pause Music"
        >
          {isPlaying ? <MdMusicOff size={20} /> : <MdMusicNote size={20} />}
        </motion.button>

        {/* Audio */}
        <audio ref={audioRef} src="/song.mp3" preload="auto" />
      </div>

      {/* Right: Love Message */}
      <div className="text-xs text-gray-400">
        Made with <span className="text-red-500 text-sm">❤️</span>
      </div>
    </footer>
  );
}
