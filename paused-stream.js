const fs = require("fs");
const rs = fs.createReadStream("./file.txt");

rs.on("readable", () => {
    // Read data
});