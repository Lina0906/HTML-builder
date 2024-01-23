const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "secret-folder");
fs.readdir(folderPath, {withFileTypes: true}, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        if (file.isFile()) {
            fs.stat(path.join(file.path, file.name), (error, stats) => { 
             console.log(`${file.name.split(".")[0]}-${file.name.split(".")[1]}-${stats.size / 1000}kb`);         
          });
        }
    });
});