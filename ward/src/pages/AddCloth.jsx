import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation

function AddCloth() {
  const [itemName, setItemName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate(); // Navigation hook

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!itemName || !image || !category) {
  //     setErrorMessage("Please fill in all fields!");
  //     return;
  //   }

  //   setErrorMessage("");

  //   // Save the data (for now, log to console)
  //   const clothingData = {
  //     itemName,
  //     image,
  //     category,
  //   };
  //   console.log("Saved Clothing Item:", clothingData);

  //   // Clear the form
  //   setItemName("");
  //   setImage(null);
  //   setCategory("");
  //   setImagePreview("");
  //   alert("Clothing item added successfully!");
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!itemName || !category) {
      setErrorMessage("Please fill in all fields!");
      return;
    }
  
    setErrorMessage("");
  
    const clothingData = {
      itemName,
      category,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/api/clothes/add", clothingData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        alert("Clothing item added successfully!");
        setItemName("");
        setCategory("");
        setImagePreview("");
        navigate("/cloth-category"); // Navigate to the home page
      }
    } catch (err) {
      console.error("Error adding clothing item on server:", err);
      setErrorMessage(err.response?.data?.error || "Failed to add on server.");
    }
  };
  
  
  
  return (
    
        <div className="flex flex-col  items-center p-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">
          Add Clothes to Your Wardrobe
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
        >
          {errorMessage && (
            <p className="text-red-500 text-center font-medium mb-4">
              {errorMessage}
            </p>
          )}
          <label className="block text-gray-700 font-medium mb-2">
          👗 Clothing Item Name:
          </label>
          <input
            type="text"
            placeholder="e.g., Red T-shirt"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />
          <label className="block text-gray-700 font-medium mb-2">
          📷Upload Image:
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />
          {imagePreview && (
            <div className="mb-4">
              <p className="text-gray-700 mb-2">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}
          <label className="block text-gray-700 font-medium mb-2">
          📶 Category:
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          >
            <option value="">Select a category</option>
            <option>Home Wear</option>
            <option>Casual Wear</option>
            <option>Party Wear</option>
            <option>Traditional Wear</option>
          </select>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 w-full"
          >
            Add to Wardrobe
          </button>
        </form>
      
    </div>
  );
}

export default AddCloth;
