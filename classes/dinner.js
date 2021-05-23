const Meal = require("./meal");

class Dinner extends Meal {

    static MENU_ITEMS = {
        1 : "Steak",
        2 : "Potatoes",
        3 : "Wine",
        4: "Cake"
    };

    constructor(encodedOrder) {
        super(Dinner.MENU_ITEMS, encodedOrder);
    }

}

// let o = new Dinner("1,2,3,4");
// console.log(o.toString());

module.exports = Dinner;
