import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const CafeCard = ({ img, name, address, rating, id }) => {
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/cafe/${id}`)}
      className="
        bg-black text-white rounded-3xl p-5 cursor-pointer relative
        hover:-translate-y-3 hover:shadow-2xl transition-all duration-300
        w-full 
        h-[350px] sm:h-[420px] md:h-[450px]
        overflow-visible
      "
    >
      <img
        src={img}
        className="
          w-full 
          h-40 sm:h-48 md:h-52 
          object-cover rounded-2xl
        "
      />

      <h3 className="mt-4 text-lg sm:text-xl font-bold">{name}</h3>
      <p className="text-gray-400 text-sm mt-1">{address}</p>
      <p className="text-yellow-500/70 text-sm mt-1">{rating}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSaved(!saved);
        }}
        className="
          absolute bottom-4 right-4 p-3 rounded-full 
          bg-white text-black shadow-md text-xl
        "
      >
        {saved ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
};

export default CafeCard;
