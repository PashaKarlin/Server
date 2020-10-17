const express = require("express");
const route = express.Router();
const Event = require('./EventsSchema');

route.post("/events", (req, res) => {
    console.log(req.body)
    Event.create(req.body)
        .then(film => {
            res.send(film)
        });
});

route.get('/events',(req,res) => {
    Event.find({})
        .then(film => {
            res.send(film)
        })
});
route.get('/events/:id', (req,res)=>{
    Event.findById({_id : req.params.id}, req.body)
    .then((film)=>{
        res.send(film);
    })
})
route.delete("/events/:id", (req, res) => {
    Event.deleteOne({ _id: req.params.id })
        .then(film => {
            res.send(film)
        });
});
module.exports = route;