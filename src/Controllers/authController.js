const router = require("express").Router();
const authService = require("../services/authService");

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const userData = req.body;
    try {
        await authService.register(userData);
        res.redirect('/auth/login');
    } catch (err) {
       res.render("register", {error: err.message});
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    res.cookie('auth', token);

    res.redirect('/');
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth");

    res.redirect("/");
})

module.exports = router;