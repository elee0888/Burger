//setting up all the modules that we are using
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require ("express-handlebars");

//setting up the port that well be using//
var app = express();
var PORT= process.env.PORT || 3010;

//
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

//setting up handlebars for the html layout for the page//
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});