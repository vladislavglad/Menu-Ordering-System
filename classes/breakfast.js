class Breakfast {

    static ITEM_ONE = "Eggs";
    static ITEM_TWO = "Toast";
    static ITEM_THREE = "Coffee";

    constructor(order) {
        this.order = [];

        for (const itemCode of order) {
            this.order.push(this.decodeItem(itemCode));
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

    toString() {
        return JSON.stringify(this.order);
    }
}

// let b = new Breakfast("123");
// console.log(b);

module.exports = Breakfast;