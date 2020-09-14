const mongoose = require('mongoose')
const URI = "mongodb+srv://PashaKarlin:12345@cluster0.dnvl2.mongodb.net/Claster0?retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database connected')
}

module.exports = connectDB;
