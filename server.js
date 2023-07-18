const express = require("express");
const app = express();
const dbfile = require("../server/conn");
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}));
const postroute = require("../server/routes/post");

app.use("/api/post", postroute);
app.get("/", (req, res) => {
  res.send("HelloWorld   Node Srver Live");
});
app.listen(5000, function () {
  console.log("Node server running");
});
