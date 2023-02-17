const mongoose = require("mongoose");
//per controllare che i dati inseriti nel db corrispondano a quelli dello schema
mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://sonia:0000@cluster0.x2d1llm.mongodb.net/lezione39?retryWrites=true&w=majority",
  {
    //gestione url e la loro topologia
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connesso.");
    } else {
      console.log(`Problemi con la connessione:  ${err}`);
    }
  }
);

require("./schemaLibri"); //aggiungo lo schema della nuova collection
