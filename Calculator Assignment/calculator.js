
function calculate(){
    let num1= Number(prompt("Enter Number 1"));
    let num2= Number(prompt("Enter Number 2"));
    sum(num1,num2);
    sub(num1,num2);
    muliply(num1,num2);
    divide(num1,num2);
}

function sum(a,b){
    document.getElementById("results").innerHTML=`<p>The sum is: ${a+b}</P>`;
}

function sub(a,b){
    document.getElementById("results").innerHTML+=`<p>The subtraction is: ${a-b}</P>`;
}

function muliply(a,b){
    document.getElementById("results").innerHTML+=`<p>The multiplication is: ${a*b}</P>`;
}

function divide(a,b){
    document.getElementById("results").innerHTML+=`<p>The division is: ${a/b}</P>`;
}



