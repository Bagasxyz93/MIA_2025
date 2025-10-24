// src/pages/HomePage.jsx

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import heroImage from '../assets/hero-bg.jpg';
import iconRekomendasi from '../assets/icon-rekomendasi.png';
import iconKuliner from '../assets/icon-kuliner.png';
import iconCoworking from '../assets/icon-coworking.png';

function HomePage() {
  return (
    <main className="flex-grow flex flex-col">
      
      {/* ============ HERO SECTION ============ */}
      <div
        className="relative h-4/6 flex items-center justify-start" 
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-left pl-20 pr-6"> 
          <h1 className="text-6xl md:text-6xl text-white font-bold font-raleway mb-6 leading-tight">
            Temukan coffe shop<br />terbaik di kotamu
          </h1>
          
          {/* 1. UBAH CLASS DI BAWAH INI */}
          <a
            href="#"
            className="inline-flex items-center gap-2 
              bg-orange-800 hover:bg-orange-900  {/* <-- Warna lebih gelap */}
              text-white 
              px-10 py-4                           {/* <-- Padding lebih besar (dari px-8 py-3) */}
              rounded-full 
              text-xl                              {/* <-- Font lebih besar (dari text-lg) */}
              font-semibold font-montagu transition duration-300"
          >
            More!
            <MagnifyingGlassIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* ============ FEATURES SECTION ============ */}
      <section className="bg-[#fcf4d9] h-2/6 px-10 font-montagu flex items-center justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full">
          
          <div className="flex flex-col items-center">
            <img src={iconRekomendasi} alt="Rekomendasi" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#3b2222]">
              Rekomendasi Terbaik & terdekat
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={iconKuliner} alt="Kuliner" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#3b2222]">
              Kuliner Lokal Yang Unik
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={iconCoworking} alt="Co-Working" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#3b2222]">
              Co-Working & Komunitas
            </h3>
          </div>

        </div>
      </section>

    </main>
  );
}

export default HomePage;