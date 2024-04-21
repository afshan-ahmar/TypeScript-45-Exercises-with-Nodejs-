function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
//function to make magicians great through.map
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
//define an array of magicians name
let magician_names = ["Harry Potter", "Hamza","Usman"];

//making a copy of original array through.slice()function
let copy_magician_names = magician_names.slice()

//modify the copied array to include "the great" with their names
let copy_great_magician = make_great(copy_magician_names);

//show both arrays original and copied

//original
console.log("original Arrays\n");
show_magicians(magician_names);

//copied
console.log("\ncopied Array\n")
show_magicians(copy_great_magician);
