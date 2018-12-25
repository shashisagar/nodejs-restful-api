var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/custom_module/chat_index.html');
});


io.on('connection', function(socket){
    console.log("ddddddddddd");
    socket.on('chat message', function(msg){
        console.log("eeeeeeeee");
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
    console.log(__dirname + '/custom_module/chat_index.html');
});




