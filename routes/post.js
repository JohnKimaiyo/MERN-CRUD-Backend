const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postschema = new schema({
  title: String,
  imageurl: String,
  description: String,
  postid: String,
});


router.post('/addnewpost',(req,res)=>{
const newpost = new PostModel({
    title:req.body.title,
    imageurl:req.body.imageurl,
    description:req.body.description,
    postid:req.body.postid
})
newpost.save(function(err){
    if(err){
        res.send('New Post added successfully')
    }
    else{
        res.send(err)
    }
})
   
})
const PostModel = mongoose.model("posts", postschema);
module.exports = router;
