const express = require('express');
const { addClothing, getClothesByCategory } = require('./controllers/clothingController');
const { addOrUpdateUser } = require('./controllers/userController');
const { authenticate } = require('./middleware/authenticate'); // Import authenticate middleware

const router = express.Router();



router.post('/clothes/add', addClothing); // No authentication needed here
router.get('/clothes/add/:category', getClothesByCategory); // Fetch clothes by category

router.post('/users/adduser', addOrUpdateUser);


module.exports = router;
