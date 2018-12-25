

var mysql      = require('mysql');
var express = require('express');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodejs_db'
});

connection.connect();
console.log("connected with db")


module.exports = connection;
