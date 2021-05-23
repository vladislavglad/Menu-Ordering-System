const express = require("express");
const open = require("open");
const app = express();
const PORT = 3000;

const Breakfast = require("./classes/breakfast");

app.get("/", (req, res) => {
    res.send("Place your order");
})

app.get("/breakfast/:order", (req, res) => {
    /* Note: "order" is of type string.
    Plan: design a class that accepts a string
    that represents an order and then validates it. */
    let breakfastOrder = new Breakfast(req.params.order);
    console.log(`got breakfast order: ${breakfastOrder}`);
    res.send(breakfastOrder.toString());
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

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}/`);

    //opens the url in the default browser 
    open("http://127.0.0.1:3000/");
});
