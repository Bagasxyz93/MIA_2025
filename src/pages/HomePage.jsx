import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SpotlightCard from '../components/SpotlightCard.jsx';
import { MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { FaUtensils } from 'react-icons/fa'; 

const coffeeSplashImage = '/kopi-muncrat.png'; 

const rotatingWords = ["Coffee Shop", "Kafe Hits", "Tempat Santai", "Spot WFC"];

const featureCardsData = [
  {
    icon: MapPinIcon,
    title: "Rekomendasi Terbaik & Terdekat",
    description: "Temukan coffee shop terbaik di sekitar Anda yang direkomendasikan oleh komunitas lokal."
  },
  {
    icon: FaUtensils,
    title: "Kuliner Lokal Yang Unik",
    description: "Temukan kuliner khas yang hanya bisa kamu rasakan di coffee shop lokal pilihan kami."
  },
  {
    icon: UsersIcon,
    title: "Co-Working & Komunitas",
    description: "Ngopi sambil produktif! Tempat ideal untuk kerja bareng teman atau membangun relasi baru."
  }
];

function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1a110a] overflow-x-hidden">
      <Navbar isTransparent={true} />
      <main>
        <section className="bg-[#1a110a] text-white py-20 px-6 md:px-20 min-h-screen flex items-center relative">
          
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0 overflow-hidden">
            <div className="text-center font-garamond tracking-tighter text-gray-700 opacity-15 text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] leading-none select-none whitespace-nowrap">
              <p>Ngopi</p>
              <p className="-mt-4 md:-mt-8 lg:-mt-12">yuk!</p>
            </div>
          </div>

          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* --- Kolom Kiri --- */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left mt-16"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6">
                <motion.span className="inline-block shiny-text">Temukan</motion.span>
                <br />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mr-3 shiny-text leading-normal"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <br />
                <motion.span className="inline-block shiny-text">Terdekat</motion.span>
              </h1>

              <p className="text-lg text-gray-300 font-montserrat mb-10">
                Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right
              </p>

              <div className="flex justify-center md:justify-start gap-4 mb-16">
                 <a
                   href="/explore"
                   className="inline-flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-md font-semibold font-montserrat text-gray-300 hover:border-white hover:text-white transition-colors shiny-button-text"
                 >
                   Explore More
                 </a>
               </div>

              {/* === KARTU FITUR SPOTLIGHT === */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left" 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
              >
                {featureCardsData.map((card, index) => (
                  <motion.div key={index} variants={{hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}}>
                    <SpotlightCard>
                      <card.icon className="w-12 h-12 mb-4 text-[#e0b788]" /> 
                      <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-montserrat">
                        {card.description}
                      </p>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* --- Kolom Kanan --- */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img src={coffeeSplashImage} alt="Coffee Splash" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"/>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;