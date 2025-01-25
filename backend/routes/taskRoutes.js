// import express
const express = require("express");
// import user controller
const { createTask, getTask, updateTask, deleteTask } = require("../controllers/taskControllers");
const authMiddleware = require("../middleware/authMiddleware");

// create a router
const router = express.Router();

// task routes
router.post("/", authMiddleware, createTask);
router.get("/:id", getTask);
router.put("/update/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

// export the router
module.exports = router;