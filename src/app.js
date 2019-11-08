const path = require("path");
const express = require("express");
const hbs = require("hbs");
app = express();

// nodejs file and folder absolute path
// console.log(__dirname);
// console.log(__filename);

// we re using path.join
// dynamic site path
const viewpath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
app.set("views", viewpath);
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);

// static site path
const cythia = path.join(__dirname, "../public");
app.use(express.static(cythia));

// setting handbar

// render using hbs
app.get("", (req, res) => {
  res.render("index", {
    title: "welcome to the index page",
    name: "Index"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "welcome to the about page",
    name: "About"
  });
});

// this how to render a string in the web server
// app.get("", (req, res) => {
//   res.send("this is the home page");
// });

// this is how to render a html page
// app.get("/about", (req, res) => {
//   res.send('<h1 style="color:red">This the about Page</h1>');
// });

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
