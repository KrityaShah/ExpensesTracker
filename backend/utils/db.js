const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/expensesTracker"


const connectDb = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Sucessfully connected to DB");
        
    } catch (error) {
        console.error("Database Connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;