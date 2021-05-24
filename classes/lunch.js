const Meal = require("./meal");

/**
 * Objects of this class represent a lunch order
 * with its appropriate constraints.
 */
class Lunch extends Meal{

    static MENU_ITEMS = {
        1 : "Salad",
        2 : "Chips",
        3 : "Soda"
    };

    // Super class does all the heavy lifting!
    constructor(encodedOrder) {
        super(Lunch.MENU_ITEMS, encodedOrder);
    }

    // Validation specific to "Lunch" order.
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

module.exports = Lunch;
