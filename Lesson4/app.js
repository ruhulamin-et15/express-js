require('dotenv').config();
const express = require("express");
const app = express();

const myMiddleWare = (req, res, next) => {
    console.log("middleware function");
    req.currentTime = new Date(Date.now());
    next();
};
app.use(myMiddleWare);

// app.use((req,res,next)=>{
//     res.send("404 bad url request")
// });
app.use((err, req, res, next)=> {
    res.status(500).send("something broke");
})

app.get("/", (req, res)=>{
    console.log("i am home " + req.currentTime)
    res.send('<h2>I am home route</h2>')
});
app.get("/about", (req, res)=>{
    console.log("i am about " + req.currentTime)
    res.send('<h2>I am about route</h2>')
});

module.exports = app;