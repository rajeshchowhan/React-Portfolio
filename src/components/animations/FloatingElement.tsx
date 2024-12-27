import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  y?: number;
}

export default function FloatingElement({ 
  children, 
  duration = 2,
  y = 15 
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-y, y],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}