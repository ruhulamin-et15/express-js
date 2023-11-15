const mongoose = require("mongoose");
const chalk = require("chalk");

// connecting to database by mongoose
exports.connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usersTestDB");
        console.log(chalk.blue.bold("Database is connected! happy programming..."));
    } catch (error) {
        console.log(chalk.red.bold("not connected DB"));
        console.log(error);
        process.exit(1);
    }
};