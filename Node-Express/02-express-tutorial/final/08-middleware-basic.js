const express = require("express");
const app = express();

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("Testing");
  next();
};
//  when you have a middleware where you setup some sort of logic, unless you are sending back the response yourself, you have to pass it on to next() middleware. -> pass it on to next function meaning in our case that is going to be our method app.get(). -> be sure to invoke it next(). !! either you terminate by sending own response or pass it on to next middleware.

// app will get clunky, so move middleware to different files.

// between path and callback function, we place our middleware function.
app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
