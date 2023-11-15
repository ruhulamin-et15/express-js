const app = require("./app");
const chalk = require("chalk");
const { connectDB } = require("./controllers/db.controller");
const port = 3000;


app.listen(port, async ()=>{
    console.log(chalk.blueBright.bold(`server is running at http://localhost:${port}`));
    await connectDB();
});