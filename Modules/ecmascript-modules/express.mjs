const PORT = 3000;
const app = express();
app.get("/", (req, res) => res.send("Hello from Express!"));
app.listen(PORT, () => {
    console.log("Express server started on port", PORT);
});
