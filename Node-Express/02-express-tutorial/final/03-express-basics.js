const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
}); // callback function is executed everytime a user is performing a GET request

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
}); // all http verbs, if it is not available then 404

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use // middleware uses
// app.listen
// express takes care of status codes, but by explicitly defining codes we have more control.
