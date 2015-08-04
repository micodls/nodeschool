var http = require('http')

var get_request = http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    var data = []
    response.on("data", function(chunk) {
        data.push(chunk)
    });
    response.on("end", function(chunk) {
        var length = 0;
        data.forEach(function(element) {
            length += element.length;
        })
        console.log(length)
        console.log(data.toString().replace(/,/g, ''))
    })
});