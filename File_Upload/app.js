const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res)=>{
  res.status(200).send("<h1>Welcome to the server<h1/>");
});
app.use("/register", userRouter);


module.exports = app;