const express = require("express");
const path = require("path");
const libri = require("./libri");
const authorize = require("./authorize");

const PORT = 5000;
const app = express();

//home da un file html
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

//pagina pubblica con tutti i libri
app.get("/lista-libri", (req, res) => {
  const libro = libri.map((libro) => {
    const { isbn, title, author } = libro;
    return { isbn, title, author };
  });
  res.json(libro);
});

//area privata che visualizza solo 3 libri su 8 totali
// /private-area?user=sonia
app.get("/private-area", authorize, (req, res) => {
  const libro = libri.map((libro) => {
    const { isbn, title, author, description, website, pages } = libro;
    return { isbn, title, author, description, website, pages };
  });
  console.log(libro.length);
  res.json(libro.slice(0, 3));
});

app.listen(PORT, () => {
  console.log(`Server attivo alla porta ${PORT}`);
});
