const express = require("express");
let router = express.Router(); //uso il route di express

//richiamo mongoose e il modello creato in schemaLibri.js
const mongoose = require("mongoose");
const Nota = mongoose.model("book");

router.get("/", (req, res) => {
  res.render("addupdateLibri", {
    viewTitle: "Inserisci un libro",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  //collegamento con lo schema di mongoose
  let nota = new Nota();
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
    if (!err) res.redirect("list");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Nota.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("list");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

router.get("/list", (req, res) => {
  Nota.find((err, docs) => {
    if (!err) {
      res.render("listLibri", {
        notalist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

//get per impostare EDIT del file list.hbs
router.get("/:id", (req, res) => {
  Nota.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupdateLibri", {
        viewTitle: "Aggiornamento",
        nota: doc,
      });
    }
  });
});

//stessa cosa per cancellare un dato con un certo id
router.get("/delete/:id", (req, res) => {
  Nota.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/list");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
