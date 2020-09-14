const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const config = require('./config')
const connectDB = require('./Database/Connection')


connectDB()
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(express.json({ extended: false }))
server.use('/api', require('./api/films'));

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Version, Authorization, Content-Type");
  next();
});

server.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`))

