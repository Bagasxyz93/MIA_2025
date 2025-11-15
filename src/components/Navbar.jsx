import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import { motion } from 'framer-motion';
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

      {/* Mobile menu */}
      <div className={`
        ${isMobileMenuOpen ? 'flex' : 'hidden'}
        md:hidden flex-col w-full items-center gap-4 mt-4 text-base font-bold
        ${isMobileMenuOpen && isTransparent ? 'bg-black/50 backdrop-blur-sm rounded-lg py-4' : ''}
        ${isMobileMenuOpen && !isTransparent ? 'bg-[#3b2a22] py-4' : ''}
      `}>
        {navLinks.map((link) => {
          if (link.path) {
            return (
              <NavLink
                key={link.name + "-mobile"}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md w-full text-center
                   ${isActive ? 'bg-orange-700 text-white' : 'text-white hover:bg-white/10'}`
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
                setIsMobileMenuOpen(false);
                handleAboutClick(link.scrollTo);
              }}
              className="px-3 py-2 rounded-md w-full text-center text-white hover:bg-white/10"
            >
              {link.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
