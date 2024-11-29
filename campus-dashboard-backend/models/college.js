const mongoose = require('mongoose');

// Define the schema for the college
const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the College model from the schema
const College = mongoose.model('College', collegeSchema);

// Export the model
module.exports = College;
