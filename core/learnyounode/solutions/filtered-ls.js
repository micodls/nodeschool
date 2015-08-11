var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data) {
    if (err) throw err;

    var filtered = data.filter(function (file) {
        if (path.extname(file) === '.' + process.argv[3]) {
            return file;
        }
    });

    console.log(filtered.toString().replace(/,/g, '\n'));
});