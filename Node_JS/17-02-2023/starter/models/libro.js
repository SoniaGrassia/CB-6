const mongoose = require("mongoose");

//sto creando un oggetto della classe Schema con il quale gestisco i miei dati
var libroSchema = new mongoose.Schema({
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

/*La collezione verrà chiamata notaModel ma 
secondo formattazione di Mongoose viene pluralizzata e scritta in 
mnuscolo*/
mongoose.model("libroModel", libroSchema);
