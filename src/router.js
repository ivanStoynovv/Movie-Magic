const router = require("express").Router();
const homeController = require('./Controllers/homeController');
const movieController = require('./Controllers/movieController');
const searchController = require('./Controllers/searchController');

router.use(homeController);
router.use(movieController);
router.use(searchController);

router.get('*', (req, res) => {
    res.redirect("/404")
})
module.exports = router;