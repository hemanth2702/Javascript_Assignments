/*
2. Shopping Cart Application 
Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | " 
*/

let cart=["Mobile","laptop","Mouse"];
console.log(cart); //[ 'Mobile', 'laptop', 'Mouse' ]

//Add "Keyboard" to the cart.  
cart.push("keyboard");
console.log(cart); //[ 'Mobile', 'laptop', 'Mouse', 'keyboard' ]


//Display all products in reverse order
console.log(cart.reverse());  //[ 'keyboard', 'Mouse', 'laptop', 'Mobile' ]

//Convert all cart items into a single string separated by " | " 
let string= cart.join(" "+ " | ");
console.log(string); //keyboard  | Mouse  | laptop  | Mobile
console.log(typeof string); //string

