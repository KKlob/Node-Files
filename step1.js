const fs = require('fs');

const argv = process.argv;

argv.forEach(function (log, i) {
    if (i > 1) {
        cat(log);
    }
});

function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log(`Error reading ${path}`);
            console.log(`Error: ${err}`);
            process.exit(1);
        }
        else {
            console.log(data);
        }
    });

    console.log("Reading File...");
}