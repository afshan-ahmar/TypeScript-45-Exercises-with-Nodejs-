function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great  ".concat(name); });
}
var magicians_names = ["Harry potter", "Hamza", "Usman"];
var great_magicians = make_great(magicians_names);
//console.log(great_magicians);
show_magicians(great_magicians);
