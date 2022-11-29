import express from "express";

const app = express();

app.use((req, res, next) => {
    next();
});


app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
    req.redirect("/index.html");
});

app.get('/yay', (req, res) => {
    res.send('Yay');
});

app.get('/bye', (req, res) => {
    res.send({
        name: 'Bye'
    });
});

app.post('/hi', (req, res) => {
    console.log(req.body.name);
    res.send('Hi');
});

app.listen(3001);