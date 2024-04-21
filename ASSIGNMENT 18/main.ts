// making an array of countries in its original order
let countriesToVisit:string[] = ["China", "Denmark", "Brazil", "Argentina"];

//print the array in original order

console.log("Original Order:",countriesToVisit);

//print the array in alphabetical order wiyhout modifying actual order

console.log("Alphabetical Order:", [...countriesToVisit.sort()]);

//show that the array in originak order

console.log("still in original order:",countriesToVisit);

//print the array in reverse order

console.log("Reverse order",[...countriesToVisit].reverse());

//show that the array in still in original order

console.log("still in its original order",countriesToVisit);

//we have changed original order of array

console.log("Original array is reversed",countriesToVisit.reverse());

console.log("Back to its original order",countriesToVisit.reverse());

//print the array to show its original order has been changed in alphabetical order

console.log("Sorted in Alphabetical order",countriesToVisit.sort());

//we  have changed the original order again

console.log("Original array reversed again",countriesToVisit.reverse());



