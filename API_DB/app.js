const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route")

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/api/users",userRouter)


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

//route not found
app.use((req,res,next)=>{
    res.status(404).json({
        message: "route not found",
    });
});

//server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "something went wrong",
    });
});


module.exports = app;