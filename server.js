const express = require("express");
const app = express();
const dbfile = require('../server/conn')
app.get("/", (req, res) => {
  res.send("HelloWorld   Node Srver Live");
});
app.listen(5000, function () {
  console.log("Node server running");
});
