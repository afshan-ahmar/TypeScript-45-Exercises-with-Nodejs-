var guestList = ["afshan", "asra", "fatima", "laiba"];
var dontCome = guestList[0];
console.log(dontCome, "nahi a sakti");
guestList.splice(0, 1, "Arija");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", Would u like to dinner with me?")); });
