var http = require('http');

http.get(process.argv[2], function(response) {
    var data = [];
    response.setEncoding('utf8')
        .on("data", function(chunk) {
            data.push(chunk);
        })
        .on("end", function(chunk) {
            var length = 0;
            data.forEach(function(element) {
                length += element.length;
            });
            console.log(length);
            console.log(data.toString().replace(/,/g, ''));
        });
});