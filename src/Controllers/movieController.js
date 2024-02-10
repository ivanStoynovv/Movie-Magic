const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');
const { isAuth } = require("../middlewares/authMiddleware");

router.get('/create', isAuth, (req, res) => {
    res.render('create')
});

router.post('/create', isAuth, async (req, res) => {
    const movieData = {
        ...req.body,
        owner: req.user._id,
    }

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
    const isOwner = movie.owner && movie.owner == req.user?._id;

    movie.rating = new Array(Number(movie.rating)).fill(true);

    res.render('details', { movie, isOwner });
});

router.get("/movies/:movieId/attach", isAuth, async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();

    res.render("cast-attach", { movie, casts });
});

router.post("/movies/:movieId/attach", isAuth, async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    await movieService.attach(movieId, castId);

    res.redirect(`/details/${movieId}/attach`);
});

router.get("/movies/:movieId/edit", isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();

    res.render("edit", { movie })
});

router.post("/movies/:movieId/edit", isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movieData = req.body;

    await movieService.edit(movieId, movieData);

    res.redirect(`/details/${movieId}`);
});

router.get("/movies/:movieId/delete", isAuth, async (req, res) => {
    await movieService.delete(req.params.movieId);
    res.redirect("/");
})

module.exports = router;