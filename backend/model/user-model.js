const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    createdDate: {
        type: Date,
        default: Date.now, 
    },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;