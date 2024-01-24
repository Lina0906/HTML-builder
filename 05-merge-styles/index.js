const fs = require("fs");
const path = require("path");

const bundle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'), 'utf-8');

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach((file) => {
        if (file.isFile()) {           
           if (path.extname(path.join(__dirname, 'styles', file.name)) === '.css') {
               const readFile = fs.createReadStream(path.join(__dirname, 'styles', file.name));
               let text = '';
               readFile.on('data', (chunk) => {
                   text = text + chunk.toString() + '\n';
                   bundle.write(text);
               })
           }
       }
   })
})