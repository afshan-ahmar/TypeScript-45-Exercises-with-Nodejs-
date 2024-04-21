function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//function to make magician great
function make_great(magicians:string[]){
   return magicians.map(name =>`the great  ${name}`);
}
let magicians_names = ["Harry potter", "Hamza", "Usman"]
//call make_great function to modify magicians
let great_magicians = make_great(magicians_names);

//console.log(great_magicians);
//call show magician functions modifying list of magician
show_magicians(great_magicians);
