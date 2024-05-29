const mongoose = require('mongoose'); // Import mongoose for MongoDB

// Define User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema); // Export User model


// {
//     "name":"Test User",
//     "email":"user@gmail.com",
//     "password":"user@1234"
// }


// https://localhost:5000/api/users/register/