const mongoose = require ('mongoose');

const JokesSchema = new mongoose.Schema ({
    type: String,
    punchline: String,
},
{timestamps: true}
);

const Jokes = mongoose.model ("Jokes",JokesSchema)

module.exports = Jokes;