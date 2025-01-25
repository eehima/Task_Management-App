// import express
const express = require("express");
// import user controller
const { signup, login } = require("../controllers/authController");

// create a router
const router = express.Router();

// signup route
router.post("/signup", signup);

// login route
router.post("/login", login);

// export the router
module.exports = router;