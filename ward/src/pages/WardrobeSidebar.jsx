import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function WardrobeSidebar() {
  const navigate = useNavigate(); // Using useNavigate hook for navigation
  
  const wardrobeCategories = [
    { name: "Add Clothes", path: "add-clothes" },
    { name: "Remove Clothes", path: "remove-clothes" },
    { name: "Shift Clothes to Another Category", path: "swift-clothes" },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
        {/* Sidebar Header */}
        <h2 className="text-2xl font-bold text-center py-4 border-b border-indigo-700">
          Wardrobe Management
        </h2>

        <div className="flex flex-col items-center space-y-4 p-6">
          {wardrobeCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => navigate(`/wardrobesidebar/${category.path}`)} // Using navigate to go to the path
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition duration-300 w-full text-center"
            >
              {category.name} {/* Correcting this to render the category name */}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}

export default WardrobeSidebar;
