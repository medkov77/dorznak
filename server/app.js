const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const initDatabase = require("./startUp/initDatabase");
const app = express();
const PORT = config.get("port") ?? 8080;
const routes = require("./routes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDatabase();
    });
    await mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () =>
      console.log(chalk.green(`Server has been started on port ${PORT}...`))
    );
  } catch (error) {
    console.log(challk.red(error.message));
    process.exit(1);
  }
}
start();
