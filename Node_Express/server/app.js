const express = require("express");
// const cors = require("cors")
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.route");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(cors())

app.use(userRouter);
app.use("/api/users", userRouter);
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

app.use((req,res,next)=>{
    res.status(404).json({
        message: "resource not found",
    });
});

module.exports = app;