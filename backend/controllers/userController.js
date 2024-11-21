const User = require('../models/User');

// Add or update user info
exports.addOrUpdateUser = async (req, res) => {
  try {
    const { name, email, picture } = req.body;

    // Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (user) {
      user.name = name;
      user.picture = picture;
      await user.save();
      return res.status(200).json({ message: 'User updated successfully', user });
    }

    // Add a new user if not found
    user = new User({ name, email, picture });
    await user.save();
    res.status(201).json({ message: 'User added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add or update user' });
  }
};
