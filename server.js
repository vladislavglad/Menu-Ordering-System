const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Place your order");
})

app.get("/breakfast/:order", (req, res) => {
    /* Note: "order" is of type string.
    Plan: design a class that accepts a string
    that represents an order and then validates it. */
    const {order} = req.params;
    console.log(`got breakfast order: ${order}`);
    res.send(`here is your order: ${order}`);
});

app.get("/lunch/:order", (req, res) => {
    const {order} = req.params;
    console.log(`got lunch order: ${order}`);
    res.send(`here is your order: ${order}`);
});

app.get("/dinner/:order", (req, res) => {
    const {order} = req.params;
    console.log(`got dinner order: ${order}`);
    res.send(`here is your order: ${order}`);
});

app.listen(port, () => console.log("Server is running!"));
