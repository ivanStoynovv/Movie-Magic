const Movie = require('../models/movie');

// const movies = [{
//   _id: 1,
//   title: 'Jungle Cruise',
//   genre: 'Adventure',
//   director: 'Dwayne',
//   year: '2020',
//   imageUrl: '/img/jungle-cruise.jpeg',
//   rating: '5',
//   description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.'
// }];

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