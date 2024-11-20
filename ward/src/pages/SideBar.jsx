import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  // Categories list
  const categories = ["Home Wear", "Casual Wear", "Party Wear", "Traditional Wear"];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
      {/* Sidebar Header */}
      <h2 className="text-2xl font-bold text-center py-4 border-b border-indigo-700">
        Wardrobe Categories
      </h2>

      {/* Category List */}
      <div className="flex flex-col items-center space-y-4 p-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => navigate(`/${category.toLowerCase().replace(/\s+/g, "-")}`)}  
            className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition duration-300 w-full text-center"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
