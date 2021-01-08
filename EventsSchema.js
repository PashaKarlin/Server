const mongoose = require('mongoose');

const EventsSchema =new mongoose.Schema({
    name : String,
    type : String,
    logo : String,
    description : String,
    date : String,
    link : String,
    location : String
});

const Event = mongoose.model('event',EventsSchema)

module.exports = Event;