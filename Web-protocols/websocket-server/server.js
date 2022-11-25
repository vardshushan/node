const WebSocket = require("ws");

const WebSocketServer = new WebSocket.Server({
    port: 3007,
});

WebSocketServer.on("connection", (socket) => {
    socket.on("message", (msg) => {
        console.log("Received:", msg.toString());
        if (msg === "Hello") socket.send("World!");
    });
});