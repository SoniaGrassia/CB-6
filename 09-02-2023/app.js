const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

//ROUTING
app.get("/", (req, res) => {
  const myPreferences = {
    pet: "gatti",
    color: "blu",
    season: "estate",
  };
  res.render("home", {
    nome: "Sonia",
    titolo: "HomePage",
    myPreferences: myPreferences,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "About",
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});
//Non sono riuscita ad interpolare l'immagine
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.render("about", {
      titolo: "About POST",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});
