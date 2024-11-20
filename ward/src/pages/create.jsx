import React from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      
      {/* Main Content */}
      <div
        className="flex-1 relative bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/wardrobe.jpg')`, // Replace with your image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center p-8 bg-white bg-opacity-80 rounded-xl shadow-lg max-w-lg">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to Your Wardrobe</h1>
          <p className="text-gray-700 mb-6">
            Create and organize your wardrobe effortlessly. Click below to start!
          </p>
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            onClick={() => navigate('/wardrobesidebar')}
          >
            Create Wardrobe
          </button>
          <div >
          <button
          onClick={() => navigate("/cloth-category")}
          className="bg-purple-600 mt-2 text-white px-6 py-3 px-9 py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
        >
          View Wardrobe
        </button>
          </div>
          
        </div>
       
      </div>

   
     
        
      
    </div>
  );
}

export default Create;
