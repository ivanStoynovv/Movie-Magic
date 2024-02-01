const mongoose = require('mongoose');
const {Schema} = mongoose;

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        min: 18,
        max: 89,
        require: true
    },
    born: {
        type: String,
        require: true
    },
    nameInMovie: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true,
        match: /^https?:\/\//
    },

});

const Cast = mongoose.model("Cast", castSchema)
module.exports = Cast;