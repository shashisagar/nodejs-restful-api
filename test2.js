var http=require('http');

//Included For file property---read,write,save
var fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('./custom_module/read.html',function(err,data)
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end("this is end of file");
    });


     fs.appendFile('./custom_module/read.html','Hello Content',function(err)
     {
         if(err)
         {
             console.log("hhhhhhhhhhhhh");
             throw err;
         }
         else {
             console.log("iiiiiiiiiiiii");
             res.writeHead(200, {'Content-Type': 'text/html'});
             res.write(data);
             res.end("this is the end of file");
             console.log("ggggggggggggggg");
         }
     });

}).listen(8080);