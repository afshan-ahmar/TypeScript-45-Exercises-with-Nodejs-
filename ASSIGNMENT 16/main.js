// to create an array of guestlist
var guestList = ["IBRAHIM", "HUZAIFA", "MUSTAFA", "AHMAR"];
// making variable those guest  who cant come
var dontCome = guestList[0];
//print message with guestname
console.log(dontCome, "I couldn't come at ur dinner");
// add or remove values of guestlist  array
guestList.splice(0, 1, "USMAN");
// printing message for bigger table
console.log("GOOD NEWS! We have found a bigger table for dinner");
// adding a new value of starting index of array
guestList.unshift("ALI");
//Adding a new value at ending index of array
guestList.push("ZORAYS");
//ADDING A NEW GUEST AT middle index
var middleIndex = Math.floor(guestList.length / 2);
//Ading a new guest at middle of the array
guestList.splice(middleIndex, 0, "usman");
console.log("updated list of our guest");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would u like to dinner with me")); });
