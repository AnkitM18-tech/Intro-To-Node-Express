const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello Barld");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});

// server.listen is asynchronous, so the event loop waits for the requests to come and then displays "Hello World"
