let productName = prompt("Enter Product Name: ");
let productPrice = Number(prompt("Enter Product Price: "));
let productQty = Number(prompt("Enter Product Qty: "));
let subtotal = (productPrice*productQty);
let salesTax = (subtotal*.0725);
let grandTotal = (salesTax+subtotal).toFixed(2);



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