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
console.log("Unfortunately, the new dinner table wont arrive on time,so i can  only  invite two guests to dinner with me");
//while loop remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry,".concat(removeGuest, " I cant invite you to dinner"));
}
console.log("invitations to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ",you are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("empty List:", guestList);
