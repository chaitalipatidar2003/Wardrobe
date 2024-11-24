import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get id from the URL
import { useNavigate } from 'react-router-dom'; // For navigation

const ClothDetails = () => {
  const { id } = useParams(); // Extract clothing item ID from the URL
  const [clothing, setClothing] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClothing = async () => {
      try {
        // Get email and category from localStorage
        const email = localStorage.getItem("user") 
        ? JSON.parse(localStorage.getItem("user")).email 
        : null;
        const category = localStorage.getItem("category"); // Assuming category is stored in localStorage

        if (!email || !category) {
          throw new Error("Missing email or category in localStorage.");
        }

        // Fetch clothing details
        const response = await fetch(`http://localhost:5000/api/clothes/add/${category}?email=${email}&id=${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch clothing details.");
        }

        const data = await response.json();
        setClothing(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchClothing();
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!clothing) {
    return <p className="text-gray-500 text-center">Loading clothing details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <button
        className="text-indigo-600 underline mb-4"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        &larr; Back to Wardrobe
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{clothing.itemName}</h1>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={clothing.image || "/stand.png"} // Replace with actual image URL or placeholder
          alt={clothing.itemName}
          className="w-64 h-64 object-cover rounded-md"
        />
        <div className="text-gray-700 space-y-4">
          <p>
            <span className="font-semibold">Category:</span> {clothing.category}
          </p>
          <p>
            <span className="font-semibold">Added by:</span> {clothing.userEmail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClothDetails;
