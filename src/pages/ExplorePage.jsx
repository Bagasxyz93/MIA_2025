// src/pages/ExplorePage.jsx

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CafeCard from "../components/CafeCard";



import {
  FaMugHot, FaUtensils, FaTree, FaBreadSlice,
  FaCoffee, FaBookmark, FaRegBookmark,FaArrowLeft, FaArrowRight
} from 'react-icons/fa';

// Assets kopi
import kopiJaya from '../assets/assets-ExplorePage/kopi-jaya.jpg';
import kopiStudio from '../assets/assets-ExplorePage/kopi-studio.jpg';
import kopiKenangan from '../assets/assets-ExplorePage/jokopi.jpg';
import lysBakery from '../assets/assets-ExplorePage/fleur-de-lys-bakery.jpg';
import AADKcoffee from '../assets/assets-ExplorePage/AADK-eat.jpeg';
import ArayaArcadeCafe from '../assets/assets-ExplorePage/araya-arcade-garden.jpeg';
import arbanatCafe from '../assets/assets-ExplorePage/arbanat-kitchencafelounge.jpg';
import CRcafe from '../assets/assets-ExplorePage/kopi-critasena.jpeg';
import nakoaCafe from '../assets/assets-ExplorePage/nakoa-cafe-indoor.jpeg';
import paneEpaneCafe from '../assets/assets-ExplorePage/Pane-e-pane.jpg';

// Assets cup
import coffeeCup from '../assets/assets-ExplorePage/coffee-cup.jpeg';
import { address } from 'framer-motion/client';

function ExplorePage() {
      const navigate = useNavigate();
      const { search } = useLocation();

      useEffect(() => {
        const params = new URLSearchParams(search);
        if (params.get("goto") === "about") {
          document.getElementById("about-section")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, [search]);

  return (
    <div className="w-full min-h-screen bg-black text-white font-montserrat">

      {/* HERO SECTION */}
      <Navbar isTransparent={true} />

      <div className="w-full py-20 bg-black text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide">
          CHILL WITH COFFEE
        </h1>

        <div className="mt-10 relative w-fit mx-auto">
          <img src={coffeeCup} className="w-[300px] max-w-full mx-auto" />

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
      <div className="w-full bg-white text-black py-16 px-4 md:px-14 overflow-visible">

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-extrabold">EXPLORE CAFE AROUND YOU</h2>
            <p className="text-gray-600 mt-1">Explore the best cafes around you</p>
          </div>

          <div className="flex gap-2">

            <div
              className="
                swiper-button-prev-custom 
                w-12 h-12 border rounded-xl flex items-center justify-center
                bg-white text-black
              "
            >
              <FaArrowLeft size={18} />
            </div>

            
            <div
              className="
                swiper-button-next-custom 
                w-12 h-12 border rounded-xl flex items-center justify-center
                bg-black text-white
              "
            >
              <FaArrowRight size={18} />
            </div>
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
            slidesPerView={1.05}
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
                address = "Jl. Pajajaran No.25D, Klojen, Kec. Klojen, Kota Malang"
                rating="★★★★★"
                id={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CafeCard
                img={kopiStudio}
                address = "Jl. Laksda Adi Sucipto No.193, Blimbing, Kec. Blimbing, Kota Malang"
                name="Kopi Studio"
                rating="★★★★☆"
                id={2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CafeCard
                img={kopiKenangan}
                address = "Jl. Jakarta No.26, Penanggungan, Kec. Klojen, Kota Malang"
                name="JoKopi"
                rating="★★★★★"
                id={3}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CafeCard
                img={lysBakery}
                address = "Jl. Kawi Atas No.21, Gading Kasri, Kec. Klojen, Kota Malang"
                name="de Lys Patisserie"
                rating="★★★★☆"
                id={4} 
              />
            </SwiperSlide>

            <SwiperSlide>
              <CafeCard
                img={AADKcoffee}
                address = " Jalan Raya, Ngelo, Tlogomas, Kec. Lowokwaru, Kota Malang"
                name="AADK Eat & Coffee"
                rating="★★★★★"
                id={5}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <p className="text-gray-600 mt-6">
          There are many cafes around you, let's continue exploring
        </p>
        
        <div className="flex justify-end mt-6">
          <button
            onClick={() => navigate("/more-cafes")}
            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            More <FaArrowRight size={16} />
          </button>
        </div>

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

      <div id='about-section' className="w-full bg-white text-black py-16 px-6 md:px-14">
        <h2 className="text-3xl font-extrabold">ABOUT US</h2>
      </div>     
      <Footer />
    </div>

    
  );
}

/* -----------------  CATEGORY BUTTON ------------------ */

const CategoryButton = ({ icon, label }) => {
  return (
    <button className="border border-white py-4 rounded-xl flex items-center justify-center gap-3 text-lg hover:bg-white hover:text-black transition">
      {icon} {label}
    </button>
  );
};

export default ExplorePage;
