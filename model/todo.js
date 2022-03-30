const mongoose = require("mongoose");

// creating schema of our document
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Personal", "Work", "School","Cleaning", "Other"],
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});


// create the model of this schema
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;