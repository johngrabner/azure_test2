var http = require('http');

const jjg = require("purple_shared_enums_pic_pi")

var server = http.createServer(function(request, response) {
    let x = jjg.SPI_heartbeat_inteval_in_ms
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World, x = " + x);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
