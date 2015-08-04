var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
    function pad(x){
        if(x < 10) return "0" + x;
        return x;
    }
    var date = new Date();
    socket.end(date.getFullYear() + "-" + pad(date.getMonth()+1) + "-" + pad(date.getDate()) + " " + pad(date.getHours()) + ":" + pad(date.getMinutes()) + '\n')
})
server.listen(process.argv[2])