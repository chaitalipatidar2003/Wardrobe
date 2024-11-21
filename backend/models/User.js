const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  picture: { type: String }, // Profile picture URL
});

module.exports = mongoose.model('User', userSchema);
