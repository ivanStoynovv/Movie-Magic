const router = require("express").Router();
const homeController = require('./Controllers/homeController');

router.use(homeController);

module.exports = router;