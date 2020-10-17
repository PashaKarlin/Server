const mongoose = require('mongoose');

const EventsSchema =new mongoose.Schema({
    title: String,
    releaseYear: Number,
    format: String,
    stars: Array
});

const Event = mongoose.model('event',EventsSchema)

module.exports = Event;