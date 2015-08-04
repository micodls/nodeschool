var http = require('http');

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
        .on("data", function(chunk) {
            console.log(chunk)
        });
});