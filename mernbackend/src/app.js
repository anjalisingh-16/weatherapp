const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
console.log(template_path);
console.log(static_path);
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));
const port = process.env.PORT || 3000;
app.get("", (req, resp) => {
  resp.render("index");
});
app.get("/about", (req, resp) => {
  resp.render("about");
});
app.get("/weather", (req, resp) => {
  resp.render("weather");
});
app.get("*", (req, resp) => {
  resp.render("404errorpage", {
    errormsg: "OOPS!page not found",
  });
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
