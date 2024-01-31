const mongoose = require("mongoose");
const {Schema} = mongoose;

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true,
        min: 1920,
        max: 2030,
    },
    imageUrl: {
        type: String,
        require: true,
        match: /^https?/,
    },
    rating: {
        type: Number,
        require: true,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        require: true
    },
  });

  const Movie = mongoose.model("Movie", movieSchema);
  module.exports = Movie;