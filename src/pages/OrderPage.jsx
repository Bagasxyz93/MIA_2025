import { useLocation, useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orders: initialOrders, cafeName } = location.state || { orders: {}, cafeName: "" };

  const [orders, setOrders] = useState(initialOrders);
  const [checkoutDone, setCheckoutDone] = useState(false);

  // Hapus menu dari pesanan
  const removeItem = (itemName) => {
    const newOrders = { ...orders };
    delete newOrders[itemName];
    setOrders(newOrders);
  };

  // Jika tidak ada pesanan dan checkout belum dilakukan
  if ((!orders || Object.keys(orders).length === 0) && !checkoutDone) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Pesanan Kosong</h1>
        <p className="text-gray-400 mb-6">Belum ada menu yang ditambahkan.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
        >
          Kembali
        </button>
      </div>
    );
  }

  // Jika checkout selesai
  if (checkoutDone) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Pesanan selesai di checkout!</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-14 pt-6 pb-20">
      {/* TOMBOL KEMBALI */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white bg-gray-700 px-4 py-2 rounded-xl font-bold hover:bg-gray-600 transition mb-4"
      >
        <FaArrowLeft /> Kembali
      </button>

      {/* JUDUL */}
      <h1 className="text-3xl font-bold mb-4">{cafeName} - Pesanan Anda</h1>

      {/* LIST PESANAN */}
      <div className="flex flex-col gap-4">
        {Object.entries(orders).map(([itemName, amount]) => (
          <div
            key={itemName}
            className="flex justify-between items-center bg-[#282828] rounded-xl p-4 shadow-md"
          >
            <span className="text-white font-semibold">{itemName}</span>
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-semibold">{amount}</span>
              <button
                onClick={() => removeItem(itemName)}
                className="text-red-500 hover:text-red-400 transition"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CHECKOUT BUTTON */}
      <div className="mt-10">
        <button
          onClick={() => setCheckoutDone(true)}
          className="w-full bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

//OrderPage.jsx

