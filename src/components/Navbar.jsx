// src/components/Navbar.jsx
import { useState } from 'react';
import logo from '../assets/logo.png'; 

function Navbar() {
    const [active, setActive] = useState('beranda');

    const menuItems = [
        { name: 'Beranda', href: '#', id: 'beranda' },
        { name: 'Explore', href: '#', id: 'explore' },
        { name: 'Tentang Kami', href: '#', id: 'tentang' },
    ]

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent text-[#fcf4d9] px-10 py-3 flex justify-between items-center font-montserrat z-20">
      
      {/* Brand Logo & Name */}
      <a href="#" className="flex items-center gap-3 text-xl font-bold">
        Ngopi Yuk!
        <img src={logo} alt="Logo Ngopi Yuk" className="w-auto h-7" />
      </a>

      {/* Navigation Links */}
      <div className="flex gap-6 text-base font-bold">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`px-4 py-2 rounded-full transition duration-300 
              ${
                active === item.id
                  ? 'bg-orange-800 text-white'
                  : 'text-[#fcf4d9] hover:text-white'
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
