const express = require("express");
const route = express.Router();
const Film = require('./FilmsSchema');

route.post("/films", (req, res) => {
    console.log(req.body)
    Film.create(req.body)
        .then(film => {
            res.send(film)
        });
});

route.get('/films',(req,res) => {
    Film.find({})
        .then(film => {
            res.send(film)
        })
});
route.get('/films/:id', (req,res)=>{
    Film.findById({_id : req.params.id}, req.body)
    .then((film)=>{
        res.send(film);
    })
})
route.delete("/films/:id", (req, res) => {
    Film.deleteOne({ _id: req.params.id })
        .then(film => {
            res.send(film)
        });
});
module.exports = route;