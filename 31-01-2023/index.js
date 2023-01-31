/*Implementate l'applicazione con i percorsi per mostrare 2 pagine 
html, per esempio, una pagina prodotti e una pagina cliente, 
oltre alla home page che è già impostata.
Fate attenzione a cosa vi servirà per mostrare e poi integrare 
le due pagine esterne. */

//modulo per il protocollo
const http = require("http");
//modulo per richiamare il sistema operativo
const os = require("os");
//richiamo il FileSystem
const fs = require("fs");
//modulo per gestire i fileSystem
const cliente = fs.readFileSync("cliente.html");
const prodotti = fs.readFileSync("prodotti.html");

//le info che voglio recuperare
let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

//html per le info di sistema
let messaggio = `<!DOCTYPE html>
<html>
<head>
<body>
l'utente <b>${utente.username}</b> ha avviato l'app il giorno 
<b>${data.getDate()}/${data.getMonth()}/${data.getFullYear()}</b> usando la piattaforma: ${piattaforma}
</body>
</head>
</html>`;

//creo il server e gestisco i percorsi
let server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio); //HomePage
  else if (req.url === "/cliente") res.end(cliente); //Pagina del cliente
  else if (req.url === "/prodotti") res.end(prodotti); //Pagina dei prodotti
  else {
    res.writeHead(404); //Gestione del 404
    res.end("Page not found");
  }
});

server.listen(3001);
