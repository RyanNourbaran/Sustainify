const http = require("http");
const express = require("express");
const request = require("request");
var rp = require("request-promise");
const bodyParser = require("body-parser");
var multer = require("multer"); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var type = upload.single("image");

var FormData = require("form-data");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API running.");
});

app.post("/classify", type, (req, res) => {
  console.log(req.body);

  var options = {
    method: "POST",
    uri:
      "https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/dd11a683-461f-4723-8ba7-4b394844e155/image?application=sustainify",
    body: req.file.buffer,
    headers: {
      "Content-type": "application/octet-stream",
      "Prediction-Key": "b99ae473f3b049638e8a61c02eeca6cb"
    }
  };
  rp(options)
    .then(jsonBody => {
      console.log(jsonBody);
      res.send(jsonBody);
    })
    .catch(err => console.log(err));
});

var server = http.createServer(app);

var port = process.env.PORT || 1337;

server.listen(port);

console.log("Server running at http://localhost:%d", port);
