var http = require('http')

var get_request = http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    response.on("data", function(chunk) {
        console.log(chunk)
    });
});