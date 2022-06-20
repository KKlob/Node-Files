const fs = require('fs');
const axios = require('axios');

const argv = process.argv;

argv.forEach(function (arg, i) {
    if (i > 1) {
        if (arg.includes(".com")) {
            webCat(arg);
        }
        else if (arg.includes(".txt")) {
            cat(arg);
        }
        else {
            console.log("Invalide argument passed: ", arg);
        }
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

function webCat(url) {
    axios.get(url)
        .then(function (resp) {
            console.log(resp);
        })
        .catch(function (err) {
            console.log("Error getting ", url);
            console.log("Error: ", err);
        });
}