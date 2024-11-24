// // clothingController.js
// const Clothing = require('../models/Clothing');

// // Add clothing item without user association
// exports.addClothing = async (req, res) => {
//   try {
//     const { itemName, category } = req.body;

//     if (!itemName || !category) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newClothing = new Clothing({ itemName, category });
//     await newClothing.save();

//     res.status(200).json({ message: "Clothing item added successfully" });
//   } catch (error) {
//     console.error("Error adding clothing item:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// // Get clothes by category for a specific user
// exports.getClothesByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;

//     if (!category) {
//       return res.status(400).json({ error: "Category is required" });
//     }

//     const clothes = await Clothing.find({ category });
//     res.status(200).json(clothes);
//   } catch (error) {
//     console.error("Error fetching clothes by category:", error);
//     res.status(500).json({ error: "Failed to fetch clothes." });
//   }
// };


// clothingController.js

const Clothing = require('../models/Clothing');

exports.addClothing = async (req, res) => {
  try {
    const { itemName, category, email } = req.body; // Extract email from request body

    if (!itemName || !category || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newClothing = new Clothing({
      itemName,
      category,
      userEmail: email, // Save the user's email to the clothing record
    });

    await newClothing.save();
    res.status(200).json({ message: "Clothing item added successfully" });
  } catch (error) {
    console.error("Error adding clothing item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get clothes by category for a specific user
exports.getClothesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { email } = req.query;

    if (!category || !email) {
      return res.status(400).json({ error: "Category and email are required" });
    }

    const clothes = await Clothing.find({ category, userEmail: email }); // Filter by email
    res.status(200).json(clothes);
  } catch (error) {
    console.error("Error fetching clothes by category:", error);
    res.status(500).json({ error: "Failed to fetch clothes." });
  }
};