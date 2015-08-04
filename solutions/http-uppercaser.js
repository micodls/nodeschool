var http = require('http');

var server = http.createServer(function (request, response) {
    var input = [];
    request.setEncoding('utf8')
        .on('data', function(chunk) {
            input.push(chunk.toUpperCase());
        })
        .on('end', function() {
            response.end(input.toString().replace(/,/g, ''));
        });
});

server.listen(process.argv[2]);