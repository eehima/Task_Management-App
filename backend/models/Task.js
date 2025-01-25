// import mongoose
const mongoose = require("mongoose");

// create a schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true,
    },
    desc: {
        type: String,
        required: true,
        unique:true,
    },
    important: {
        type: Boolean,
        default: false,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}); 

module.exports = mongoose.model('Task', taskSchema)