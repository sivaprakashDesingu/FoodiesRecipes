// app.js

var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
var product = require('./routes/product'); // Imports routes for the products
var InitialInput = require('./routes/InitialInput')
var app = express();

const dbConfig = require('./database.js');

// Set up mongoose connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
  }).then((data) => {
    // console.log(data);
    console.log("Successfully connected to the database:" + dbConfig.db);
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/initial-data',InitialInput)
var port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
