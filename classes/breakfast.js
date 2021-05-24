const Meal = require("./meal");

/**
 * Objects of this class represent a breakfast order
 * with its appropriate constraints.
 */
class Breakfast extends Meal {

    static MENU_ITEMS = {
        1 : "Eggs",
        2 : "Toast",
        3 : "Coffee"
    };

    // Super class does all the heavy lifting!
    constructor(encodedOrder) {
        super(Breakfast.MENU_ITEMS, encodedOrder);
    }

    // Validation specific to "Breakfast" order.
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

module.exports = Breakfast;
