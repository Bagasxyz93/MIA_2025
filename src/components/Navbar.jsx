// src/components/Navbar.jsx

import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="bg-[#3b2a22] text-[#fcf4d9] px-10 py-3 flex justify-between items-center font-montserrat">
      
      {/* Brand Logo & Name */}
      <a href="#" className="flex items-center gap-3 text-xl font-bold">
        Ngopi Yuk!
        <img src={logo} alt="Logo Ngopi Yuk" className="w-auto h-7" />
      </a>

      {/* Navigation Links */}
      {/* 1. UBAH DI SINI: ganti 'gap-8' menjadi 'gap-12' */}
      <div className="flex gap-16 text-base font-bold"> 
        <a href="#" className="hover:text-white">Beranda</a>
        <a href="#" className="hover:text-white">Explore</a>
        <a href="#" className="hover:text-white">Tentang Kami</a>
      </div>
    </nav>
  );
}

export default Navbar;