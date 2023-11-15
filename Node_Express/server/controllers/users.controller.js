const path = require("path");
const users = require("../models/users.model");

exports.getUsers = (req, res)=>{
   res.status(200).json({
    users,
   });
};
exports.saveUsers = (req, res)=>{
    const user = {
        username: req.body.username,
        email: req.body.email
    };
    users.push(user);
    res.status(201).json(users);
};