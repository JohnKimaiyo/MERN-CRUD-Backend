const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const schema = mongoose;

const postschema = new Schema({
  title: String,
  imagurl: String,
  description: String,
  postid: String,
});

const PostModel = mongoose.model("posts", postschema);
module.exports = router;
