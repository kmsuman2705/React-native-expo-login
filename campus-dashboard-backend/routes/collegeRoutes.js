const express = require('express');
const { registerCollege, loginCollege } = require('../controllers/collegeController'); // Import the controller functions

const router = express.Router();

// Register Route
router.post('/register', registerCollege);

// Login Route
router.post('/login', loginCollege);

module.exports = router;
