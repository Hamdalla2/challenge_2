const express = require('express');
const js = require('./app.js');

let app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/csv", (req,res)=>{
  js.sender(JSON.parse(req.body.json))
  res.status(204).send()
})

app.listen(3000,()=>{console.log("Server is running")});