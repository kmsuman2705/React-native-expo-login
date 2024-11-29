const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const collegeRoutes = require('./routes/collegeRoutes'); // Import college routes

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
    origin: 'http://localhost:8082',  // Allow requests only from this origin (your frontend)
    methods: 'GET,POST,PUT,DELETE',  // Allow specific HTTP methods
    allowedHeaders: 'Content-Type, Authorization'  // Allow specific headers
}));


// Middleware to parse JSON request bodies
app.use(express.json());

// Use the college routes
app.use('/api/college', collegeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.log('MongoDB connection error: ', err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
