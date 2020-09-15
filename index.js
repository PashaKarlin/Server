const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const URI = "mongodb+srv://PashaKarlin:12345@cluster0.dnvl2.mongodb.net/testdb?retryWrites=true&w=majority"


const server = express();
mongoose.connect(URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection.on("connected", () => {
  console.log("DataBase is connected")
});


server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", 'OPTIONS,GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,X-HTTP-Method-Override, Content-Type, Accept, Version, Authorization, X-XSRF-TOKEN, Content-Type");
  next();
});

server.use(bodyParser.json())
server.use("/api", require("./api"));
// server.use(bodyParser.urlencoded({ extended: false }))

server.listen(4000, () => {
  console.log(`Server started on port 4000`)
})

