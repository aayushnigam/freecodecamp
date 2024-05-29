const express = require('express'); // Import express module
const router = express.Router(); // Create an express router
const bcrypt = require('bcryptjs'); // Import bcryptjs for password hashing
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for JWT authentication
const User = require('../models/User'); // Import User model

// POST route for user registration
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body; // Extract name, email, and password from request body

    try {
        let user = await User.findOne({ email }); // Check if email already exists
        if (user) {
            return res.status(400).json({ msg: 'Email id already exists' }); // Return error if email exists
        }

        user = new User({ name, email, password }); // Create new user

        const salt = await bcrypt.genSalt(10); // Generate salt for hashing
        user.password = await bcrypt.hash(password, salt); // Hash the password

        await user.save(); // Save the user to the database

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'jwtSecret', { expiresIn: 360000 }, (err, token) => { // Sign a JWT token
            if (err) throw err;
            res.json({ token }); // Return token
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// POST route for user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body; // Extract email and password from request body

    try {
        let user = await User.findOne({ email }); // Find user by email
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' }); // Return error if user not found
        }

        const isMatch = await bcrypt.compare(password, user.password); // Compare passwords
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' }); // Return error if password does not match
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'jwtSecret', { expiresIn: 360000 }, (err, token) => { // Sign a JWT token
            if (err) throw err;
            res.json({ token }); // Return token
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router; // Export router
