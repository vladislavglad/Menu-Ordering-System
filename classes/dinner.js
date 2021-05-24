const Meal = require("./meal");

/**
 * Objects of this class represent a dinner order
 * with its appropriate constraints.
 */
class Dinner extends Meal {

    static MENU_ITEMS = {
        1 : "Steak",
        2 : "Potatoes",
        3 : "Wine",
        4 : "Cake"
    };

    // Super class does all the heavy lifting!
    constructor(encodedOrder) {
        super(Dinner.MENU_ITEMS, encodedOrder);
    }

    // Dinner must have a desert!
    hasDeseret() {
        return this.orderItems.has(Dinner.MENU_ITEMS["4"]);
    }

    // Validation specific to "Dinner" order.
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

    // Makeing sure that we always serve DEFAULT_DRINK ("Water")
    // And order it as needed: "main", "side", "drink", "desert"
    handleDefaultDrink(str) {
        
        // Get the array of values - strings.
        str = str.split(", ");

        // In this case: "Water" was added because order did not contain a drink
        if (str.indexOf(Meal.DEFAULT_DRINK) !== -1) { 

            // Place water in the appropriate place.
            str.splice(2, 0, Meal.DEFAULT_DRINK);

            // "representAsStr()" pushes default drink at the end 
            // we need to remove it, since we took care of it!
            // (in the previous statement)
            str.pop();
        } 

        // Drink was ordered, we still need to add water into an appropriate spot!
        else 
            str.splice(3, 0, Meal.DEFAULT_DRINK);
        
        // Build and returns a single string from array of Strings.
        return str.join(", ");
    }

    toString() {
        // Get the general represenation of the string (from super class)
        let str = super.representAsStr(this.validate());

        // If there is an error code, report it as is!
        if (str.indexOf("Unable") !== -1)
            return str;

        return this.handleDefaultDrink(str);
    }

}

module.exports = Dinner;
