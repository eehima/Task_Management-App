const express = require("express");
const app = express();


app.use("/",(req,res)=>{
    res.send("hello from backend");

});

const PORT =5000;

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});