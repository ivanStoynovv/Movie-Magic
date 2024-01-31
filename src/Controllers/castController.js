const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create-cast');
});

router.post('/create', (req, res) => {
    const cast = req.body;
    console.log(cast);

    res.redirect('/');
});

module.exports = router;