const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// // *****Query Parameters*****
// app.get("/", (req, res)=>{
//     const id = req.query.id;
//     const age = req.query.age;
//     res.send(`<h1>student age is : ${age}, id is : ${id}</h1>`);
// });

// // *****Route Parameters*****
// app.get("/userId/:id/userAge/:age", (req, res)=>{
//     const id = req.params.id;
//     const age = req.params.age;
//     res.send(`<h1>student age is : ${age}, id is : ${id}</h1>`);
// });

// // *****Route Parameters 2*****
// app.get("/userId/:id([0-9]{4})", (req, res)=>{
//     res.send(`<h1>student id is : ${req.params.id}</h1>`);
// });
// app.get("/userTitle/:title([a-zA-Z0-9]{3})", (req, res)=>{
//     res.send(`<h1>student id is : ${req.params.title}</h1>`);
// });
// app.use("*", (req, res)=>{
//     res.status(404).send({
//         message: "not a valid route"
//     });
// });

// // *****Header Parameters*****
// app.get("/", (req, res)=>{
//     const id = req.header("id");
//     const name = req.header("name");
//     res.send(`student id is : ${id}, name is : ${name}`)
// });

// // *****Body Parser*****
// app.post("/register", (req, res)=>{
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`welcome ${name}. you are ${age}`);
// });

// app.post("/register", (req, res)=>{
//     const fullName = req.body.fullName;
//     const age = req.body.age;
//     res.send(`<h2>Your Name is ${fullName} & Your Age is ${age}</h2>`);
// });

// app.get("/register", (req, res)=>{
//     res.sendFile(__dirname + "/index.html")
// });

module.exports = app;