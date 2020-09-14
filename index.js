const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const config = require('./config')
const connectDB = require('./Database/Connection')


connectDB()
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(express.json({ extended: false }))
server.use('/API/filmModel', require('./API/Film'));

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`))





// server.get('/', (req, res) => {
//   res.send('Hello API')
// })

// server.get('/films', (req, res) => {
//   res.send(films)
// })
// server.get('/films/:id', (req, res) => {
//   // console.log(req.params)
//   let film = films.find((film) => {
//     return film.id === req.params.id
//   })
//   res.send(film)
// })

// server.post('/films', (req, res) => {
//   film = {
//     id: Date(),
//     Title: req.body.Title,
//   }
//   films.push(film)
//   console.log(req.params)
//   res.sendStatus('200')
// })

// server.delete('/films/:title', (req, res) => {
//   films = films.filter((film) => {
//     return film.id !== (req.params.id);
//   })
//   res.sendStatus(200)
// })


