// import servers
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");


// connect to database
connectDB();
// create a server
const app = express();

// set up middleware
app.use(express.json());

//allow cors
// app.use(cors());

// set up routes
app.use("/api/tasks",taskRoutes);
app.use("/api/auth",userRoutes);


// set up server to listen ton a port
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
});