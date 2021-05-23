class Breakfast {

    static ITEM_ONE = "Eggs";
    static ITEM_TWO = "Toast";
    static ITEM_THREE = "Coffee";

    constructor(encodedOrder) {

        // Encoded order is in comma separated format
        // Ex: 3,2,1
        // Spliting would give us an array such as ["3","2","1"]
        this.encodedItems = encodedOrder.split(",");

        // We need to return items in the set order: meal, side, drink
        // Sorting an array ensures this property!
        this.encodedItems.sort();
    
        // We are using map to keep track of ammount of any particular item ordered.
        this.orderItems = new Map();

        for (const itemCode of this.encodedItems) {
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

    validate() {

    }

    toString() {
        let str = "";
        for (const [item, ammount] of this.orderItems) {
            str += `${item}${ammount > 1 ? `(${ammount}), ` : ", "}`;
        }

        return str.substring(0, str.length-2);
    }
}

module.exports = Breakfast;