// import task model
const Task = require("../models/Task");

// create a task
exports.createTask = async (req, res) => {
    const { title, desc, } = req.body;
    try {
        const task = await Task.create({ title, desc, });
        res.status(201).json({ message: "Task created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get single task
exports.getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, desc, important } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(id, { title, desc, important }, { new: true });
        res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

