const express = require("express");
const app = express();

const port = 3030;

app.get('/', (req, res) => {
    res.send("Server is working");
})

app.listen(port, () => console.log(`Server is listening on port ${port}...`))