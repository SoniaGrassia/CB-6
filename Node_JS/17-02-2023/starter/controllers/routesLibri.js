const express = require("express");
let routerLibri = express.Router();

const mongoose = require("mongoose");

const Libro = mongoose.model("libroModel");

routerLibri.get("/", (req, res) => {
  res.render("addupbook", {
    viewTitle: "Inserisci un libro",
  });
});

routerLibri.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  //collegamento con lo schema di mongoose
  let nota = new Libro();
  nota.isbn = req.body.isbn;
  nota.title = req.body.title;
  nota.subtitle = req.body.subtitle;
  nota.author = req.body.author;
  nota.published = req.body.published;
  nota.publisher = req.body.publisher;
  nota.pages = req.body.pages;
  nota.description = req.body.description;
  //salvo i dati dell'oggetto Nota
  nota.save((err, doc) => {
    if (!err) res.redirect("/libro/booklist");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Libro.updateOne(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("/libro/booklist");
      } else {
        console.log("Errore durante l' update : " + err);
      }
    }
  );
}

routerLibri.get("/booklist", (req, res) => {
  Libro.find((err, docs) => {
    if (!err) {
      res.render("listBook", {
        librilist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

routerLibri.get("/:id", (req, res) => {
  Libro.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupbook", {
        viewTitle: "Aggiornamento",
        librilist: doc,
      });
    }
  });
});

routerLibri.get("/delete/:id", (req, res) => {
  Libro.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/libro/booklist");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = routerLibri;
