import CafeCard from "../components/CafeCard";
import { FaArrowLeft, FaMugHot, FaTree, FaCoffee, FaUtensils, FaBreadSlice } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import cafes from "../data/cafes.json";

// Semua kategori beserta ikon
const allCategories = [
  { label: "Cafe Indoor", icon: <FaMugHot /> },
  { label: "Cafe Outdoor", icon: <FaTree /> },
  { label: "Chill Cafe", icon: <FaCoffee /> },
  { label: "Culinary", icon: <FaUtensils /> },
  { label: "Bakery", icon: <FaBreadSlice /> },
];

export default function MoreCafePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const passedCategory = state?.category || "";

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (passedCategory) {
      setSelectedCategory(passedCategory);
    }
  }, [passedCategory]);

  // Klik kategori → pilih atau unselect
  const handleCategoryClick = (cat) => {
    setSelectedCategory((prev) => (prev === cat ? "" : cat));
  };

  // Filter cafe
  const filteredCafes = cafes.filter((cafe) => {
    const nameMatch = cafe.name.toLowerCase().includes(searchText.toLowerCase());
    const categoryMatch =
      !selectedCategory || cafe.categories.includes(selectedCategory);
    return nameMatch && categoryMatch;
  });

  return (
    <div className="bg-white text-black min-h-screen px-6 md:px-14 pt-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-3 text-white bg-black px-6 py-3 rounded-xl text-lg font-bold shadow-lg hover:opacity-80 transition mb-6"
      >
        <FaArrowLeft size={20} /> Back
      </button>

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold mb-1">Explore Cafes</h1>
      <p className="text-gray-600 mb-6">Find the best cafe for your mood</p>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search cafe..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-xl mb-4 shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
      />

      {/* CATEGORY BUTTONS DENGAN ICON */}
      <div className="flex flex-wrap gap-3 mb-6">
        {allCategories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => handleCategoryClick(cat.label)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition ${
              selectedCategory === cat.label
                ? "bg-gray-400 text-white"
                : "bg-black text-white hover:bg-gray-700"
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tampilkan kategori yang dipilih */}
      {selectedCategory && (
        <p className="text-gray-700 mb-4">
          Selected Category: <span className="font-semibold">{selectedCategory}</span>
        </p>
      )}

      {/* LIST CAFE */}
      <div className="pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCafes.length > 0 ? (
          filteredCafes.map((cafe) => <CafeCard key={cafe.id} {...cafe} />)
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg mt-10">
            Café not found
          </p>
        )}
      </div>
    </div>
  );
}

//MoreCafePage.jsx
