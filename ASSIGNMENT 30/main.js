var userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
//using for each loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("hello $(oneUser),would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(oneUser, ",thank you for logging im again"));
    }
});
