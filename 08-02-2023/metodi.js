const express = require("express");
const articoli = require("./articoli");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); //codifica l'analisi delle url estese che creiamo
app.use(express.json()); //estendiamo in maniera globale l'uso dei json

//GET
//controllo output su POSTMAN -> localhost:3000/api
app.get("/api", (req, res) => {
  res.status(200).json({ success: true, data: articoli });
});

//localhost:3000/api2/9
app.get("/api/:userId", (req, res) => {
  const { userId } = req.params;

  const searchUser = articoli.find((user) => user.userId === Number(userId));
  return res.status(200).json(searchUser);
});

//localhost:3000/api/magical
app.get("/api/:tag", (req, res) => {
  const { tag } = req.params;

  const filteredPost = articoli.filter((post) => post.tags.includes(tag));
  return res.json(filteredPost);
});

//POST
app.post("/api", (req, res) => {
  //prendo in considerazione il contenuto della req (body)
  const { body, tags } = req.body;

  if (!body || !tags) {
    return res
      .status(400)
      .json({ success: false, msg: "non trovo un dato necessario" });
  }
  return res
    .status(200)
    .json({ success: true, articolo: { body: body, tags: tags } });
});

//PUT
app.put("/api/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req.body;

  const searchPost = articoli.find((articolo) => articolo.id === Number(id));

  if (!searchPost) {
    return res
      .status(400)
      .json({ success: false, msg: `non esistono articoli con id: ${id}` });
  }
  const newPost = articoli.map((articolo) => {
    if (articolo.id === Number(id)) {
      articolo.body = body;
    }
    return searchPost;
  });
  res.status(200).json({ success: true, data: newPost });
});

//DELETE
app.delete("/api/:id", (req, res) => {
  const searchPost = articoli.find(
    (articolo) => articolo.id === Number(req.params.id)
  );

  if (!searchPost) {
    return res.status(400).json({
      success: false,
      msg: `non esistono articoli con id: ${req.params.id}`,
    });
  }
  const filteredPost = articoli.filter(
    (articolo) => articolo.id != Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: filteredPost });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto alla porta ${PORT}`);
});
