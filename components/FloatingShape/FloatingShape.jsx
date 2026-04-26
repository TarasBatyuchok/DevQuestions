"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const FloatingShape = ({ size, top, left, delay }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Чекаємо, поки компонент змонтується
  useEffect(() => {
const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    
    return () => cancelAnimationFrame(frame);
  }, []);

  // Якщо ще не змонтовано, не рендеримо нічого (або рендеримо дефолтний колір)
  if (!mounted) return null;

  const color = theme === "dark" ? "bg-orange-500/25" : "bg-amber-400/25";

  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} blur-xl`}
      style={{ top, left, pointerEvents: "none" }}
      animate={{
        y: [0, 100, 0],
        x: [0, 100, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;