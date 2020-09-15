const mongoose = require('mongoose');

const FilmsSchema =new mongoose.Schema({
    title: String,
    releaseYear: Number,
    format: String,
    stars: Array
});

const Film = mongoose.model('film',FilmsSchema)

module.exports = Film;