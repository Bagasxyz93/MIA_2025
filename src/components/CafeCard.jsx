// src/components/CafeCard.jsx

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

// HAPUS SEMUA IMPOR GAMBAR DARI SINI
// const imageMap = { ... } JUGA HILANG

const CafeCard = ({ img, name, address, rating, id }) => { // Terima 'img', bukan 'img_key'
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  // --- Logika Efek Glare (Shine) ---
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  const glareBackground = useTransform(
    [mouseXSpring, mouseYSpring],
    ([newX, newY]) => `radial-gradient(circle at ${newX}px ${newY}px, rgba(255,255,255,0.3) 0%, transparent 80%)`
  );
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  // --- Selesai Logika Glare ---

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/cafe/${id}`)}
      className="bg-black text-white rounded-3xl p-5 cursor-pointer relative transition-all duration-300 w-full h-[350px] sm:h-[420px] md:h-[450px] overflow-hidden"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      {/* 'img' sekarang adalah path URL langsung dari JSON */}
      <img
        src={img} 
        className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-2xl"
        alt={name}
      />
      <h3 className="mt-4 text-lg sm:text-xl font-bold">{name}</h3>
      <p className="text-gray-400 text-sm mt-1">{address}</p>
      <p className="text-yellow-500/70 text-sm mt-1">{rating}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSaved(!saved);
        }}
        className="absolute bottom-4 right-4 p-3 rounded-full bg-white text-black shadow-md text-xl z-10"
      >
        {saved ? <FaBookmark className="text-black" /> : <FaRegBookmark className="text-black" />}
      </button>

      {/* --- EFEK GLARE (KILAUAN) --- */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: glareBackground,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      />
    </motion.div>
  );
};

export default CafeCard;