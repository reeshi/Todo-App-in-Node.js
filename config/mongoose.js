const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost/todo_app_db");

// acquire the connection(to check if it is successful)
const db = mongoose.connection;

// error
db.on("error", console.error.bind(console, "error connecting to database"));


// up and running then print message
db.once("open", function(){
    console.log("Succesfully connected to the database");
});