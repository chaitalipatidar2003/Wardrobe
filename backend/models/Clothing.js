// Clothing model - clothingSchema.js
const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  
});

module.exports = mongoose.model('Clothing', clothingSchema);
