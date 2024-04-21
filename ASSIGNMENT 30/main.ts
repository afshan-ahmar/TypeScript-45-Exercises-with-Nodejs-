let userNames = ["Mahad","Ali","Zeeshan","Admin","Usman"];
//using for each loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`hello $(oneUser),would you like to see a status report?`)
    }else {
        console.log(`hello ${oneUser},thank you for logging in again`)
    }
    }
)