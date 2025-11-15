import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CafeCard from "../components/CafeCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

export default function MoreCafePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      {/* HEADER */}
      <div className="px-6 md:px-14 pt-24">
        <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-black mb-6 hover:opacity-70 transition"
        >
            <FaArrowLeft size={18} />
            Back
        </button>

        <h1 className="text-3xl font-extrabold">MORE CAFES</h1>
        <p className="text-gray-600 mt-1">Discover the best cafes around you</p>
        </div>


      {/* GRID LIST */}
      <div className="px-6 md:px-14 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CafeCard
            img={kopiJaya}
            name="Kopi Jaya"
            address = "Jl. Pajajaran No.25D, Klojen, Kec. Klojen, Kota Malang"
            rating="★★★★★"
            id={1}                    
        />

        <CafeCard
            img={kopiStudio}
            address = "Jl. Laksda Adi Sucipto No.193, Blimbing, Kec. Blimbing, Kota Malang"
            name="Kopi Studio"
            rating="★★★★☆"
            id={2}
        />

        <CafeCard
            img={kopiKenangan}
            address = "Jl. Jakarta No.26, Penanggungan, Kec. Klojen, Kota Malang"
            name="JoKopi"
            rating="★★★★★"
            id={3}
        />

        <CafeCard
            img={lysBakery}
            name="de Lys Patisserie"
            address="Jl. Kawi Atas No.21, Klojen, Kota Malang"
            rating="★★★★☆"
            id={4}
        />

        <CafeCard
            img={AADKcoffee}
            address = " Jalan Raya, Ngelo, Tlogomas, Kec. Lowokwaru, Kota Malang"
            name="AADK Eat & Coffee"
            rating="★★★★★"
            id={5}
        />

        <CafeCard
            img={ArayaArcadeCafe}
            name="Araya Arcade Garden"
            address="Mansion hill, Genitri, Tirtomoyo, Pakis, Kabupaten Malang"
            rating="★★★★☆"
            id={6}
        />

        <CafeCard
            img={arbanatCafe}
            name="The Arbanat Kitchen Cafe Lounge"
            address="Jl. Terusan Dieng No.4-6, Pisang Candi, Kec. Sukun, Kota Malang"
            rating="★★★★★"
            id={7}
        />

        <CafeCard
            img={CRcafe}
            name="Critasena Cafe"
            address="Jl. Kahuripan No.1, Klojen, Kec. Klojen, Kota Malang"
            rating="★★★★★"
            id={8}
        />

        <CafeCard
            img={nakoaCafe}
            name="Nakoa Cafe (Bondowoso)"
            address="Jl. Bondowoso No.14, Gading Kasri, Kec. Klojen, Kota Malang"
            rating="★★★★☆"
            id={9}
        />


        {/* Kamu bisa tambah cafe lainnya di sini */}
      </div>

      <Footer />
    </div>
  );
}
