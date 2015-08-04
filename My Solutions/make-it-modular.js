var mymodule = require('./my-module.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err) throw err;

    console.log(data.toString().replace(/,/g, '\n'));
});