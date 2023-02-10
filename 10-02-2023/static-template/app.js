const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 4000;

//motore di template
app.set("view engine", "hbs");
//percorso per utilizzare i views e i partials
hbs.registerPartials(__dirname + "/views/partials");
//per le risorse statiche
app.use(express.static("public"));

//ROUTING
app.get("/", (req, res) => {
  res.render("index", {
    titolo: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "Formazione",
  });
});

app.get("/contatti", (req, res) => {
  res.render("contatti", {
    titolo: "Contatti",
  });
});

app.get("/formazione", (req, res) => {
  res.render("formazione", {
    titolo: "Formazione",
  });
});

app.get("/web-design", (req, res) => {
  res.render("web-design", {
    titolo: "Web Design",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    titolo: "404 Page not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo alla porta ${PORT}`);
});
