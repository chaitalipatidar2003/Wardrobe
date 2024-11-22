// CardGrid.js
import React, { useState, useEffect } from 'react';

const CardGrid = ({ category }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/clothes/add/${category}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch items.");
        }

        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchItems();
  }, [category]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (items.length === 0) {
    return <p className="text-gray-500 text-center">No items found in this category.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <img src={item.image || "/stand.png"} alt={item.itemName} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{item.itemName}</h2>
            <p className="text-gray-600 mt-2">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
