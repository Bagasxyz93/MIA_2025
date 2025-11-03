// src/components/Navbar.jsx

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import { motion } from 'framer-motion';
import coffeeLoveAnimation from '../assets/animations/Coffee-love.json';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Navbar({ isTransparent = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About Us", path: "/about-us" },
  ];

  const navClasses = isTransparent
    ? 'absolute top-0 left-0 w-full z-30 text-white'
    : 'bg-[#3b2a22] text-[#fcf4d9] shadow-md';

  return (
    // justify-between sudah dihapus, items-center sudah ada
    <nav className={`${navClasses} px-6 md:px-10 py-3 flex items-center flex-wrap`}>

      {/* --- Bagian Kiri (Brand / Logo) --- */}
      {/* 👇👇👇 GANTI 'ml-4' MENJADI 'ml-8' DI SINI 👇👇👇 */}
      <NavLink
        to="/"
        className="flex items-center gap-1 text-3xl font-bold font-serif text-white ml-8" // <-- MARGIN KIRI JADI ml-8
      >
      {/* 👆👆👆 GANTI 'ml-4' MENJADI 'ml-8' DI SINI 👆👆👆 */}
        <span>Cafe-in</span> {/* Hanya Teks */}
      </NavLink>

      {/* --- Tombol Toggle Menu Mobile --- */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-md hover:bg-white/20 text-white ml-auto"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      {/* --- Bagian Tengah (Pill Nav) --- */}
      {/* flex-grow sudah ditambahkan */}
      <div className="hidden md:flex items-center justify-center flex-grow">
        <div className="relative flex items-center bg-[#1E1E1E] p-1 rounded-full space-x-0">

          {/* Logo Lottie di awal Pill Nav */}
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-transparent">
            <Lottie
              animationData={coffeeLoveAnimation}
              loop={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-6 py-2.5 rounded-full transition-colors duration-300 font-medium font-montserrat text-sm
                   ${isActive ? 'text-black' : 'text-white hover:text-gray-200'}`
                }
              >
                {isActive && (
                  <motion.div
                    layoutId="pill-highlight"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ zIndex: 5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* --- Menu Mobile --- */}
       <div className={`
          ${isMobileMenuOpen ? 'flex' : 'hidden'}
          md:hidden
          flex-col
          w-full
          items-center gap-4
          mt-4
          text-base font-bold
          ${isMobileMenuOpen && isTransparent ? 'bg-black/50 backdrop-blur-sm rounded-lg py-4' : ''}
          ${isMobileMenuOpen && !isTransparent ? 'bg-[#3b2a22] py-4' : ''}
        `}
      >
        {navLinks.map((link) => (
           <NavLink
             key={link.path + "-mobile"}
             to={link.path}
             className={({ isActive }) =>
               `px-3 py-2 rounded-md w-full text-center
                ${isActive ? 'bg-orange-700 text-white' : 'text-white hover:bg-white/10'}`
             }
             onClick={() => setIsMobileMenuOpen(false)}
           >
             {link.name}
           </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;