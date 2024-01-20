const router = require("express").Router();
const homeController = require('./Controllers/homeController');

router.get('/about', (req, res) => {
    res.render("about", {layout: false});
});
router.use(homeController);

module.exports = router;