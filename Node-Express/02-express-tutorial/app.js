/* const http = require("http");
const { readFileSync } = require("fs");

// Files - we can setup server wth just http, but when you have a lot of  resources, then you need to handle/setup every single resource one by one, which is tedious.
const homePage = readFileSync("./navbar-app/index.html"); // the problem with this is that while writing it in response we will get lot of 404s becoz those resources are also called as urls. -> everytime we send back the initial html content and the browser starts reading the content and everytime we have a path(referenced files, will be required from the server by browser). like-> /styles.css , ./logo.svg , ./browser-app.js, we have referenced the files in index.html, but if we do not provide the resources to our created server, then browser cab not display those resources. - for that we need add all those requests separately which is not an ideal way.
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  // console.log("user pings server");
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); // mime type or media type data we are sending with status code.
    res.write(homePage);
    res.end(); // end means the communication is over.always need to be called. we can pass the data to the end itself.
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
 */

const express = require("express");
const app = express();
/* const { products } = require("./data");
app.get("/", (req, res) => {
  // res.json(products);
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
  // res.end();
});
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("Product not found");
  }
  // res.end();
});
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct);
  // res.end(); not an efficient way to write routes.
}); 

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params); //returns parameters sent as an object
  res.send("Hola!");
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("No products match your search");
    return res.status(200).json({ success: true, data: [] }); //if we don't return then JS will keep on reading the code, and throw error. we can send responses depending upon conditions but not back to back.
  }
  res.status(200).json(sortedProducts);
  // res.send("Haloo!");
}); */

// req => middleware => res

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
