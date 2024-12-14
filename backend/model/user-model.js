const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Expense = require('./expense-model')

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
    isAdmin: {
        type : Boolean,
        default: false,
    },
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense',
    }],
});


userSchema.methods.generateToken = async function () {
    
    try {
         return jwt.sign({
             userId: this._id.toString(),
             email: this.email,
             isAdmin: this.isAdmin,
         },
         process.env.JWT_SECRET_KEY,
         {
             expiresIn: "30d",
         }
     );
 
    } catch (error) {
     console.error(error);
    }
 
 } 
 

const User = new mongoose.model("User", userSchema);

module.exports = User;