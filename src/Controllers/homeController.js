const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/', async (req, res) => {
    const movies = await movieService.getAll().lean();
    res.render("home", {movies});
});

router.get('/about', (req, res) => {
    res.render("about");
});

router.get('/404', (req, res) => {
    res.render('404');
});

router.get("/search", async (req, res) => {
    let movies = await movieService.getAll();

    const { title, genre, year } = req.query;
    movies = await movieService.findMovies(title, genre, year);

    res.render("search", { movies });
});

module.exports = router;