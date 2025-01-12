require('dotenv').config();
const mongoose = require('mongoose')
mongoose.set('strictQuery',false);


const connectDB = async () => {
    return mongoose.connect(process.env.MONGO_URI)
}

module.exports = connectDB