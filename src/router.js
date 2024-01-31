const router = require("express").Router();
const homeController = require('./Controllers/homeController');
const movieController = require('./Controllers/movieController');
const castController = require("./Controllers/castController");

router.use(homeController);
router.use(movieController);
router.use("/cast", castController);

router.get('*', (req, res) => {
    res.redirect("/404")
})
module.exports = router;