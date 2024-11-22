const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes'); // Unified routes

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();


app.use(cors());
app.use(express.json());

// Use routes
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
