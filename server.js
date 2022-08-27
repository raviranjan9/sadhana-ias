const express = require('express');
const path = require("path");
const app = express();
const PORT = process.config.env || 3000;
const staticPath = path.join(__dirname, "/public");

app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.render("./public");
});

app.listen(PORT, (err) => {
    if(err)
        console.log(err);
});