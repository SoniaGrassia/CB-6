const express = require("express");
const people = require("./data");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); //codifica l'analisi delle url estese che creiamo
app.use(express.json()); //estendiamo in maniera globale l'uso dei json

//ROUTING
//controllo output su POSTMAN -> localhost:3000/api/people
//mi restituisce tutti i dati in maniera integrale
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//solo alcune info degli oggetti
app.get("/api/people2", (req, res) => {
  console.log(req.params);

  const singleUser = people.map((user) => {
    const { id, name, email, phone } = user;
    return { id, name, email, phone };
  });

  return res.json(singleUser);
});

//Output -> solo l'utente con un dato ID
//localhost:3000/api/people/1
app.get("/api/people/:peopleId", (req, res) => {
  const { peopleId } = req.params;

  const singleUser = people.find((user) => user.id === Number(peopleId));
  if (!singleUser) {
    return res.status(404).send("User not found");
  }
  return res.json(singleUser);
});

//POST
app.post("/api/people", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res
      .status(400)
      .json({ success: false, msg: "non trovo un dato necessario" });
  }
  return res
    .status(200)
    .json({ success: true, people: { id: id, name: name } });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto alla porta ${PORT}`);
});
