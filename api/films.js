const express = require('express');
const Film = require('../Database/Film');
const route = express.Router();

// route.post('/',async(req,res) => {
//     const{title,releaseYear,format,stars} = req.body;
//     let film ={};
//     film.title = title;
//     film.releaseYear = releaseYear;
//     film.format = format;
//     film.stars = stars;
//     let filmModel = new Film(film)
//     await filmModel.save();
//     res.json(filmModel);
// });
route.post("/films", (req, res) => {
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
route.delete("/films/:id", (req, res) => {
    Film.deleteOne({ _id: req.params.id })
        .then(film => {
            res.send(film)
        });
});
module.exports = route;