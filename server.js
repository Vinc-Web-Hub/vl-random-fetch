const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve the HTML file
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/random-number") {
    // Respond with a random number
    const randomNumber = Math.floor(Math.random() * 1000);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ number: randomNumber }));
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
