// src/components/Navbar.jsx
// KODE BARU DENGAN SIDEBAR RESPONSIVE

import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
// --- PERUBAHAN: Impor AnimatePresence ---
import { motion, AnimatePresence } from 'framer-motion';
import coffeeLoveAnimation from '../assets/animations/Coffee-love.json';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Navbar({ isTransparent = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About Us", path: null, scrollTo: "about-section" },
  ];

  const navClasses = isTransparent
    ? 'absolute top-0 left-0 w-full z-30 text-white'
    : 'bg-[#3b2a22] text-[#fcf4d9] shadow-md';

  const handleAboutClick = (scrollTo) => {
    
    setIsMobileMenuOpen(false);
    if (location.pathname === '/explore') {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50); 
      return;
    }

    
    navigate('/explore');
    setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); 
  };

  return (
    // --- PERUBAHAN: Gunakan Fragment (<>) agar modal/sidebar tidak terkurung ---
    <>
      <nav className={`${navClasses} px-6 md:px-10 py-3 flex items-center flex-wrap`}>

        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-1 text-3xl font-bold font-serif text-white ml-8"
        >
          <span>Cafe-in</span>
        </NavLink>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-white/20 text-white ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        {/* Desktop pill nav */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          <div className="relative flex items-center bg-[#1E1E1E] p-1 rounded-full space-x-0">
            {/* Lottie */}
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-transparent">
              <Lottie
                animationData={coffeeLoveAnimation}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {navLinks.map((link) => {
              const linkBasePath = link.path ?? null;
              const isActive = linkBasePath ? (location.pathname === linkBasePath) : false;
              if (link.path) {
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={`
                      relative px-6 py-2.5 rounded-full transition-colors duration-300 font-medium font-montserrat text-sm
                      ${isActive ? 'text-black' : 'text-white hover:text-gray-200'}
                    `}
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
              }
              return (
                <button
                  key={link.name}
                  onClick={() => handleAboutClick(link.scrollTo)}
                  className="px-6 py-2.5 rounded-full transition duration-300 text-white"
                >
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- PERUBAHAN: Hapus div "Mobile menu" yang lama --- */}
        {/* Kode menu dropdown lama Anda dihapus dari sini */}
      </nav>

      {/* --- PERUBAHAN: Tambahkan blok AnimatePresence untuk Sidebar --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 1. Overlay Gelap */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* 2. Panel Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#1E1E1E] z-50 p-6 flex flex-col md:hidden" // Latar belakang sidebar
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Tombol Close di dalam Sidebar */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Tutup menu"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Daftar Link di Sidebar (logika disalin dari menu mobile Anda) */}
              <div className="flex flex-col gap-4 text-base font-bold">
                {navLinks.map((link) => {
                  if (link.path) {
                    return (
                      <NavLink
                        key={link.name + "-mobile"}
                        to={link.path}
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md w-full text-left
                            ${isActive ? 'bg-black text-white' : 'text-white hover:bg-white/10'}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    );
                  }
                  // About Us pada mobile
                  return (
                    <button
                      key={link.name + "-mobile"}
                      onClick={() => {
                        handleAboutClick(link.scrollTo);
                      }}
                      className="px-3 py-2 rounded-md w-full text-left text-white hover:bg-white/10"
                    >
                      {link.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;