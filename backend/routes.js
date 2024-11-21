const express = require('express');
const { addClothing } = require('./controllers/clothingController');
const { addOrUpdateUser } = require('./controllers/userController');

const router = express.Router();

// Routes
router.post('/clothes/add', addClothing);
router.post('/users/adduser', addOrUpdateUser);

module.exports = router;
