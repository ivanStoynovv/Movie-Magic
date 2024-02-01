const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', async (req, res) => {
    const movieData = req.body;
    try {
        await movieService.create(movieData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/create');
    }
});

router.get("/details/:detailsId", async (req, res) => {
    const movieId = req.params.detailsId;

    const movie = await movieService.getOne(movieId).lean();

    movie.rating = new Array(Number(movie.rating)).fill(true);

    res.render('details2', { movie })
});

router.get("/movies/:movieId/attach", async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();

    res.render("cast-attach", { movie, casts });
});

router.post("/movies/:movieId/attach", async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    console.log(req.body);

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/attach`);
});

module.exports = router;