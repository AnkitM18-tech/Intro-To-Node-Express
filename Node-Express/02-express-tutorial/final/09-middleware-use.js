const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//  req => middleware => res
app.use([logger, authorize]); // sequence matters, middlewares at top and all route methods are after that, if we wish to use middleware in all methods. we can add a path also in app.use -> "/api" will be applied to both products and items here. If we add a path then it will be applied to any route after this /api.
// mounts the specified middleware function or functions at the specified path; middleware function is executed when the base of the requested path matches path. if you omit the path it will be applied to all route methods. order of middlewares is also important, they will be invoked in the order specified.
// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
