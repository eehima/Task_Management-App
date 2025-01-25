// import servers
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

// connect to database
connectDB();
// create a server
const app = express();



app.use("/",(req,res)=>{
    res.send("hello from backend");

});
// set up server to listen ton a port
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
});