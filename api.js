const express = require("express");
const route = express.Router();
const Film = require('./FilmsSchema');

route.post("/films", (req, res) => {
    console.log(req.body)
    Film.create(req.body)
        .then(event => {
            res.send(event)
        });
});

route.get('/films',(req,res) => {
    Film.find({})
        .then(event => {
            res.send(event)
        })
});
route.get('/films/:id', (req,res)=>{
    Film.findById({_id : req.params.id}, req.body)
    .then((event)=>{
        res.send(event);
    })
})
route.delete("/films/:id", (req, res) => {
    Film.deleteOne({ _id: req.params.id })
        .then(event => {
            res.send(event)
        });
});
module.exports = route;