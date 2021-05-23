class Meal {
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
        this.orderItems = new Map();

        for (const itemCode of encodedItems) {
            const item = this.menu[itemCode];

            if (this.orderItems.has(item)) {
                this.orderItems.set(item, this.orderItems.get(item) + 1);
            } else {
                this.orderItems.set(item, 1);
            }
        }

    }

    hasMain() {
        return this.orderItems.has(this.menu["1"]);
    }

    hasSide() {
        return this.orderItems.has(this.menu["2"]);
    }

    hasDrink() {
        return this.orderItems.has(this.menu["3"]);
    }

    hasOnlyOneMain() {
        return this.orderItems.get(this.menu["1"]) === 1;
    }

    hasOnlyOneSide() {
        return this.orderItems.get(this.menu["2"]) === 1; 
    }

    toString() {

        // Ensure that main is selected.
        if (!this.hasMain())
            return "Unable to process: Main is missing";
        
        // Ensure that side is selected.
        if (!this.hasSide())
            return "Unable to process: Side is missing";

        // Build out our string with order.
        let str = "";
        for (const [item, ammount] of this.orderItems) {
            str += `${item}${ammount > 1 ? `(${ammount}), ` : ", "}`;
        }

        // If no drink, add water to the order.
        if (!this.hasDrink())
            return str += "Water";

        return str.substring(0, str.length-2);
    }
}

module.exports = Meal;