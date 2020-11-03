const express = require('express');
const convert = require('./client/app.js');

let app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/csv", (req,res)=>{
  convert(req.body)
  res.redirect("/")
})

app.listen(3000,()=>{console.log("Server is running")});