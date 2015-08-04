var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    function getISO(date)
    {
        var myDate = new Date(date)
        return {
            "hour": myDate.getHours(),
            "minute": myDate.getMinutes(),
            "second": myDate.getSeconds()
        };
    };

    function getUnix(date)
    {
        var myDate = new Date(date)
        return {
            "unixtime": myDate.getTime()
        };
    };

    var _url = url.parse(request.url, true);
    var rawDate = _url.query.iso;
    var path = _url.pathname;
    var output = [];

    if (path == "/api/parsetime") {
        output.push(getISO(rawDate));
    };

    if (path == "/api/unixtime") {
        output.push( getUnix(rawDate));
    };

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(output[0]));
    response.end(JSON.stringify(output[1]));
});

server.listen(process.argv[2]);