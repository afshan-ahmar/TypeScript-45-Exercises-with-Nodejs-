// to create an array of guestlist

let guestList = ["IBRAHIM","HUZAIFA","MUSTAFA","AHMAR"];

// making variable those guest  who cant come

let dontCome = guestList[0];

//print message with guestname

console.log(dontCome,"I couldn't come at ur dinner");

// add or remove values of guestlist  array

guestList.splice(0,1,"USMAN");

// printing message for bigger table

console.log("GOOD NEWS! We have found a bigger table for dinner");

// adding a new value of starting index of array

guestList.unshift("ALI");

//Adding a new value at ending index of array

guestList.push("ZORAYS");

//ADDING A NEW GUEST AT middle index

let middleIndex : number = Math.floor(guestList.length / 2);

//Ading a new guest at middle of the array

guestList.splice(middleIndex, 0, "usman");

console.log("updated list of our guest");

guestList.forEach(oneguest => console.log(`Salam ${oneguest},would u like to dinner with me`));

console.log("Unfortunately, the new dinner table wont arrive on time,so i can  only  invite two guests to dinner with me");
//while loop remove guests from the array until only two names remain
while(guestList.length > 2)
{
    let removeGuest = guestList.pop();
    console.log(`sorry,${removeGuest} I cant invite you to dinner`);
}
console.log("invitations to the last 2 guests");
guestList.forEach(lasttwo => console.log(`luckily ${lasttwo},you are still invited to dinner`));
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("empty List:",guestList);