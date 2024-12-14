const mongoose = require('mongoose')
const User = require('./user-model')

const expenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    amount : {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Expense = new mongoose.model("Expense", expenseSchema);

module.exports = Expense;