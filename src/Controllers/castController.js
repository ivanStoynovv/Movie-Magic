const router = require('express').Router();

router.get('/cast/create', (req, res) => {
    res.render('create-cast');
});

module.exports = router;