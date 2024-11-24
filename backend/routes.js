const express = require('express');
const { addClothing, getClothesByCategory } = require('./controllers/clothingController');
const { addOrUpdateUser } = require('./controllers/userController');
const { authenticate } = require('./middleware/authenticate'); // Import authenticate middleware

const router = express.Router();



router.post('/clothes/add', addClothing); // No authentication needed here
router.get('/clothes/add/:category', getClothesByCategory); // Fetch clothes by category

router.post('/users/adduser', addOrUpdateUser);

router.get('/clothes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const clothing = await Clothing.findById(id);
  
      if (!clothing) {
        return res.status(404).json({ error: "Clothing item not found" });
      }
  
      res.status(200).json(clothing);
    } catch (error) {
      console.error("Error fetching clothing item:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

module.exports = router;
