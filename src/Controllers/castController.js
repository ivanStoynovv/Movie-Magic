const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const castService = require('../services/castService');


router.get('/create', isAuth, (req, res) => {
    res.render('create-cast');
});

router.post('/create', isAuth, async (req, res) => {
    const cast = req.body;
    
    await castService.create(cast);

    res.redirect('/');
});

module.exports = router;