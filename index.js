const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/main", (req, res) => {
    res.render("main")
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
