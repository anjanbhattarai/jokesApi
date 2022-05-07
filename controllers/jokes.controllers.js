const Jokes = require("../models/jokes.models");


const getAllJokes = (req,res)=> {
    Jokes.find()
    .then((allJokes) => {
        res.json(allJokes)
    })
    .catch ((err) =>{
        res.status(400).json({message: "something went wrong in allJokes", error: err});
    })
};

const getJokeByID = (req,res) => {
    Jokes.findOne({_id:req.params.id})
    .then((jokes)=>{
        res.json(jokes)
    })
    .catch((err)=>{
        res.status(400).json ({message: "something went wrong in jokesById ", error: err})
    })
};
const createNewJokes= (req,res)=>{
    Jokes.create(req.body)
        .then((newJokes) =>{
            res.status(201).json(newJokes);
        })
        .catch ((err) =>{
            res.status(400).json({message: "something went wrong in createNewJokes", error: err});
        });
};

const updateJokes= (req,res)=>{
    Jokes.findOneAndUpdate({_id:req.params.id},req.body,{new: true, runValidators: true})
        .then(jokes =>{
            res.json(jokes);
        })
        .catch ((err) =>{
            res.status(400).json({message: "something went wrong in updateOne", error: err});
        });
};

const deleteJokes= (req,res)=>{
    Jokes.deleteOne({_id:req.params.id})
    .then((jokes)=>{
        res.json(jokes)
    })
    .catch ((err)=>{
        res.status(400).json({message: "Something went wrong in deleteOne", error:err});
    })
}
module.exports = {getAllJokes, getJokeByID, createNewJokes, updateJokes, deleteJokes};
