const mongoose = require("mongoose");

//creazione di un oggetto della classe Schema, con il quale gestisco i dati
var schemaLibri = new mongoose.Schema({
  isbn: {
    type: String,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  author: {
    type: String,
  },
  published: {
    type: String,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: Number,
  },
  description: {
    type: String,
  },
});
//si crea la collection
mongoose.model("book", schemaLibri);
