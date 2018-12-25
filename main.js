var express = require('express');
var db      = require('./db.js');
var app = express();

app.get('/shashi', function (req, res) {
	console.log("shashi here 125");
     res.send('Hello World 125!');
})

app.listen(3000, function () {
  console.log('connected with port 3000!');
})


app.get('/fetchResult',function (req, res) {

    db.query('SELECT * from demo', function (err, rows, fields) {
       // if (err) throw err;
        console.log(rows);
        // res.writeHead(200, { 'Content-Type': 'application/json'});
        res.send("mysql data sending...");


    });

});

db.end();