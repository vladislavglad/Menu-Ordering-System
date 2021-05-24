/**
 * Common class that does heavy lifting.
 * Decodes food items based on the menu provided.
 * Does general validation of order.
 * Converts order to a string.
 */
class Meal {

    static DEFAULT_DRINK = "Water";

    // Extending classes provide menu objects 
    // that is used to decode menu items.
    constructor(menu, encodedOrder) {
        this.menu = menu;

        // Encoded order is in comma separated format
        // Ex: 3,2,1
        // Spliting would give us an array such as ["3","2","1"]
        let encodedItems = encodedOrder.split(",");

        // We need to return items in the set order: meal, side, drink
        // Sorting an array ensures this property!
        encodedItems.sort();
    
        // We are using map to keep track of ammount of any particular item ordered.
        // It is also great for fast lookups of items.
        this.orderItems = new Map();

        // Populate our map with items and their ammounts.
        for (const itemCode of encodedItems) {
            const item = this.menu[itemCode];

            if (this.orderItems.has(item)) {
                this.orderItems.set(item, this.orderItems.get(item) + 1);
            } else {
                this.orderItems.set(item, 1);
            }
        }

    }

    // Following methods are used for validation purposes.
    hasMain() {
        return this.orderItems.has(this.menu["1"]);
    }

    hasSide() {
        return this.orderItems.has(this.menu["2"]);
    }

    hasDrink() {
        return this.orderItems.has(this.menu["3"]);
    }

    hasMultipleMains() {
        return this.orderItems.get(this.menu["1"]) > 1;
    }

    hasMultipleSides() {
        return this.orderItems.get(this.menu["2"]) > 1; 
    }

    hasMultipleDrinks() {
        return this.orderItems.get(this.menu["3"]) > 1;
    }

    // General validation that is consistent with every order.
    generalValidate() {
        let errors = [];

        // Ensure that main is selected.
        if (!this.hasMain())
            errors.push("Main is missing");
        
        // Ensure that side is selected.
        if (!this.hasSide())
            errors.push("Side is missing");

        return errors;
    }

    // Converts a map to a string.
    // If some validation checks have failed, returns error message.
    representAsStr(errors) {

        // If there are errors.
        if (errors.length) 
            return "Unable to process: " + errors.join(", ");
        
        // Build out our string with order.
        let str = "";
        for (const [item, ammount] of this.orderItems) {
            str += `${item}${ammount > 1 ? `(${ammount}), ` : ", "}`;
        }

        // If no drink, add default drink to the order.
        if (!this.hasDrink())
            return str += Meal.DEFAULT_DRINK;

        // remove last ", "
        return str.substring(0, str.length-2);
    }
}

module.exports = Meal;