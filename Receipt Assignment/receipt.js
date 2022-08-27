let productName = prompt("Enter Product Name: ");
let productPrice = Number(prompt("Enter Product Price: "));
let productQty = Number(prompt("Enter Product Qty: "));
let subtotal = (productPrice*productQty);
let salesTax = parseFloat(subtotal*.0725).toFixed(2);
let grandTotal = parseFloat(salesTax+subtotal).toFixed(2);

console.log(productName);
console.log(productPrice);
console.log(productQty);
console.log(subtotal);
console.log(salesTax);
console.log(grandTotal);

document.getElementById("product-info").innerHTML=`
    <h2> Receipt </h2>
    <hr>
    <p>Product Name: ${productName}</p>
    <p>Product Price: ${productPrice}</p>
    <p>Product Qty: ${productQty}</p>
    <p>Subtotal: ${subtotal}</p>
    <p>Sales Tax (7.25%): ${salesTax}</p>
    <hr>
    <p>Grand Total: ${grandTotal}</p>

`;