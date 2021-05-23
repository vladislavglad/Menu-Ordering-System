const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Place your order");
})

app.get("/breakfast", (req, res) => {
    res.send("order breakfast")
});

app.get("/lunch", (req, res) => {
    res.send("order lunch")
});

app.get("/dinner", (req, res) => {
    res.send("order dinner")
});

app.listen(port, () => console.log("Server is running!"));
