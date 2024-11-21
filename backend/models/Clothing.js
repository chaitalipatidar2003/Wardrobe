const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  
});

const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;
