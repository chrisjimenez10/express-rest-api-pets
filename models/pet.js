//Import
const mongoose = require("mongoose");

//Create Schema
const petSchema = mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});

//Create Model
const Pet = mongoose.model("Pet", petSchema);

//Export
module.exports = Pet;