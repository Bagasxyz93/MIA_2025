import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaStar, FaPlus } from "react-icons/fa";
import cafes from "../data/cafes.json";

export default function CafeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cafe = cafes.find((c) => c.id == id);

  if (!cafe) {
    return (
      <p className="p-10 text-center text-white bg-black min-h-screen">
        Cafe not found.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative pb-40">

      {/* HEADER */}
      <div className="px-6 md:px-14 pt-24 flex gap-6 items-start">
        
        {/* SMALL CAFE IMAGE */}
        <img
          src={cafe.img}
          className="w-40 h-32 object-cover rounded-xl shadow-lg"
        />

        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:opacity-70 transition mb-3"
          >
            <FaArrowLeft /> Back
          </button>

          <h1 className="text-4xl font-extrabold">{cafe.name}</h1>
          <p className="text-gray-300 mt-1">{cafe.address}</p>
          <p className="text-gray-400 text-sm">{cafe.open}</p>
        </div>
      </div>

      {/* MENU TITLE */}
      <h2 className="px-6 md:px-14 mt-10 text-2xl font-bold">
        Pilihan Menu
      </h2>

      {/* MENU LIST */}
      <div className="px-6 md:px-14 mt-4 flex flex-col gap-5">
        {cafe.menuList.map((item, index) => (
          <div
            key={index}
            className="bg-[#282828] rounded-2xl p-4 flex gap-4 shadow-lg"
          >
            {/* MENU IMAGE */}
            <img
              src={item.img}
              className="w-20 h-20 object-cover rounded-xl"
            />

            {/* TEXT */}
            <div className="flex-1">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-300 text-sm mt-1">
                {item.description}
              </p>

              <div className="flex items-center gap-2 mt-2 text-yellow-400">
                <FaStar size={16} />
                <span className="text-white">{item.rating}</span>
              </div>
            </div>

            {/* ADD BUTTON */}
            <button className="min-w-10 min-h-10 bg-white text-black rounded-xl flex items-center justify-center text-xl font-bold hover:bg-gray-200 transition">
              <FaPlus />
            </button>
          </div>
        ))}
      </div>

      {/* SMALL MAP BOX FIXED AT BOTTOM RIGHT */}
      <div className="absolute bottom-6 right-6 w-72 h-48 rounded-2xl overflow-hidden shadow-xl border border-white/20">
        <iframe
          src={cafe.maps}
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>

      {/* BUTTONS */}
      <div className="px-6 md:px-14 mt-10 flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition">
          Beli Sekarang
        </button>
        <button className="border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition">
          Lihat Pesanan
        </button>
      </div>
    </div>
  );
}
