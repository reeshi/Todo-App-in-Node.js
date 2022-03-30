// require the express
const express = require("express");
const path = require("path");
const db = require("./config/mongoose");
const port = 8000;
const app = express();

// tell express which template engine we are using
app.set("view engine", "ejs");

// Now we have to tell the express.js where the view folders is
// __dirname is the current directory where this index.js file is
// path.join function just append the views to the current directory path
app.set("views", path.join(__dirname, "views"));

// tell express where the all static file
app.use(express.static("assets"));

// use for parsing the form data
app.use(express.urlencoded({
    extended: true
}));


// use express router for routing
app.use("/", require("./routers/index"));


app.listen(port, function(err){
    if(err){
        console.log("Error in running the server", err);
        return;
    }
    console.log(`my express server is running on ${port}`);
});