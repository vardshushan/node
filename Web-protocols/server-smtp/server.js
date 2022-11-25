const SMTPServer = require("smtp-server").SMTPServer;
const PORT = 4322;

const server = new SMTPServer({
    disabledCommands: ["STARTTLS", "AUTH"],
    logger: true,
});

server.on("error", (err) => {
    console.error(err);
}).listen(PORT);