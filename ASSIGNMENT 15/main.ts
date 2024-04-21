let guestList = ["afshan", "asra", "fatima","laiba"];
let dontCome = guestList[0];
console.log(dontCome, "nahi a sakti");
guestList.splice(0, 1, "Arija");
guestList.forEach(guest => console.log(`salam ${guest}, Would u like to dinner with me?`));