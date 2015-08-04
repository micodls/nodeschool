var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    function getISO(date)
    {
        var new_date = new Date(date)
        return {
            "hour": new_date.getHours(),
            "minute": new_date.getMinutes(),
            "second": new_date.getSeconds()
        };
    }

    function getUnix(date)
    {
        var new_date = new Date(date)
        return {
            "unixtime": new_date.getTime()
        };
    }

    var _url = url.parse(req.url, true);
    var _date = _url.query.iso;
    var _path = _url.pathname;
    var _output = [];

    if (_path == "/api/parsetime") {
        _output.push(getISO(_date));
    }

    if (_path == "/api/unixtime") {
        _output.push( getUnix(_date));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(_output[0]));
    res.end(JSON.stringify(_output[1]));
});

server.listen(process.argv[2]);