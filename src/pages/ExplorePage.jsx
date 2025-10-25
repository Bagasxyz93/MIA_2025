// src/pages/ExplorePage.jsx

import Navbar from '../components/Navbar.jsx'; 
import Footer from '../components/Footer.jsx'; 
import { MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/solid';
import { 
  FaMugHot, FaUtensils, FaTree, FaBreadSlice, FaCoffee, 
  FaSeedling, FaMapMarkerAlt, FaBookmark 
} from 'react-icons/fa';

// HAPUS import heroImage from '../assets/hero-bg.jpg';
// GUNAKAN PATH DARI FOLDER 'public'
const heroImage = '/hero-bg.jpg'; 

// Path relatif ini sudah benar karena file-file ini masih di src/assets
import kopiJaya from '../assets/kopi-jaya.jpg'; 
import kopiStudio from '../assets/kopi-studio.jpg'; 
import kopiKenangan from '../assets/jokopi.jpg'; 
import avatarSteven from '../assets/bahlil.jpg'; 
import avatarAgus from '../assets/bahlil.jpg'; 
import avatarTaher from '../assets/bahlil.jpg'; 

function ExplorePage() {
  return (
    <div className="bg-[#fcf4d9]">
      <div className="relative">
        <Navbar isTransparent={true} />
        <div
          className="relative h-[60vh] flex items-center justify-center md:justify-start" 
          style={{
            backgroundImage: `url(${heroImage})`, // Ini akan memuat /hero-bg.jpg dari public
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center md:text-left px-6 md:pl-20 md:pr-6"> 
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold font-raleway mb-4 leading-tight">
                Temukan coffe shop terbaik<br />dan terjangkau di sekitar mu
              </h1>
              <p className="text-base md:text-lg text-white font-montserrat">
                Jelajahi coffe dengan gaya estetik, nyaman, dan spot kerja
                terbaik kini tak lagi sulit.
              </p>
            </div>
          </div>
        </div>
      </div> 
      <div className="bg-[#fcf4d9] relative z-20 -mt-8 rounded-t-3xl">
        <section className="py-6 flex justify-end max-w-7xl mx-auto px-6 md:px-10">
          <div className="relative flex items-center w-full max-w-lg h-14 rounded-full bg-white overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]">
            <div className="grid place-items-center h-full w-16 text-gray-400">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </div>
            <input
              className="peer h-full w-full outline-none text-base text-gray-700 pr-4 font-montserrat"
              type="text"
              id="search"
              placeholder="Mencari sesuatu?" /> 
          </div>
        </section>
        
        {/* ========================================================== */}
        {/* ==== 👇👇👇 PERUBAHANNYA ADA DI BARIS DI BAWAH INI 👇👇👇 ==== */}
        {/* ========================================================== */}
        <section 
          className="max-w-7xl mx-auto mb-16 px-6 md:px-10" 
          // KOMENTAR: Class 'pt-10' (padding atas) dihapus dari sini 
          //          agar section ini lebih dekat ke search bar di atasnya.
          //          Jika terlalu mepet, kamu bisa tambahkan 'pt-4' di sini.
        >
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-800 mt-2 mb-4">
            Spot Pilihan Terbaik Hari Ini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotCard imgSrc={kopiJaya} title="Kopi Jaya" description="Kopi an untuk kumpul bareng besti nih" address="Jl.Soekarno Hatta"/>
            <SpotCard imgSrc={kopiStudio} title="Kopi Studio 24" description="Mau ngopi murah??KopiStud solusinya" address="Jl.Soekarno Hatta"/>
            <SpotCard imgSrc={kopiKenangan} title="Kopi Kenangan" description="Cafe untuk Dating? Disinilah yang terbaik" address="Jl.Soekarno Hatta"/>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-16 px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-800 mb-8">
            Jelajahi Berbagai Kategori
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 text-center">
            <KategoriIcon icon={<FaMugHot />} label="Kafe" />
            <KategoriIcon icon={<FaUtensils />} label="Kuliner" />
            <KategoriIcon icon={<FaTree />} label="outdoors" />
            <KategoriIcon icon={<FaBreadSlice />} label="backery" />
            <KategoriIcon icon={<FaCoffee />} label="Chill Caffe" />
            <KategoriIcon icon={<FaSeedling />} label="Bubuk Kopi" />
            <KategoriIcon icon={<FaMapMarkerAlt />} label="Terdekat" />
            <KategoriIcon icon={<FaBookmark />} label="Kafe yang tersimpan" />
          </div>
        </section>
        <section className="max-w-7xl mx-auto mb-12 px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <KomentarCard avatarSrc={avatarSteven} name="Steven Bengkel" comment="Wah isinya lengkap dan menghadirkan banyak fitur yang keren serta warna yang unik" />
            <KomentarCard avatarSrc={avatarAgus} name="Agus Mie Ayam" comment="Banyak Cafe ya ternyata di sekitarku, mantab web nya" />
            <KomentarCard avatarSrc={avatarTaher} name="Taher Poizy" comment="mksh awn, web mu bnr bnr kek web ini konsep" />
          </div>
        </section>
        <div className="text-center pb-12 px-6 md:px-10">
          <button className="bg-[#8c4a1b] text-white font-montagu font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-all w-full md:w-auto">
            Komentar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// --- Komponen Helper (Sudah benar) ---
const SpotCard = ({ imgSrc, title, description, address }) => (
  <div className="rounded-xl shadow-lg bg-[#3b2a22] text-white font-montserrat">
    <div className="p-4"> 
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-xl mb-4"/>
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-[#fcf4d9] mb-1">{description}</p>
      <p className="text-xs text-[#b49266] mb-3">{address}</p>
      <div className="flex text-yellow-400">
        <StarIcon className="w-5 h-5" /> <StarIcon className="w-5 h-5" /> <StarIcon className="w-5 h-5" /> <StarIcon className="w-5 h-5" /> <StarIcon className="w-5 h-5" />
      </div>
    </div>
  </div>
);
const KategoriIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 font-montserrat text-gray-700">
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#3b2a22] flex items-center justify-center text-2xl md:text-3xl text-white">
      {icon}
    </div>
    <span className="font-bold text-sm md:text-base">{label}</span>
  </div>
);
const KomentarCard = ({ avatarSrc, name, comment }) => (
  <div className="bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] p-4 md:p-6 flex gap-4 items-start font-montserrat border border-black">
    <div className="flex-grow"> 
      <h4 className="font-bold text-base md:text-lg text-gray-800">{name}</h4>
      <p className="text-gray-600 text-sm my-2">{comment}</p>
      <div className="flex text-yellow-400">
        <StarIcon className="w-4 h-4" /> <StarIcon className="w-4 h-4" /> <StarIcon className="w-4 h-4" /> <StarIcon className="w-4 h-4" /> <StarIcon className="w-4 h-4" />
      </div>
    </div>
    <img src={avatarSrc} alt={name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0" />
  </div>
);

export default ExplorePage;