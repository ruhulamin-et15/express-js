const {v4: uuidv4} = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "Ruhul Amin",
        email: "ruhul44@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Armina sathy",
        email: "armina44@gmail.com"
    },
];

module.exports = users;