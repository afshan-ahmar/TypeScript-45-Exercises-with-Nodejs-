let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
//test for equality and inequality with strings

console.log("is apple is equal to apple");
console.log(apple == "apple");

console.log("is apple is not equal to apple");
console.log(apple != "apple");

console.log("is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()== "apple");

console.log("\n Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()!= "apple");

//numerical test
console.log("\n Is  ten equal to twenty");
console.log(ten == twenty);

console.log("\n Is  ten not equal to twenty");
console.log(ten != twenty);

console.log("\n Is  ten greater than  twenty");
console.log(ten > twenty);

console.log("\n Is  ten smaller than to twenty");
console.log(ten < twenty);

console.log("\n Is  ten greater than or equal to twenty");
console.log(ten >= twenty);

console.log("\n Is  ten less than or equal  to twenty");
console.log(ten <= twenty);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty!= ten && twenty >10 );



console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty!= ten && twenty >30 );

console.log("\n twenty is not equal to 10 or twenty is greater than 10");
console.log(twenty!= ten || twenty >10 );

console.log("\n twenty is greater than 50 and twenty is equal to 20");
console.log(twenty >= 50 || twenty == 20 );








