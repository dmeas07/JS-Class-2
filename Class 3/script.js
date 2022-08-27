// function greet(name){
//     return "Hello" + name + "!";
// }
// let greeting1=greet("Eric");
// let greeting2=greet("Alvin");

// console.log(greeting1);
// console.log(greeting2);

// function sum(a,b){
//     return a+b;
// }

// let result=sum(5,4);
// console.log(result);
// sum(6,3);
// sum(8,1);

// Define a function named muliply Three which acceipts a number and return that number muliplied by 3
// display the result on the console


function muliplyThree(a){
    return a*3;
}

console.log(muliplyThree(5));

let subtotal=0;

function addCart(price){
    return subtotal += price;
}

subtotal = addCart(100);
subtotal = addCart(400);
subtotal = addCart(600);

console.log(subtotal);

function calculateTaxes(subtotal){
    return .0725*subtotal;
}

console.log(subtotal);

let total = calculateTaxes(subtotal);
console.log(`The total is $ ${total}`);