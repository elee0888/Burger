//setting connection to mysql and database//
var mysql = require("mysql");
connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "blasT123!",
    database: "burgers_db"
});
//connecting to mysql and database//
connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports =connection;