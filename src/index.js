const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

require('dotenv').config()

const saveForm = require('./saveForm');

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => {
  res.send("Hello")
})

app.post('/formSubmit', saveForm)

app.listen(port, () => {

  mongoose
  .connect(
    process.env.MONGO_URI,
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

  console.log(`Example app listening on port ${port}`)
})