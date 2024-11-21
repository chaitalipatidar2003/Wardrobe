const Clothing = require('../models/Clothing');

// Add a new clothing item
exports.addClothing = async (req, res) => {
  try {
    const { itemName, category } = req.body; // No image field here
    const newClothing = new Clothing({ itemName, category });
    await newClothing.save();

    // Send success response with status 200
    res.status(200).json({ message: 'Clothing item added successfully' });
  } catch (error) {
    // Send error response with status 500 if something goes wrong
    console.error("Error adding clothing item:", error);
    res.status(500).json({ error: 'Failed to add clothing item' });
  }
};
