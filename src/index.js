const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

const saveForm = require('./saveForm');

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/formSubmit', saveForm)

app.listen(port, () => {

  mongoose
  .connect(
    "mongodb+srv://rohit:1mongo2%40MONGO@cluster0.jndlghm.mongodb.net/formeasy?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

  console.log(`Example app listening on port ${port}`)
})