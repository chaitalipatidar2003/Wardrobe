import React, { useState } from "react"; // Add useState

import RemoveCloth from "../RemoveCloth";
import SwiftCloth from "../SwiftCloth";
import AddCloth from "./AddCloth";

function OptionsPage() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Correct usage of useState

  const wardrobeCategories = [
    "Add Clothes",
    "Remove Clothes",
    "Shift Clothes to Another Category",
  ];

  // Render content dynamically based on the selected category
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "Add Clothes":
        return <AddCloth />;
      case "Remove Clothes":
        return <RemoveCloth />;
      case "Shift Clothes to Another Category":
        return <SwiftCloth />;
      default:
        return (
          <div className="text-center">
            <p className="text-xl text-black font-medium">
              Please select an option to manage your wardrobe.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold text-center py-4 border-b border-indigo-700">
        wardrobe Categories
      </h2>
      <ul className="flex-1">
        {wardrobeCategories.length > 0 ? (
          wardrobeCategories.map((category) => (
            <li
              key={category}
              className={`py-3 px-4 cursor-pointer hover:bg-indigo-500 ${
                selectedCategory === category ? "bg-indigo-500" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))
        ) : (
          <li className="text-center py-6 text-gray-200 italic">
            No wardrobeCategories available.
          </li>
        )}
      </ul>
    </aside>

    {/* Main Content */}
    <main className="flex-1 flex flex-col  items-center mt-2 p-6">
      {renderCategoryContent()}
    </main>
  </div>
  );
}

export default OptionsPage;
