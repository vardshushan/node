const fs = require("fs");

const file = fs.createWriteStream("./file.txt");

for (let i = 0; i <= 1000000; i++) {
    file.write('node is a js runtime built on Google chrome V8 engine.');
}