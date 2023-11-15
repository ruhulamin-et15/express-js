const express = require("express");
const app = express();

const userRouter = require("./routes/users.route")

app.use("/api/user", userRouter);

app.use("/login", (req, res)=>{
    // res.cookie("name", "ruhul");
    // res.cookie("age", "27");
    // res.clearCookie("name");
    // res.append("id", "10030");
    // res.end();
});
app.use("/register", (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html");
});

app.use("/", (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res)=>{
    res.send("<h2>404 !!! not a valid url</h2>");
});


module.exports = app;