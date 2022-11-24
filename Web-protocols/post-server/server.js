const http = require("http");
const fs = require("fs");
const path = require("path");
const form = fs.readFileSync(path.join(__dirname, "public", "form.html"));

//create server
http.createServer((req, res) => {
    if (req.method === "GET") {
        get(res);
        return;
    }
    if (req.method === "POST") {
        post(req, res);
        return;
    }
    error(405, res);
}).listen(3004); //listen 3004 port

/**
 * @param res
 */
function get(res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });
    res.end(form);
}

/**
 * @param req
 * @param res
 */
function post(req, res) {
    if (req.headers["content-type"] !== "application/x-www-form-urlencoded") {
        error(415, res);
        return;
    }
    let input = "";

    req.on("data", (chunk) => {
        input += chunk.toString();
    });

    req.on("end", () => {
        console.log(input);
        res.end(http.STATUS_CODES[200]);
    });

}

/**
 * @param code
 * @param res
 */
function error(code, res) {  //handle error
    res.statusCode = code;
    res.end(http.STATUS_CODES[code]);
}


