//array of current users
let current_users = ["usman","Ali","areeba","zain","Osama"]

//array of new users
let new_users = ["Hamza","Ayesha","Ali","Areeja","Mustafa"]

//loop through new users

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
    if (our_condition){
        console.log(`sorry ${new_one_user}is already taken`)
    }else {
        console.log(`this username ${new_one_user} is available`)
    }
})