const express = require("express");
const dotenv = require("dotenv");
const ConnectDb = require("./config/db.js");
const Projectdetails = require("./routes/Projectdetails.js");

dotenv.config();
console.log("datbase", process.env.DB_URL);

const app = express();
app.use(express.json());
app.use("/api",Projectdetails);
app.get("/",(req,res)=>{
    res.send("Server working");
});


ConnectDb();
app.get("/test", (req, res) => {
    res.send("Test endpoint working");
});
app.listen(5003, () => {
    console.log(`Server is running on port 5003`);
});