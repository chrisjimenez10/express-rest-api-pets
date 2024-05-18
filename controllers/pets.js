//Import
const express = require("express");
const router = express.Router();
const Pet = require("../models/pet.js");

//Routes
    // In routers, the designated starting poing to the URL path is prepended from whatever we assigned in the main server file - Here, it is implied that these router url paths start with "/pets" followed with whatever we type here 
router.post("/", async (req, res)=>{
    try{
        const createdPet = await Pet.create(req.body)
        res.status(201).json(createdPet); //The status() method sets the HTTP status code of the response (It is the status code that will display after a request completes its request-response cycle - Or, send an error status code if something went wrong)
    }catch(error){
        res.status(500).json({error:error.message}); // The json() method converts an object to a JSON string before sending the response, which results in sending a response in JSON format (JSON response)
    }

    // res.status(201).send("hi");
});

router.get("/", async (req, res)=>{
    try{
        const foundPets = await Pet.find()
        res.status(200).json(foundPets);

    }catch(error){
        res.status(500).json({error:error.message})
    }
});

router.get("/:petId", async (req, res)=>{
    try {
        const foundPet = await Pet.findById(req.params.petId);
        res.status(200).json(foundPet);
    }catch(error){
        res.status(500).json({error:error.message})
    }
});

router.delete("/:petId", async (req, res)=>{
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.petId);
        res.status(200).json(deletedPet);
    }catch(error){
        res.status(404).json({error:error.message})
    }
});

router.put("/:petId", async (req, res)=>{
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body, {new: true});
        res.status(200).json(updatedPet);
    }catch(error){
        res.status(404).json({error:error.message})
    }
});


module.exports = router;