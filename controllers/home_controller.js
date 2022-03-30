const Todo = require("../model/todo");

// home page and display all the task
module.exports.home = function (req, res) {
    // fetching the all task ,for displaying on home page
    Todo.find({}, function (err, tasks) {
        if (err) {
            console.log("Error in fetching all the task", err);
            return;
        }

        return res.render("home", {
            tasks: tasks
        });

    });

}


// creating the task
module.exports.createTask = function (req, res) {
    // creating the new task in db
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.date
    }, function (err, newTask) {
        if (err) {
            console.log("Error in creating the new task", err);
            return;
        }

        return res.redirect("/");
    });

}


// deleteting a task
module.exports.deleteTask = function (req, res) {
    // convert the req.query object to array so that we can iterate on it
    let tasks = Object.keys(req.query);
    for (let taskId of tasks) {
        // delete the task
        Todo.findByIdAndDelete(taskId, function (err) {
            if (err) {
                console.log("Error in deleting the task", err);
                return;
            }
        });
    }
    return res.redirect("/");
}