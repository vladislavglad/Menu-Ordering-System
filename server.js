const express = require("express");
const open = require("open");
const app = express();

const PORT = 3000;
const URL = `http://127.0.0.1:${PORT}`;

const Breakfast = require("./classes/breakfast");
const Lunch = require("./classes/lunch");
const Dinner = require("./classes/dinner");

app.get("/", (req, res) => {
    res.send(`Place your order with something like: ${URL}/breakfast/1,2,3`);
});

app.get("/breakfast", (req, res) => {
    res.send(`Provide arguments such as ${URL}/breakfast/1,2,3`);
});

app.get("/breakfast/:order", (req, res) => {
    let breakfastOrder = new Breakfast(req.params.order);
    console.log(`got breakfast order: ${breakfastOrder}`);
    res.send(breakfastOrder.toString());
});

app.get("/lunch", (req, res) => {
    res.send(`Provide arguments such as ${URL}/lunch/1,2,3`);
});

app.get("/lunch/:order", (req, res) => {
    let lunchOrder = new Lunch(req.params.order);
    console.log(`got lunch order: ${lunchOrder}`);
    res.send(lunchOrder.toString());
});

app.get("/dinner", (req, res) => {
    res.send(`Provide arguments such as ${URL}/dinner/1,2,3,4`);
});

app.get("/dinner/:order", (req, res) => {
    let dinnerOrder = new Dinner(req.params.order);
    console.log(`got dinner order: ${dinnerOrder}`);
    res.send(dinnerOrder.toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on ${URL}`);

    //opens the url in the default browser 
    open(URL);
});
