dotenv.config();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function ConnectDb() {
    const db = process.env.DB_URL;
    try {
        await mongoose.connect(db);
        console.log("Database conected ");
    } catch (error) {
        console.log("database connection failed", error);
    }
}

module.exports = ConnectDb;


