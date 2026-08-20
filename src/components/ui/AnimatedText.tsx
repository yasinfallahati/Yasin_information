"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ children, className, delay = 0 }: AnimatedTextProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
