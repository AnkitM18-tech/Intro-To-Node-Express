var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text) // filesize is huge.
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // pushing data from readstream to writestream.
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
