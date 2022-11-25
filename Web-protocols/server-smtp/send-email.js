const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 4322,
});

transporter.sendMail(
    {
        from: "shushanvardanyan03@gmail.com",
        to: "shushanvardanian97@gmail.com",
        subject: "Hello",
        text: "Hello world!",
    },
    (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log("Message Sent:", info);
    }
);