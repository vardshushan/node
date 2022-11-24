const http = require("http");
//get method
// http.get("http://example.com", (res) => res.pipe(process.stdout));

//post method
const payload = `{
"name": "Beth",
"job": "Software Engineer"
}`;

/**
 * @type {{path: string, headers: {"Content-Length": number, "Content-Type": string}, hostname: string, method: string}}
 */
const opts = {
    method: "POST", hostname: "postman-echo.com", path: "/post", headers: {
        "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload),
    },
};

/**
 * @type {ClientRequest}
 */
const req = http.request(opts, (res) => {
    process.stdout.write("Status Code: " + res.statusCode + "\n");
    process.stdout.write("Body: ");
    res.pipe(process.stdout);
});

req.on("error", (err) => console.error("Error: ", err));

req.end(payload);