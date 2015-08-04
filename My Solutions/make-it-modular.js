var mymodule = require('./my-module.js')

var list = mymodule(process.argv[2], process.argv[3], function(err, list) {
    if (err) throw err;
    console.log(list.toString().replace(/,/g, '\n'))
});