var http = require('http');

var server = http.createServer(function (req, res) {
    var input = []
    req.setEncoding('utf8')
    req.on("data", function(chunk) {
        input.push(chunk.toUpperCase())
    });
    req.on("end", function() {
        res.end(input.toString().replace(/,/g, ''))
    })
});

server.listen(process.argv[2]);