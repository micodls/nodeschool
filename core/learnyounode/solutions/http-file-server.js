var fs = require('fs');
var http = require('http');
var fileLocation = process.argv[3];

var server = http.createServer(function (request, response) {
    fs.createReadStream(fileLocation, {encoding: 'utf8'})
        .on('data', function(chunk) {
            response.end(chunk);
        });
});

server.listen(process.argv[2]);