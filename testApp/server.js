var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

// services for uploading files required
var routes = require('./services/routes.js');

// setting parser ( json + body ) for the app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:false
}));

// Other Routes or services
 app.use('/', routes.services);

http.listen(3000, function() {
	console.log('App Started112 and listening at 3000');
});


//===============temperory=====================//
app.get('/shashi', function(req, res) {

	//app.use('/', routes.services);
	//console.log(res);
	res.send("Everything125 is up and running");
});
//==============================================//


// routes.query('SELECT * from demo', function(err, rows, fields) {
// 	if (err) throw err;
//
// 	console.log("sql");
// 	console.log(rows);
// 	// res.send(rows);
//
// });