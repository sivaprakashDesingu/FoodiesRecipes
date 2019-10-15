const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");

//Middle ware for Auth token
const middleWare = require('./middleware');

/* import router pages */
const user = require('./routes/user');
const InitialInput = require('./routes/InitialInput')

/* import router pages */
const dbConfig = require('./database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Set up mongoose connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
  }).then((data) => {
    console.log("Successfully connected to the database:" + dbConfig.db);
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

/* Create Router URL for app */
middleWare(app)
app.use('/api/user', user);
app.use('/api/initial-data',InitialInput)
/* Create Router URL for app */



var port = 8000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
