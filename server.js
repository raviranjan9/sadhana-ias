const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "./public");

app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.send("");
});

app.listen(PORT, (err) => {
    if(err)
        console.log(err);
});