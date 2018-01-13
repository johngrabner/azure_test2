var http = require('http');

const jjg = require("azure_dependency")

var server = http.createServer(function(request, response) {
    let x = jjg
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("message is " + x);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
