const express = require('express');
const js = require('./client/app.js');
let app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var one=""

app.post("/csv", (req,res)=>{
  one=req.body
  res.status(200).send(req.body)
})
app.get("/csv", (req,res)=>{
  res.status(200).send(one)
})
app.post("/up", (req,res)=>{
  res.status(204).send()
})

app.listen(3000,()=>{console.log("Server is running")});