// src/pages/CafeDetailPage.jsx

import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import cafes from "../data/cafes.json";

export default function CafeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cafe = cafes.find((c) => c.id == id);

  // State untuk menyimpan pesanan {menuName: amount}
  const [orders, setOrders] = useState({});

  if (!cafe) {
    return (
      <p className="p-10 text-center text-white bg-black min-h-screen">
        Cafe not found.
      </p>
    );
  }

  // Tambah pesanan
  const addOrder = (itemName) => {
    setOrders((prev) => ({
      ...prev,
      [itemName]: prev[itemName] ? prev[itemName] + 1 : 1,
    }));
  };

  // Kurangi pesanan
  const removeOrder = (itemName) => {
    setOrders((prev) => {
      if (!prev[itemName]) return prev;
      const newAmount = prev[itemName] - 1;
      const newOrders = { ...prev };
      if (newAmount <= 0) {
        delete newOrders[itemName];
      } else {
        newOrders[itemName] = newAmount;
      }
      return newOrders;
    });
  };

  // Ambil jumlah pesanan
  const getAmount = (itemName) => orders[itemName] || 0;

  return (
    // --- PERUBAHAN 1: Buat padding-bottom responsif ---
    // (pb-20 di mobile, pb-40 di desktop)
    <div className="min-h-screen bg-black text-white relative pb-20 md:pb-40">

      {/* HEADER */}
      <div className="px-6 md:px-14 pt-24 flex gap-6 items-start">
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
      <h2 className="px-6 md:px-14 mt-10 text-2xl font-bold">Menu Options</h2>

      {/* MENU LIST */}
      <div className="px-6 md:px-14 mt-4 flex flex-col gap-5">
        {cafe.menuList.map((item, index) => (
          <div
            key={index}
            className="bg-[#282828] rounded-2xl p-4 flex gap-4 shadow-lg"
          >
            <img
              src={item.img}
              className="w-20 h-20 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{item.description}</p>

              <div className="flex items-center gap-2 mt-2 text-yellow-400">
                <FaStar size={16} />
                <span className="text-white">{item.rating}</span>
              </div>
            </div>

            {/* ADD & MINUS BUTTON + AMOUNT */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                {/* Tampilkan tombol minus hanya jika amount > 0 */}
                {getAmount(item.name) > 0 && (
                  <button
                    className="min-w-10 min-h-10 bg-gray-400 text-black rounded-xl flex items-center justify-center text-xl font-bold hover:bg-gray-500 transition"
                    onClick={() => removeOrder(item.name)}
                  >
                    <FaMinus />
                  </button>
                )}

                {/* Jumlah */}
                {getAmount(item.name) > 0 && (
                  <span className="text-white font-semibold">{getAmount(item.name)}</span>
                )}

                {/* Tombol plus */}
                <button
                  className="min-w-10 min-h-10 bg-white text-black rounded-xl flex items-center justify-center text-xl font-bold hover:bg-gray-200 transition"
                  onClick={() => addOrder(item.name)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- PERUBAHAN 2: MAP DIPINDAH KE BAWAH TOMBOL --- */}
      {/* (Tombol-tombol sekarang ada di atas peta) */}
      
      {/* BUTTONS */}
      <div className="px-6 md:px-14 mt-10 flex gap-4">
        <button
          onClick={() => window.open(cafe.maps, "_blank")}
          className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
        >
          Buy Now
        </button>

        <button
          onClick={() => navigate("/orders", { state: { orders, cafeName: cafe.name } })}
          className="border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition"
        >
          View Orders
        </button>
      </div>

      {/* --- PERUBAHAN 3: KELAS PETA DIBUAT RESPONSIF --- */}
      {/* Mobile (default): w-full, h-64 (block biasa)
        Desktop (md:): absolute, w-72, h-48 (mengambang)
      */}
      <div className="
        px-6 mt-10 w-full h-64 
        md:absolute md:bottom-6 md:right-6 md:w-72 md:h-48 md:px-0 md:mt-0
        rounded-2xl overflow-hidden shadow-xl border border-white/20
      ">
        <iframe
          src={cafe.maps}
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>

    </div>
  );
}