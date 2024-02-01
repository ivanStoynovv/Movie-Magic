const router = require('express').Router();
const castService = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('create-cast');
});

router.post('/create', async (req, res) => {
    const cast = req.body;
    
    await castService.create(cast);

    res.redirect('/');
});

module.exports = router;