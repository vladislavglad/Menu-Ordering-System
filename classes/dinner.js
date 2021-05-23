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

    handleDefaultDrink(str) {
        
        str = str.split(", ");

        // "Water" was added because order did not contain a drink
        if (str.indexOf(Meal.DEFAULT_DRINK) !== -1) { 
            str.splice(2, 0, Meal.DEFAULT_DRINK);

            // "representAsStr()" pushes default drink at the end 
            // we need to remove it, since we took care of it!
            str.pop();
        } 

        // Drink was ordered, still add water into an appropriate spot!
        else 
            str.splice(3, 0, Meal.DEFAULT_DRINK);
        
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

// let o = new Dinner("1,2,3,4");
// console.log(o.toString());

module.exports = Dinner;
