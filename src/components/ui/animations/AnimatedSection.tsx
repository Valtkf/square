import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }} // Départ avec une échelle réduite pour le zoom arrière
    animate={{ opacity: 1, scale: 1 }} // L'élément revient à sa taille normale
    transition={{ duration: 1, ease: "easeOut" }} // Effet plus fluide grâce à `easeOut`
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
