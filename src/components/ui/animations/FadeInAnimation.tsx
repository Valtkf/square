import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedRevealProps {
  children: ReactNode;
}

const FadeInAnimation = ({ children }: AnimatedRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Initial state (élément invisible et décalé vers le bas)
    whileInView={{ opacity: 1, y: 0 }} // Quand l'élément est visible (scroll), il devient opaque et se place à sa position originale
    transition={{ duration: 0.8, ease: "easeOut" }} // Transition avec une durée et une fonction d'accélération
    viewport={{ once: false }} // L'animation se produit une seule fois lors de la première apparition
  >
    {children}
  </motion.div>
);

export default FadeInAnimation;
