   //http server
   var http = require('http');
   http.createServer(function (req, res) {
       var urlName = req.url;
       res.write('Hello '+ urlName);
       res.end();
   }).listen(8080);