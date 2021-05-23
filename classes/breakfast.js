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

    validate() {
        let errors = super.generalValidate();

        if (super.hasMultipleMains())
            errors.push(`${Breakfast.MENU_ITEMS["1"]} cannot be ordered more than once`);
        
        if (super.hasMultipleSides())
            errors.push(`${Breakfast.MENU_ITEMS["2"]} cannot be ordered more than once`);

        return errors;
    }

    toString() {
        return super.representAsStr(this.validate());
    }

}

// let o = new Breakfast("1,2,3");
// console.log(o.toString());

module.exports = Breakfast;