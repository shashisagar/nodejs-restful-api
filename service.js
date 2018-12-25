var express = require('express');
 var http = require('http');
      var path = require('path');
      var app = express();
      var fs = require('fs');
	//  var mongoose = require('mongoose');

// database connection

// mongoose.connect('mongodb://localhost/mydb');

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// dynamically include routes (Controller)


http.createServer(app).listen(3000, function(){
  console.log('Express server listening on port 3000');
});
