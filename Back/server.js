const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Voilà la réponse du server");
});

server.listen(3333);
