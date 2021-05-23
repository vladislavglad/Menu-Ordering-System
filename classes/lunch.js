const Meal = require("./meal");

class Lunch extends Meal{

    static MENU_ITEMS = {
        1 : "Salad",
        2 : "Chips",
        3 : "Soda"
    };

    constructor(encodedOrder) {
        super(Lunch.MENU_ITEMS, encodedOrder);
    }

}

// let o = new Lunch("1,2,3");
// console.log(o.toString());

module.exports = Lunch;
