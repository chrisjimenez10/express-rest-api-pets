//Import
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const morgan = require("morgan");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(morgan("dev"));

  // "express.json()" is a built-in middleware function in Express that parses INCOMING JSON payload data, populating the req.body object, which results in a JavaScript object - When requests like POST are made to the server with a Header that as Content-Type: application/json (meaning the data being sent in the body is in JSON format), using this middle-ware will help to parse it and use the data 
app.use(express.json());

const petRouter = require("./controllers/pets.js");
app.use("/pets", petRouter);

// Routes go here

//Server
app.listen(process.env.PORT ? process.env.PORT : 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
