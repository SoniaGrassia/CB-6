const http = require("http");
const fs = require("fs");
const libri = require("./libri");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let home = fs.readFileSync("homePage.html");
      res.end(home);
    } else if (req.url === "/chi-sono") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let chiSono = fs.readFileSync("chi-sono.html");
      res.end(chiSono);
    } else if (req.url === "/api/libri") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(libri));
    }
  })
  .listen(5000);

console.log("Server in ascolto");
