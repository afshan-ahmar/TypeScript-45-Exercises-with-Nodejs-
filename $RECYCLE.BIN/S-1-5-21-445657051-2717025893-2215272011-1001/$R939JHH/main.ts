let guestList = ["afshan","ayesha,"areeba","fatima"];
let dontCome = guestList[0];
console.log(dontCome, "nai a sakti");
guestList.splice(0,1,"ARIJA");
guestList.forEach(guest => console.log(`salam ${guest},would u like to take dinner with me?`));
