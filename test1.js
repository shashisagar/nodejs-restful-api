
var http=require('http');
var url=require('url');
var dt=require('./custom_module/m_dateTime.js');
http.createServer(function(req,res){
    res.writeHead(200,{
        'content-type':'text/plain'
    });
    // res.write("current date and time is: " + dt.myDateTime());
    //
    // res.write("<br>");
    //res.write("Url is: " + req.url);

    var q=url.parse(req.url,true).query;

    console.log(q);
    var text=q.year+ " "+q.month;

    res.write(text);
    
    res.end('Hello World');
    // console.log("gggggggggggggg");

}).listen(8080);


