const Movie = require('../models/movie');

exports.getAll = () => {
  return Movie.find();
}

exports.create = (movieData) => {
  return Movie.create(movieData);
}

exports.getOne = (movieId) => {
  return Movie.findById(movieId);
};

exports.findMovies = async (title, genre, year) => {
  let movies = await Movie.find().lean();
  if (title) {
    movies = movies.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }
  if (genre) {
    movies = movies.filter(movie => movie.genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase()));
  }
  if (year) {
    movies = movies.filter(movie => movie.year == year);
  }
  return movies;
};