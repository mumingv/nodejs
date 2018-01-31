var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Hi, Henry!');
    response.end();
}).listen(8888);

console.log('http://localhost:8888/');
console.log('Server start. Listening at port 8888.');
