const Meal = require("./meal");

class Dinner extends Meal {

    static MENU_ITEMS = {
        1 : "Steak",
        2 : "Potatoes",
        3 : "Wine",
        4 : "Cake"
    };

    constructor(encodedOrder) {
        super(Dinner.MENU_ITEMS, encodedOrder);
    }

    hasDeseret() {
        return this.orderItems.has(Dinner.MENU_ITEMS["4"]);
    }

    validate() {
        let errors = super.generalValidate();

        if (super.hasMultipleMains())
            errors.push(`${Dinner.MENU_ITEMS["1"]} cannot be ordered more than once`);
        
        if (super.hasMultipleSides())
            errors.push(`${Dinner.MENU_ITEMS["2"]} cannot be ordered more than once`);

        if (super.hasMultipleDrinks())
            errors.push(`${Dinner.MENU_ITEMS["3"]} cannot be ordered more than once`);

        if (!this.hasDeseret())
            errors.push("Dessert is missing");

        return errors;
    }

    toString() {
        return super.representAsStr(this.validate());
    }

}

// let o = new Dinner("1,2,3,4");
// console.log(o.toString());

module.exports = Dinner;
