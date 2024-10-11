import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedRevealProps {
  children: ReactNode;
  direction?: "left" | "right"; // New prop to control the animation direction
}

const SlideInAnimation = ({
  children,
  direction = "right", // Default direction is right
}: AnimatedRevealProps) => {
  const xOffset = direction === "left" ? 50 : -50; // Set offset based on direction

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }} // Apply the offset for horizontal movement
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;
