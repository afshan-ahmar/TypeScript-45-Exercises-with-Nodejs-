//defina a function with a rest parameter that accept  items
function makeSandwich(...items:string[]){
    console.log("Making a sandwich with the following items:\n")
    items.forEach(singleitem => console.log(singleitem));
    console.log("\n Now Enjoy Sandwich");
}

//call  the functions 3 times with 3 arguments

makeSandwich("Chicken","Cheese","Mayo","EGG");

makeSandwich("Bread","butter");

makeSandwich("Bread","Butter","Chicken","Egg","Lettuce","Cucumber");