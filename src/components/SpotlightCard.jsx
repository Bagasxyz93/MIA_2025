import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SpotlightCard = ({ children }) => {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const spotlightBackground = useTransform(
    [mouseXSpring, mouseYSpring],
    ([newX, newY]) => `radial-gradient(circle at ${newX}px ${newY}px, rgba(255,255,255,0.2) 0%, transparent 80%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full p-6 bg-transparent rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Efek Sinar (Spotlight) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: spotlightBackground,
        }}
      />
      {/* CARD */}
      <div className="relative z-10 text-white">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;