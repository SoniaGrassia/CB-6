const express = require("express"); //richiamo express
const app = express(); //lo collego alla mia app
const PORT = 8081; //creo la porta

app.use(express.static("public")); //localizzo le risorse statiche del progetto

//ROUTING BASE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/chi-sono", (req, res) => {
  res.sendFile(__dirname + "/public/chi-sono.html");
});

app.get("/lavori", (req, res) => {
  res.sendFile(__dirname + "/public/lavori.html");
});

app.get("*", (req, res) => {
  res.send("404 NOT FOUND");
});

//Server in ascolto
app.listen(PORT, () => {
  console.log(`Server in ascolto si ${PORT}`);
});
