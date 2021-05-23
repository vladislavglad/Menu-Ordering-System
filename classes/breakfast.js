class Breakfast {

    static ITEM_ONE = "Eggs";
    static ITEM_TWO = "Toast";
    static ITEM_THREE = "Coffee";

    constructor(encodedOrder) {

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
            const item = this.decodeItem(itemCode);

            if (this.orderItems.has(item)) {
                this.orderItems.set(item, this.orderItems.get(item) + 1);
            } else {
                this.orderItems.set(item, 1);
            }
        }

    }

    decodeItem(itemCode) {
        switch(itemCode) {
            case "1":
                return Breakfast.ITEM_ONE;
            case "2":
                return Breakfast.ITEM_TWO;
            case "3":
                return Breakfast.ITEM_THREE;
            default:
                return "Undefined";
        }
    }

    hasMain() {
        return this.orderItems.has(Breakfast.ITEM_ONE);
    }

    hasSide() {
        return this.orderItems.has(Breakfast.ITEM_TWO);
    }

    hasDrink() {
        return this.orderItems.has(Breakfast.ITEM_THREE);
    }

    hasOnlyOneMain() {
        return this.orderItems.get(Breakfast.ITEM_ONE) === 1;
    }

    hasOnlyOneSide() {
        return this.orderItems.get(Breakfast.ITEM_TWO) === 1; 
    }

    validate() {

    }

    toString() {

        // Ensure that main is selected.
        if (!this.hasMain())
            return "Unable to process: Main is missing";
        
        // Ensure that side is selected.
        if (!this.hasSide())
            return "Unable to process: Side is missing";

        // Ensure that only one main is selected.
        if (!this.hasOnlyOneMain()) {
            return `Unable to process: ${Breakfast.ITEM_ONE} cannot be ordered more than once`;
        }

        // Ensure that only one side is selected.
        if (!this.hasOnlyOneSide()) {
            return `Unable to process: ${Breakfast.ITEM_TWO} cannot be ordered more than once`;
        }

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

module.exports = Breakfast;