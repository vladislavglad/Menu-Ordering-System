const Meal = require("./meal");

class Breakfast extends Meal {

    static MENU_ITEMS = {
        1 : "Eggs",
        2 : "Toast",
        3 : "Coffee"
    };

    constructor(encodedOrder) {
        super(Breakfast.MENU_ITEMS, encodedOrder);
    }

}

// let o = new Breakfast("1,2,3");
// console.log(o.toString());

module.exports = Breakfast;