const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//mongodb+srv://admin:Admin123@cluster0-mvq6r.mongodb.net/cookingrecipe?retryWrites=true&w=majority
const productRoutes = require("./api/routes/products");
//const initialData = require("./api/models/userInitialState");

const dbConfig = require('./database.js');

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then((data) => {
  // console.log(data);
  console.log("Successfully connected to the database:" + dbConfig.db);


  const userInitialState = mongoose.Schema({
    cookingSkill:String,
    isVegeterian:Boolean,
  });
  // Load initial data in to mongoDB
  var InitalData = mongoose.model('InitalData', userInitialState, 'InitalData');

  
  let loadData = new InitalData({
    'cookingSkill': 'Beginner',
    'isVegeterian': false
  })


  loadData.save(function(err,res){
      if(err){
        return console.log("unable to insert")
      }
      console.log(res + " saved to InitalData collection.");
  })
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});



app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/products", productRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
