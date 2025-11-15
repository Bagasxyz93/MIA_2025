import CafeCard from "../components/CafeCard";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import cafes from "../data/cafes.json";

// Semua kategori
const allCategories = [
  "Cafe Indoor",
  "Cafe Outdoor",
  "Chill Cafe",
  "Culinary",
  "Bakery"
];

export default function MoreCafePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const passedCategory = state?.category || "";

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (passedCategory) {
      setSelectedCategory(passedCategory);
    }
  }, [passedCategory]);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

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

      {/* DROPDOWN KATEGORI */}
      <div className="relative mb-6">
        <button
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center p-4 border border-gray-300 rounded-xl shadow-sm bg-white hover:bg-gray-100 transition"
        >
          {selectedCategory || "Select Category"}
          <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
            <button
              onClick={() => { setSelectedCategory(""); setDropdownOpen(false); }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            >
              All Categories
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setDropdownOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Tampilkan kategori yang dipilih */}
        {selectedCategory && (
          <p className="text-gray-700 mt-2">
            Selected Category: <span className="font-semibold">{selectedCategory}</span>
          </p>
        )}
      </div>

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
