// src/components/Footer.jsx

import { useState } from 'react'; // Impor useState untuk mengontrol modal
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// === KOMPONEN MODAL "BUBBLE" KHUSUS UNTUK PRIVASI ===
// (Didefinisikan di dalam file ini agar rapi)
const PrivacyModal = ({ onClose }) => {
  return (
    // Overlay gelap
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Klik di luar bubble untuk menutup
    >
      {/* Bubble Konten */}
      <div 
        className="bg-[#1E1E1E] text-white w-full max-w-lg rounded-xl border border-gray-700 shadow-lg animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Mencegah bubble tertutup saat diklik di dalam
      >
        {/* Header Modal */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Kebijakan Privasi</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white text-3xl font-light"
            aria-label="Tutup modal"
          >
            &times; {/* Tombol 'X' untuk menutup */}
          </button>
        </div>

        {/* Konten Modal (Isi Kebijakan Privasi) */}
        <div className="p-6 max-h-[70vh] overflow-y-auto prose prose-invert text-gray-300 space-y-4">
          <p>
            Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.
          </p>
          
          <h3>Informasi yang Kami Kumpulkan</h3>
          <p>
            Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat Anda mendaftar, mengirim komentar, atau menggunakan fitur tertentu di situs kami, seperti nama dan alamat email.
          </p>
          
          <h3>Bagaimana Kami Menggunakan Informasi Anda</h3>
          <p>
            Informasi yang kami kumpulkan digunakan untuk:
          </p>
          <ul>
            <li>Menyediakan dan memelihara Layanan kami.</li>
            <li>Memproses komentar Anda dan menampilkan nama Anda.</li>
            <li>Menganalisis penggunaan situs untuk meningkatkan layanan kami.</li>
          </ul>

          <h3>Keamanan Data</h3>
          <p>
            Keamanan data Anda penting bagi kami, tetapi ingat bahwa tidak ada metode transmisi melalui Internet, atau metode penyimpanan elektronik yang 100% aman.
          </p>
          
          <h3>Perubahan pada Kebijakan Privasi Ini</h3>
          <p>
            Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini.
          </p>
        </div>
      </div>
    </div>
  );
};


// === KOMPONEN FOOTER UTAMA ===
function Footer() {
  // State untuk mengontrol modal
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    // Gunakan React Fragment (<>) agar modal bisa dirender di luar tag <footer>
    <>
      <footer className="bg-transparent text-white px-10 py-4 flex justify-between items-center font-montagu">
        
        {/* Link Kebijakan (diubah menjadi button) */}
        <div className="flex gap-6 text-sm">
          <button 
            onClick={() => setShowPrivacyModal(true)} 
            className="hover:underline"
          >
            Kebijakan Privasi
          </button>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex gap-5 items-center">
          <a href="#" aria-label="Facebook" className="text-2xl hover:text-white transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="text-2xl hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Whatsapp" className="text-2xl hover:text-white transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </footer>

      {/* Render Modal jika state-nya true */}
      {showPrivacyModal && <PrivacyModal onClose={() => setShowPrivacyModal(false)} />}
    </>
  );
}

export default Footer;