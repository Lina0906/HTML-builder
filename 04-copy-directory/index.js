const fs = require("fs");
const path = require("path");

function copyDir() {
    fs.rm(path.join(__dirname, 'files-copy'),
        { recursive: true },
        () => {
            fs.mkdir(path.join(__dirname, 'files-copy'),
                { recursive: true },
                (err) => {
                    if (err) {
                        return console.error(err);
                    }
                    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
                        if (err) {
                            return console.error(err);
                        }
                        files.forEach((item) => {
                            fs.copyFile(path.join(__dirname, 'files', item), path.join(__dirname, 'files-copy', item),
                            (err) => {
                                if (err) {
                                    return console.error(err);
                                }
                            });
                        })
                    })
                })
        })
};

copyDir();