/*Crea un server che risponde alla porta 3000
-Crea 3 percorsi: pagina iniziale, studenti, corsi
-Nell’output puoi scrivere quello che vuoi
-Prova lo script ed esegui correttamente con il comando nel terminale
-Indica quali sono i percorsi che scriverai nella barra di ricerca 
del browser per raggiungere le tue pagine */

const http = require("http");

const server = http.createServer((req, res) => {
  //pagina iniziale -> http://localhost:3000/
  if (req.url === "/") res.end("HOME");
  //pagina studenti -> http://localhost:3000/studenti
  else if (req.url === "/studenti") res.end("PORTALE STUDENTI");
  //pagina corsi -> http://localhost:3000/corsi
  else if (req.url === "/corsi") res.end("CORSI");
  else {
    //pagina non creata -> http://localhost:3000/insegnanti
    res.writeHead(404);
    res.end("Error 404: page not found");
  }
});

server.listen(3000);
