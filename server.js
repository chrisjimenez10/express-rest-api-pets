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
app.use(express.json());
const petRouter = require("./controllers/pets.js");
app.use("/pets", petRouter);

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
