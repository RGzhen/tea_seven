var mysql = require("mysql");
var connection = mysql.createConnection({

host: "localhost",

user: "root",

password:"qwer1234!",

database: "tea",

})

module.exports = connection;