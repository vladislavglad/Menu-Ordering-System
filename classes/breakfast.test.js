const Meal = require("./meal");
const Breakfast = require("./breakfast");
const menu = Breakfast.MENU_ITEMS;

test("making sure items are decoded properly", () => {
    let o = new Breakfast("1,2,3");
    expect(o.toString()).toEqual(`${menu["1"]}, ${menu["2"]}, ${menu["3"]}`);
});

test("making sure the output is in the appropriate order", () => {
    let o = new Breakfast("3,2,1");
    expect(o.toString()).toEqual(`${menu["1"]}, ${menu["2"]}, ${menu["3"]}`);
});

test("making sure correct quantity is returned", () => {
    let o = new Breakfast("1,2,3,3,3");
    expect(o.toString()).toEqual(`${menu["1"]}, ${menu["2"]}, ${menu["3"]}(3)`);
});

test("making sure at least one main is selected", () => {
    let o = new Breakfast("2,3");
    expect(o.toString()).toEqual("Unable to process: Main is missing");
});

test("making sure at least one side item is selected", () => {
    let o = new Breakfast("1,3");
    expect(o.toString()).toEqual("Unable to process: Side is missing");
});

test("if no main and no side is selected", () => {
    let o = new Breakfast("");
    expect(o.toString()).toEqual("Unable to process: Main is missing, Side is missing");
});

test("making sure that DEFAULT_DRINK is added", () => {
    let o = new Breakfast("1,2");
    expect(o.toString()).toEqual(`${menu["1"]}, ${menu["2"]}, ${Meal.DEFAULT_DRINK}`);
});

test("making sure no more than 1 main is ordered", () => {
    let o = new Breakfast("1,1,2");
    expect(o.toString()).toEqual(`Unable to process: ${menu["1"]} cannot be ordered more than once`);
});

test("making sure no more than 1 side is ordered", () => {
    let o = new Breakfast("1,2,2");
    expect(o.toString()).toEqual(`Unable to process: ${menu["2"]} cannot be ordered more than once`);
});
