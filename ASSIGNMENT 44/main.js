//defina a function with a rest parameter that accept  items
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\n Now Enjoy Sandwich");
}
//call  the functions 3 times with 3 arguments
makeSandwich("Chicken", "Cheese", "Mayo", "EGG");
makeSandwich("Bread", "butter");
makeSandwich("Bread", "Butter", "Chicken", "Egg", "Lettuce", "Cucumber");
