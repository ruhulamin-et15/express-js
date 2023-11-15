const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res)=>{
    res.sendFile(__dirname + "/circle.html");
});
app.post("/circle", (req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h2>Area is Circle : ${area}</h2>`);
});

app.get("/triangle", (req, res)=>{
    res.sendFile(__dirname + "/triangle.html");
});
app.post("/triangle", (req, res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h2>Area is Triangle : ${area}</h2>`);
});

module.exports = app;