const express = require('express'); // Import express module
const router = express.Router(); // Create an express router
const Course = require('../models/Course'); // Import Course model

// GET route for fetching courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find(); // Fetch all courses from database
        res.json(courses); // Return courses
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router; // Export router
