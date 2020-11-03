const express = require('express');

let app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/csv", (req,res)=>{
  res.status(204).send(js(req.body.json))
})
app.get("/csv", (req,res)=>{
  res.status(204).send()
})

app.listen(3000,()=>{console.log("Server is running")});