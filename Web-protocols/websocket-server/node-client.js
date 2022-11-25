const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:3007");




setInterval(() => {
    ws.send("Hello");
}, 3000);