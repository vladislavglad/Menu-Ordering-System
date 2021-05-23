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

    validate() {
        let errors = super.generalValidate();

        if (super.hasMultipleMains())
            errors.push(`${Lunch.MENU_ITEMS["1"]} cannot be ordered more than once`);
        
        if (super.hasMultipleDrinks())
            errors.push(`${Lunch.MENU_ITEMS["3"]} cannot be ordered more than once`);

        return errors;
    }

    toString() {
        return super.representAsStr(this.validate());
    }

}

// let o = new Lunch("1,2,3");
// console.log(o.toString());

module.exports = Lunch;
