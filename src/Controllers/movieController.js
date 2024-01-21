const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
    const movieData = req.body;

    movieService.create(movieData)

    res.redirect('/');
});

router.get("/details/:detailsId", (req, res) => {
    const movieId = req.params.detailsId;

    const movie = movieService.getOne(movieId);

    res.render('details', {movie})
});

module.exports = router;