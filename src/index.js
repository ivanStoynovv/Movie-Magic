const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const routes = require('./router');
const mongoose = require('mongoose');


const port = 3030;

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}))

app.use(routes)

mongoose.connect('mongodb://localhost:27017/movie-magic')
.then(() => {
    console.log("DB connected successfully");
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
}).catch((err) => {
    console.log(err);
    console.log("Cannot connect to the DB");
})