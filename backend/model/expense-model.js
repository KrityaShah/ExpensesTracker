const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: True,
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

module.exports = expenseSchema;