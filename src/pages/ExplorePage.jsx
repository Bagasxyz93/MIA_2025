// src/pages/ExplorePage.jsx

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FaMugHot, FaUtensils, FaTree, FaBreadSlice,
  FaCoffee, FaBookmark, FaRegBookmark
} from 'react-icons/fa';

// Assets
import kopiJaya from '../assets/assets-ExplorePage/kopi-jaya.jpg';
import kopiStudio from '../assets/assets-ExplorePage/kopi-studio.jpg';
import kopiKenangan from '../assets/assets-ExplorePage/jokopi.jpg';
import coffeeCup from '../assets/assets-ExplorePage/coffee-cup.jpeg';

function ExplorePage() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-montserrat">

      {/* HERO SECTION */}
      <Navbar isTransparent={true} />

      <div className="w-full py-20 bg-black text-center">
        <h1 className="text-6xl font-extrabold tracking-wide">CHILL WITH COFFEE</h1>

        <div className="mt-10 relative w-fit mx-auto">
          <img src={coffeeCup} className="w-[300px] mx-auto" />
          <div
            className="
              absolute left-1/2 -translate-x-1/2 
              bottom-[-10px] 
              w-[220px] h-[20px]
              bg-white/40 
              blur-xl 
              rounded-full
            "
          ></div>
        </div>
      </div>

      {/* EXPLORE SECTION */}
      <div className="w-full bg-white text-black py-16 px-6 md:px-14">

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-extrabold">EXPLORE CAFE AROUND YOU</h2>
            <p className="text-gray-600 mt-1">Explore the best cafes around you</p>
          </div>

          <div className="flex gap-3">
            <div className="swiper-button-prev-custom w-12 h-12 border rounded-xl flex items-center justify-center text-black"></div>
            <div className="swiper-button-next-custom w-12 h-12 border rounded-xl flex items-center justify-center text-black"></div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="mt-10 overflow-visible">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={25}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 }
            }}
            className="pb-10 overflow-visible"
          >

            <SwiperSlide>
              <CafeCard
                img={kopiJaya}
                name="Kopi Jaya"
                rating="★★★★★"
                id={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CafeCard
                img={kopiStudio}
                name="Kopi Studio"
                rating="★★★★☆"
                id={2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CafeCard
                img={kopiKenangan}
                name="JoKopi"
                rating="★★★★★"
                id={3}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <p className="text-gray-600 mt-6">
          There are many cafes around you, let's continue exploring
        </p>
      </div>

      {/* CATEGORY SECTION */}
      <div className="w-full bg-black text-white py-16 px-6 md:px-14">

        <h2 className="text-3xl font-extrabold">EXPLORE VARIOUS CATEGORIES</h2>
        <p className="text-gray-400 mt-1">Select the category you want</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          <CategoryButton icon={<FaMugHot />} label="Cafe Indoor" />
          <CategoryButton icon={<FaTree />} label="Cafe Outdoor" />
          <CategoryButton icon={<FaCoffee />} label="Chill Cafe" />
          <CategoryButton icon={<FaUtensils />} label="Culinary" />
          <CategoryButton icon={<FaBreadSlice />} label="Bakery" />
          <CategoryButton icon={<FaBookmark />} label="Saved Cafe" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

const CafeCard = ({ img, name, rating, id }) => {
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/cafe/${id}`)}
      className="
        bg-black text-white rounded-3xl p-5 cursor-pointer relative
        hover:-translate-y-3 hover:shadow-2xl transition-all duration-300
        w-full 
        h-[350px] sm:h-[420px] md:h-[450px]
        overflow-visible
      "
    >
      {/* GAMBAR */}
      <img
        src={img}
        className="
          w-full 
          h-40 sm:h-48 md:h-52 
          object-cover rounded-2xl
        "
      />

      {/* NAMA */}
      <h3 className="mt-4 text-lg sm:text-xl font-bold">{name}</h3>

      {/* RATING */}
      <p className="text-yellow-500/70 text-sm mt-1">{rating}</p>

      {/* TOMBOL SAVE */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSaved(!saved);
        }}
        className="
          absolute bottom-4 right-4 p-3 rounded-full 
          bg-white text-black shadow-md text-xl
        "
      >
        {saved ? <FaBookmark className="text-black" /> : <FaRegBookmark className="text-black" />}
      </button>
    </div>
  );
};




/* -----------------  CATEGORY BUTTON ------------------ */

const CategoryButton = ({ icon, label }) => {
  return (
    <button className="border border-white py-4 rounded-xl flex items-center justify-center gap-3 text-lg hover:bg-white hover:text-black transition">
      {icon} {label}
    </button>
  );
};

export default ExplorePage;
