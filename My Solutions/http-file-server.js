var fs = require('fs');
var http = require('http');
var fileLocation = process.argv[3];

var server = http.createServer(function (req, res) {
    var fileContent = fs.createReadStream(fileLocation, {encoding: 'utf8'})
    fileContent.on('data', function(chunk) {
        res.end(chunk);
    });
});

server.listen(process.argv[2]);