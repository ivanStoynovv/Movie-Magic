const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
    const movieData = req.body;

    movieService.create(movieData)

    res.send('Movie should be created')
});

module.exports = router;