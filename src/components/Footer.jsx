import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-transparent text-white px-10 py-4 flex justify-between items-center font-montagu">
      
      {/* Link Kebijakan */}
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:underline">Kebijakan Privasi</a>
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
  );
}

export default Footer;