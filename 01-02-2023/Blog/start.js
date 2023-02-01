/*
-Crea una cartella per il progetto blog
-Inizializza un nuovo progetto Node
-Installa nodemon
-Modifica il package.json creando uno script per start
-Crea un server che risponde alla porta 3001
-Usa una costante per il numero di porta
-Crea un output a console che indichi il server attivo sulla porta che hai scelto
-Devi gestire sia lo status code 200 che il 404
-Usa text/plain per i tuoi contenuti di 3 diverse pagine: articoli, commenti, utenti
-Usa 3 variabili per passare all'output i titoli delle pagine (3 variabili per tre titoli)
-Formatta usando la modalità literal template. */

const http = require("http");
const PORT = 3001;
let homePage = "HOME";
let articoli = "Tutti gli articoli";
let commenti = "I commenti";
let utenti = "Utenti";

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end(homePage);
  } else if (req.url === "/articoli") {
    res.writeHead(200);
    res.end(articoli);
  } else if (req.url === "/commenti") {
    res.writeHead(200);
    res.end(commenti);
  } else if (req.url === "/utenti") {
    res.writeHead(200);
    res.end(utenti);
  } else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(PORT);
console.log(`Server connesso alla porta ${PORT}`);
