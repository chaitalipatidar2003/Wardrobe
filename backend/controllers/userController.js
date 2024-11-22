const User = require('../models/User');

exports.addOrUpdateUser = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debugging incoming data

    const { name, email, picture } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (user) {
      user.name = name;
      user.picture = picture || user.picture; // Update only if new picture is provided
      await user.save();
      return res.status(200).json({ message: 'User updated successfully', user });
    }

    // Add a new user if not found
    user = new User({ name, email, picture });
    await user.save();
    res.status(201).json({ message: 'User added successfully', user });
  } catch (error) {
    console.error("Error in addOrUpdateUser:", error);
    res.status(500).json({ error: 'Failed to add or update user' });
  }
};
