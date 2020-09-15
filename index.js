const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const config = require('./config')
const connectDB = require('./Database/Connection')


connectDB()
server.use(bodyParser.urlencoded({ extended: false }))

server.use(express.json({ extended: false }))


server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", 'OPTIONS,GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,X-HTTP-Method-Override, Content-Type, Accept, Version, Authorization, X-XSRF-TOKEN, Content-Type");
  next();
});
server.use(bodyParser.json())
server.use('/api', require('./api/films'));
server.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`))

