const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware -> static means server doesn't have to change it. so we put all those resources in a folder and pass it to static method. - express takes care of the mime types,status codes and all.as far as server side is concerned js doesn't need to be changed, so it can also be placed in those resources folder. We will learn more about it in server side rendering.(template engines)

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});

// sendFile requires absolute path.
