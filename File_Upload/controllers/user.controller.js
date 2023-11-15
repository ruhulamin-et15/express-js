const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");


//creating schema
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "user name is required"],
    },
    image: {
      type: String,
      required: [true, "user image is required"],
    },
  });

  
//creating model
const User = mongoose.model("Users", userSchema);

//file upload by multer package
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
exports.upload = multer({ storage: storage });

exports.getUsers = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};
exports.saveUsers = async (req, res)=>{
    try {
      const newUser = new User({
        name: req.body.name,
        image: req.file.filename,
      });
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
};