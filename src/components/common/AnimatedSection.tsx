import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function AnimatedSection({
  children,
  delay = 0.5,
  className = "flex space-x-4",
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
