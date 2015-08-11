var http = require('http');

var data1 = [];
var data2 = [];
var data3 = [];

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
        .on("data", function(chunk) {
            data1.push(chunk);
        })
        .on("end", function(chunk) {
            console.log(data1.toString().replace(/,/g, ''));

            http.get(process.argv[3], function(response) {
                response.setEncoding('utf8')
                    .on("data", function(chunk) {
                        data2.push(chunk);
                    })
                    .on("end", function(chunk) {
                        console.log(data2.toString().replace(/,/g, ''));

                        http.get(process.argv[4], function(response) {
                            response.setEncoding('utf8')
                                .on("data", function(chunk) {
                                    data3.push(chunk)
                                })
                                .on("end", function(chunk) {
                                    console.log(data3.toString().replace(/,/g, ''));
                                });
                        });
                    });
            });
        });
});

