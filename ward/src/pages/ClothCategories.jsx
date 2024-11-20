import React, { useState } from "react";
import HomeWearPage from "./category-pages/HomeWearPage"; // Import for Home Wear Page
import CasualWearPage from "./category-pages/CasualWearPage"; // Import for Casual Wear Page
import PartyWearPage from "./category-pages/PartyWearPage"; // Import for Party Wear Page
import TraditionalWearPage from "./category-pages/TraditionalWearPage"; // Import for Traditional Wear Page

function ClothesCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Home Wear", "Casual Wear", "Party Wear", "Traditional Wear"]; // Example categories

  // Render content dynamically based on selected category
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "Home Wear":
        return <HomeWearPage />;
      case "Casual Wear":
        return <CasualWearPage />;
      case "Party Wear":
        return <PartyWearPage />;
      case "Traditional Wear":
        return <TraditionalWearPage />;
      default:
        return (
          <div className="text-center">
            <p className="text-xl text-gray-600 font-medium">
              Please select a category to view details.
            </p>
            <img
              src="/stand.png" // Correct path for images in the `public` folder
              alt="Category Placeholder"
              className="mt-4 mx-auto w-100 h-120 rounded-lg shadow-md"
            />
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <h2 className="text-2xl font-bold text-center py-4 border-b border-indigo-700">
          Categories
        </h2>
        <ul className="flex-1">
          {categories.length > 0 ? (
            categories.map((category) => (
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
              No categories available.
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

export default ClothesCategoriesPage;
