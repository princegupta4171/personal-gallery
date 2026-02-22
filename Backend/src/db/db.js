const mongoose = require('mongoose');



async function connectDB() {
    await mongoose.connect("process.env.MONGO_URI")
    console.log("database connected successfully");
    
}

module.exports = connectDB