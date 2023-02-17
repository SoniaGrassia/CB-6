const express = require("express");
const hbs = require("hbs");
const session = require("cookie-session"); //importo i cookie-session
const bodyParser = require("body-parser"); //middleware per analizzare i body provenienti da ogni input

const app = express();
const PORT = 4000;

//motore di template
app.set("view engine", "hbs");
//percorso per utilizzare i views e i partials
hbs.registerPartials(__dirname + "/views/partials");
//per le risorse statiche
app.use(express.static("public"));
//imposto la sessione
app.use(session({ secret: "Sessione privata" }));
//decodifica ed analisi dell'url
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/login", (req, res) => {
  res.render("login", {
    titolo: "Accedi",
  });
});

//POST per recuperare i dati inseriti nel form e gestione sessione privata
app.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400);
    res.render("login", { message: "Aggiungi i dati richiesti" });
  } else {
    let email = "grassiasonia@gmail.com";
    let password = "0000";
    let userAuth = { email: email, password: password };
    if (email == req.body.email && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
});

//controllo per l'accesso autorizzato tramite middleware
function check(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}

app.get("/private", check, (req, res) => {
  res.render("private", {
    titolo: "Area riservata",
  });
});

app.get("/warning", (req, res) => {
  res.render("Warning", {
    titolo: "WARNING",
  });
});

app.get("/logout", (req, res) => {
  console.log("Logout effettuato");
  req.session = null;
  res.redirect("/");
});

app.get("*", (req, res) => {
  res.render("404", {
    titolo: "404 Page not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo alla porta ${PORT}`);
});
