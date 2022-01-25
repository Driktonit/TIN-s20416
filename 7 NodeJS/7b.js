var fs = require('fs');
var path = require('path');
let directory = process.argv[2];
var active = false;

fs.watch(directory, function (event, filename) {
    if (active == false) {
        active = true;
        console.log(filename + ' ' + event);
       setTimeout(() => active = false, 1000)
    }
});
