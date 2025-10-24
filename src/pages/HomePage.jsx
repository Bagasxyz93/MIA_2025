import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import heroImage from '../assets/hero-bg.jpg';
import iconRekomendasi from '../assets/icon-rekomendasi.png';
import iconKuliner from '../assets/dinner.png';
import iconCoworking from '../assets/icon-coworking.png';

function HomePage() {
  return (
    <main className="flex-grow flex flex-col">
      
      {/* ============ HERO SECTION ============ */}
      <div
        className="relative min-h-[70vh] flex items-center justify-start" 
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Konten teks di atas background */}
        <div className="relative z-10 text-left pl-20 pr-6"> 
          <h1 className="text-5xl md:text-6xl text-white font-bold font-raleway mb-6 leading-tight">
            Temukan coffee shop<br />terbaik di kotamu
          </h1>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 
              bg-orange-800 hover:bg-orange-900 
              text-white 
              px-10 py-4
              rounded-full 
              text-xl
              font-semibold font-montagu 
              transition duration-300"
          >
            More!
            <MagnifyingGlassIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* ============ FEATURES SECTION ============ */}
      <section className="bg-[#fcf4d9] py-16 px-10 font-montagu flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full">
          
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img src={iconRekomendasi} alt="Rekomendasi" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#3b2222]">
              Rekomendasi Terbaik & Terdekat
            </h3>

            <p className=" text-gray-600 text-center text-sm">
                Temukan coffee shop terbaik di sekitar Anda yang direkomendasikan oleh komunitas lokal.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img src={iconKuliner} alt="Kuliner" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#3b2222] mb-2">
              Kuliner Lokal Yang Unik
            </h3>
            <p className=" text-gray-600 text-center text-sm">
                Temukan kuliner khas yang hanya bisa kamu rasakan di coffee shop lokal pilihan kami.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img src={iconCoworking} alt="Co-Working" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#3b2222]">
              Co-Working & Komunitas
            </h3>

            <p className=" text-gray-600 text-center text-sm">
                Ngopi sambil produktif! Tempat ideal untuk kerja bareng teman atau membangun relasi baru.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default HomePage;
