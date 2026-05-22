const express = require("express");
const dotenv = require("dotenv");
const ConnectDb = require("./config/db.js");

dotenv.config();
console.log("datbase", process.env.DB_URL);

const app = express();

ConnectDb();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});