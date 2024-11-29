const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const College = require('../models/college'); // Ensure this import path is correct

// Register College
const registerCollege = async (req, res) => {
    const { collegeName, email, contactNumber, password } = req.body;

    try {
        // Check if college already exists
        const existingCollege = await College.findOne({ email }); // Should work if 'College' is imported correctly
        if (existingCollege) {
            return res.status(400).json({ message: 'College already exists' });
        }

        // Hash password with argon2
        const hashedPassword = await argon2.hash(password);

        // Create new college
        const newCollege = new College({
            collegeName,
            email,
            contactNumber,
            password: hashedPassword,
        });

        // Save college to the database
        await newCollege.save();

        // Generate JWT token
        const token = jwt.sign({ collegeId: newCollege._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'College registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Login College
const loginCollege = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if college exists
        const college = await College.findOne({ email });
        if (!college) {
            return res.status(400).json({ message: 'College not found' });
        }

        // Verify password with argon2
        const isMatch = await argon2.verify(college.password, password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ collegeId: college._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { registerCollege, loginCollege };
