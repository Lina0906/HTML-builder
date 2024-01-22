const fs = require("fs");
const path = require("path");

const { stdin, stdout } = process;
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');
stdout.write("Please, enter text\n");
stdin.on("data", (data) => {
  const text = data.toString();
    if (text.toLowerCase() === ".exit\r\n") {
      process.exit();
    }
  output.write(`${text}`);
});
process.on('SIGINT', () => {  
  process.exit();
});
process.on("exit", () =>  stdout.write("Goodbye!"));