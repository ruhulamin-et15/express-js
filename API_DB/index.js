const app = require("./app");
const mongoose = require("mongoose");
const PORT = 5000;

// connecting to DB
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usersTest2");
        console.log("connected DB");
    } catch (error) {
        console.log("not connected DB");
        console.log(error);
        process.exit(1);
    }
};

app.listen(PORT,async ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    await connectDB();
});