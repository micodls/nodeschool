var fs = require('fs')
var path = require('path')

module.exports = function (directory, filter, callback) {
    fs.readdir(directory, function(err, data) {
        if (err) return callback(err);
        var filtered = data.filter(function (file) {
            if (path.extname(file) === '.' + filter) {
                return file
            }
        });
        return callback(null, filtered)
    });
}