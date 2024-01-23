const router = require("express").Router();
const homeController = require('./Controllers/homeController');
const movieController = require('./Controllers/movieController');

router.use(homeController);
router.use(movieController);

router.get('*', (req, res) => {
    res.redirect("/404")
})
module.exports = router;