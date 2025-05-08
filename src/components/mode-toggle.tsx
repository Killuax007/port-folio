"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="flex items-center space-x-2">
      <Sun
        size={20}
        onClick={() => setTheme("light")}
        className={`cursor-pointer transition-all ${
          resolvedTheme === "light"
            ? "text-yellow-400 scale-110"
            : "text-gray-400 hover:text-yellow-400"
        }`}
      />
      <Moon
        size={20}
        onClick={() => setTheme("dark")}
        className={`cursor-pointer transition-all ${
          resolvedTheme === "dark"
            ? "text-blue-400 scale-110"
            : "text-gray-400 hover:text-blue-400"
        }`}
      />
    </div>
  );
}
