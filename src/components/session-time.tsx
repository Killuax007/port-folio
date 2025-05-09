"use client";
import { useEffect, useState } from "react";

export default function SessionTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins} : ${secs}`;
  };

  return (
    <span className="text-sm text-gray-400 ml-1 md:ml-4 p-1">
      ⏱️ {formatTime(seconds)}
    </span>
  );
}
