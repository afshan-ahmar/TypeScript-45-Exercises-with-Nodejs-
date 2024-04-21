//array of current users
var current_users = ["usman", "Ali", "areeba", "zain", "Osama"];
//array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Areeja", "Mustafa"];
//loop through new users
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, "is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
