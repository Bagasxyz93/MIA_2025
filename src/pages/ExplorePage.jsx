// src/pages/ExplorePage.jsx
// KODE BERSIH - AUTOPLAY KONSTAN + BISA DIGESER

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
// --- PERUBAHAN: Import Autoplay ---
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// --- PERUBAHAN: Import CSS Autoplay ---
import 'swiper/css/autoplay';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom"; 
import CafeCard from "../components/CafeCard.jsx";
import cafes from "../data/cafes.json";

import {
  FaMugHot, FaUtensils, FaTree, FaBreadSlice,
  FaCoffee, FaBookmark, FaRegBookmark, FaArrowLeft, FaArrowRight,
  FaStar
} from 'react-icons/fa';

// Assets cup 
const coffeeCup = '/coffee-cup.png';
const avatarIrvn = '/bahlil.jpg';
// Pastikan path ini benar (saya asumsikan sudah .jpg)
const coffeInfo = '/coffee-tumpehdikit.jpg'; 

const initialTestimonials = [
  // --- PERUBAHAN: Array kembali normal (tanpa duplikat) ---
  { id: 1, avatar: avatarIrvn, name: "Irvan Sanjaya", comment: "Web yang unik...", rating: 5 },
  { id: 2, avatar: "https://loremflickr.com/150/150/dog?random=2", name: "Bukan Irvan", comment: "Keren banget webnya...", rating: 4 },
  { id: 3, avatar: "https://loremflickr.com/150/150/fox?random=3", name: "Steven Bengkel", comment: "Wah isinya lengkap...", rating: 5 },
  { id: 4, avatar: "https://loremflickr.com/150/150/bear?random=4", name: "Taher Poizy", comment: "mksh awn...", rating: 4 },
];

function ExplorePage() {
  const navigate = useNavigate();
  const { hash } = useLocation(); 

  useEffect(() => {
    if (hash === "#about-us") {
      const element = document.getElementById("about-section");
      if (element) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 70;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight - 20, 
          behavior: 'smooth'
        });
      }
    }
  }, [hash]); 

  return (
    <div className="w-full min-h-screen bg-black text-white font-montserrat overflow-x-hidden">
      <Navbar isTransparent={true} />
      <main>
        
        {/* HERO SECTION DENGAN SHADOW PUTIH */}
        <div className="w-full py-20 bg-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black z-0"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide relative z-10">
            CHILL WITH COFFEE
          </h1>
          <div className="mt-10 relative w-fit mx-auto z-10">
            <img src={coffeeCup} className="w-[300px] max-w-full mx-auto" alt="Coffee Cup" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[220px] h-[30px] bg-white/40 blur-xl rounded-full"></div>
          </div>
        </div>
        {/* === AKHIR HERO SECTION === */}

        {/* EXPLORE SECTION */}
        <div className="w-full bg-white text-black py-16 px-4 md:px-14 overflow-x-hidden pb-20">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-extrabold">EXPLORE CAFE AROUND YOU</h2>
              <p className="text-gray-600 mt-1">Temukan kafe terbaik di sekitar Anda</p>
            </div>
            <div className="flex gap-2">
              <div className="swiper-button-prev-custom w-12 h-12 border rounded-xl flex items-center justify-center bg-white text-black cursor-pointer">
                <FaArrowLeft size={18} />
              </div>
              <div className="swiper-button-next-custom w-12 h-12 border rounded-xl flex items-center justify-center bg-black text-white cursor-pointer">
                <FaArrowRight size={18} />
              </div>
            </div>
          </div>
          <div className="mt-10 overflow-visible">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              spaceBetween={25}
              slidesPerView={1.05}
              breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 } }}
              className="overflow-visible"
            >
              {cafes.slice(0, 5).map((cafe) => (
                <SwiperSlide key={cafe.id}>
                  <CafeCard {...cafe} />
                </SwiperSlide>
              ))}
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

        {/* ABOUT US SECTION */}
        <AboutUsSection />

        {/* === INFO SECTION (SESUAI FIGMA) === */}
        <InfoSection />
        {/* === AKHIR INFO SECTION === */}

      </main>
      <Footer />
    </div>
  );
}

// ==========================================================
// ==== KOMPONEN HELPER ====
// ==========================================================

/* -----------------  CATEGORY BUTTON ------------------ */
const CategoryButton = ({ icon, label }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/more-cafes", {
      state: { category: label } 
    });
  };
  return (
    <button
      onClick={handleClick}
      className="border border-white py-4 rounded-xl flex items-center justify-center gap-3 text-lg hover:bg-white hover:text-black transition"
    >
      {icon} {label}
    </button> 
  );
};

/* -----------------  STAR RATING INPUT (BINTANG FORM) ------------------ */
const StarRatingInput = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex text-gray-500 text-2xl">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <FaStar 
              className="cursor-pointer transition-colors"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(ratingValue)}
            />
          </label>
        );
      })}
    </div>
  );
};

/* -----------------  TESTIMONIAL CARD (KARTU KOMENTAR) ------------------ */
const TestimonialCard = ({ avatar, name, comment, rating }) => {
  return (
    // --- PERUBAHAN: Efek gradasi cahaya ditambahkan ---
    <div className="relative overflow-hidden bg-[#1E1E1E] rounded-xl p-6 h-full flex flex-col justify-between border border-gray-700 bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.08)_0%,_transparent_40%)]">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <p className="font-bold text-lg text-white">{name}</p>
        </div>
        <p className="text-gray-300 text-sm">{comment}</p>
      </div>
      <div className="flex text-yellow-500 mt-4">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar 
              key={index} 
              color={ratingValue <= rating ? "#ffc107" : "#555"} 
            />
          );
        })}
      </div>
    </div>
  );
};

/* -----------------  ABOUT US SECTION (KONTEN UTAMA) ------------------ */
const AboutUsSection = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!newName.trim() || !newComment.trim() || newRating === 0) {
      alert("Harap isi nama, komentar, dan beri rating bintang.");
      return; 
    }
    const newTestimonial = {
      id: Date.now(),
      avatar: `https://loremflickr.com/150/150/animal?random=${Date.now()}`, 
      name: newName,
      comment: newComment,
      rating: newRating 
    };
    setTestimonials([newTestimonial, ...testimonials]);
    setNewName('');
    setNewComment('');
    setNewRating(0);
  };

  return (
    <section id="about-section" className="w-full bg-white text-black py-20 px-6 md:px-14">
      
      <h2 className="text-3xl font-extrabold text-center mb-12">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* Kartu Latar Belakang */}
        <div className="bg-black text-white rounded-xl p-8 border border-gray-700">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Latar Belakang</h3>
          <p className="text-gray-300 leading-relaxed">
            Di sekitar kita ada banyak Usaha mikro, kecil, dan menengah (UMKM) yang sulit di temukan secara online. Jadi kami memiliki solusi untuk membuat website untuk pemilik UMKM yang tersebar.
          </p>
        </div>
        {/* Form Input */}
        <div className="bg-black text-white rounded-xl p-8 border border-gray-700 relative">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Comment Section</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
              <input 
                id="name"
                type="text" 
                placeholder="Nama Anda" 
                className="w-full p-3 mt-1 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="comment" className="text-sm font-medium text-gray-400">Comment</label>
              <textarea 
                id="comment"
                placeholder="Komentar Anda..." 
                rows="3" 
                className="w-full p-3 mt-1 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)} 
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <StarRatingInput rating={newRating} setRating={setNewRating} />
              <button type="submit" className="bg-white text-black py-2 px-6 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bagian Testimonial (latar hitam) */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-black mt-20 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-white">WHAT PEOPLE ARE SAYING ABOUT THIS WEBSITE</h2>
          <p className="text-gray-400 mt-1 text-center mb-10">Lihat pendapat orang lain tentang web kami</p>

          {/* --- PERUBAHAN: Update Swiper untuk autoplay konstan + bisa digeser --- */}
          <Swiper
            key={testimonials.length}
            modules={[Autoplay, Navigation]} // Tambahkan Navigation kembali
            loop={true}
            speed={8000} // Durasi animasi (8 detik)
            autoplay={{
              delay: 1, // Jeda 1ms (hampir 0)
              disableOnInteraction: false, // Lanjut walau di-swipe
              pauseOnMouseEnter: true, // Berhenti saat mouse di atas
            }}
            // allowTouchMove: true (ini default, jadi tidak perlu ditulis)
            navigation={false} // Sembunyikan panah (jika Anda tidak mau)
            spaceBetween={25}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.1 }
            }}
            className="pb-10 testimonial-swiper" // Tambah class 'testimonial-swiper'
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto"> 
                <TestimonialCard 
                  avatar={testimonial.avatar} 
                  name={testimonial.name} 
                  comment={testimonial.comment}
                  rating={testimonial.rating} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};


{/* === KOMPONEN MODAL (BUBBLE) BARU === */}
const InfoModal = ({ title, children, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose} 
    >
      <div 
        className="bg-[#1E1E1E] text-white w-full max-w-lg rounded-xl border border-gray-700 shadow-lg animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white text-3xl font-light"
            aria-label="Tutup modal"
          >
            &times; 
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};


{/* === KOMPONEN INFO SECTION (YANG SUDAH DIUPDATE) === */}
const InfoSection = () => {
  const [modalContent, setModalContent] = useState(null);
  
  const renderModalContent = () => {
    if (modalContent === 'info') {
      return (
        <InfoModal title="Informasi" onClose={() => setModalContent(null)}>
          <div className="prose prose-invert text-gray-300 space-y-4">
            <p>
              Cafe-in adalah platform digital yang didedikasikan untuk membantu Anda menemukan kafe-kafe terbaik di sekitar Anda. 
              Kami juga berkomitmen untuk mendukung Usaha Mikro, Kecil, dan Menengah (UMKM) di bidang F&B agar lebih dikenal.
            </p>
            <h3>Bagaimana cara kerja Cafe-in?</h3>
            <p>
              Anda dapat menjelajahi daftar kafe kami, memfilter berdasarkan kategori (indoor, outdoor, dll.), dan membaca ulasan dari pengguna lain. 
              Kami menyediakan informasi lengkap untuk membantu Anda membuat keputusan.
            </p>
            <h3>Apakah layanan ini gratis?</h3>
            <p>
              Ya, menggunakan Cafe-in untuk mencari dan menjelajahi kafe sepenuhnya gratis bagi pengguna.
            </p>
          </div>
        </InfoModal>
      );
    }

    if (modalContent === 'track') {
      return (
        <InfoModal title="Lacak Pesanan" onClose={() => setModalContent(null)}>
          <p className="text-gray-400 mb-6">
            Masukkan nomor pesanan Anda untuk melihat status pengiriman.
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-400 mb-2">
                Nomor Pesanan
              </label>
              <input
                type="text"
                id="orderId"
                placeholder="Contoh: CAFE-12345"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-0"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-white text-black py-3 px-6 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              Lacak
            </button>
          </form>
        </InfoModal>
      );
    }

    return null;
  };

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        
        {/* Kolom 1 & 2: Teks Cafe-in */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Cafe-in</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Temukan & Dapatkan Informasi terkini tentang kafe-kafe di sekitarmu, akan ada 
            banyak promo menarik dan tentunya bikin jadi lebih hemat serta biaya yang 
            murah Karena jarak anda
          </p>
          <p className="text-gray-400 leading-relaxed">
            Selain itu, kami ingin membantu usaha 
            mikro kecil dan menengah di sekitar kita 
            agar lebih di kenal banyak orang dan bisa 
            meningkatkan pengunjung dan luar daerah 
            juga
          </p>
        </div>

        {/* Kolom 3: Gambar Kopi */}
        <div className="flex justify-center md:col-span-1">
          <div className="relative w-fit">
            <img src={coffeInfo} alt="coffee-tumpehdikit.jpg" className="w-[200px] max-w-full" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-[150px] h-[15px] bg-white/20 blur-lg rounded-full"></div>
          </div>
        </div>

        {/* Kolom 4: Delivery (DENGAN TOMBOL MODAL) */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-4">Delivery</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={() => setModalContent('info')} className="hover:text-white transition-colors text-left w-full">
                Informasi
              </button>
            </li>
            <li>
              <button onClick={() => setModalContent('track')} className="hover:text-white transition-colors text-left w-full">
                Track Order
              </button>
            </li>
          </ul>
        </div>

        {/* Kolom 5: Menu (DENGAN LINK YANG DIHAPUS) */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Bantuan & Tanya</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
          </ul>
        </div>

      </div>

      {/* Render Modal di sini */}
      {renderModalContent()}
    </section>
  );
};
{/* === AKHIR DARI KOMPONEN INFO BARU === */}


export default ExplorePage;