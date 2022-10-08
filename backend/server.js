require("dotenv").config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

//middleware
// this method is to parse the incoming requests with json payloads
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect('mongodb://dipanshu:abcxyz@ac-uptyn9m-shard-00-00.vajmyjm.mongodb.net:27017,ac-uptyn9m-shard-00-01.vajmyjm.mongodb.net:27017,ac-uptyn9m-shard-00-02.vajmyjm.mongodb.net:27017/?ssl=true&replicaSet=atlas-dsqcln-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        " Successfully connected to database and Listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
