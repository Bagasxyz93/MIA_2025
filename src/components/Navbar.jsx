// src/components/Navbar.jsx

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// Tambahkan { isTransparent = false } sebagai prop
function Navbar({ isTransparent = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    let baseClasses = "transition-colors py-2 md:px-3 md:py-1 md:rounded-lg";
    
    if (isTransparent) {
      baseClasses += " hover:bg-black/20"; // Hover gelap di atas gambar
    } else {
      baseClasses += " hover:text-white"; // Hover putih di atas cokelat
    }

    if (isActive) {
      return `${baseClasses} bg-orange-700`; 
    }
    return baseClasses;
  };

  const navClasses = isTransparent
    ? 'absolute top-0 left-0 w-full z-30 text-white' // Style Transparan
    : 'bg-[#3b2a22] text-[#fcf4d9]'; // Style Cokelat Solid

  return (
    <nav className={`${navClasses} px-6 md:px-10 py-3 flex justify-between items-center flex-wrap font-montserrat`}>
      
      <NavLink to="/" className="flex items-center gap-3 text-xl font-bold">
        Ngopi Yuk!
        <img src={logo} alt="Logo Ngopi Yuk" className="w-auto h-7" />
      </NavLink>

      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-md hover:bg-black/20"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen 
          ? <XMarkIcon className="w-6 h-6" /> 
          : <Bars3Icon className="w-6 h-6" />
        }
      </button>

      <div className={`
          ${isMobileMenuOpen ? 'flex' : 'hidden'} 
          flex-col md:flex-row md:flex 
          w-full md:w-auto 
          items-center gap-4 md:gap-12 
          mt-4 md:mt-0 
          text-base font-bold
          ${isMobileMenuOpen && isTransparent ? 'bg-black/50 backdrop-blur-sm rounded-lg py-4' : ''}
          ${isMobileMenuOpen && !isTransparent ? 'bg-[#3b2a22] py-4' : ''}
        `}
      >
        <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          Beranda
        </NavLink>
        <NavLink to="/explore" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          Explore
        </NavLink>
        <NavLink to="/tentang-kami" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          Tentang Kami
        </NavLink>
        
        {/* <-- LINK "KONTAK" SUDAH DIHAPUS DARI SINI --> */}
        
      </div>
    </nav>
  );
}

export default Navbar;