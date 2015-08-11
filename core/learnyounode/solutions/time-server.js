var net = require('net');

var server = net.createServer(function (socket) {
    function pad(x) {
        return x < 10 ? '0' + x : x;
    };

    var date = new Date();
    socket.end(date.getFullYear() + '-' + pad(date.getMonth()+1) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + '\n')
});

server.listen(process.argv[2]);