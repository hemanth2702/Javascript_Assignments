/*
8. Product Inventory Management 
Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
1. Remove "Tablet" from inventory  
2. Add "Smart Watch" after "Laptop"  
3. Create a duplicate copy of updated inventory 
*/

let product = ["Mobile", "Laptop", "Tablet", "Camera"];
console.log(product); //[ 'Mobile', 'Laptop', 'Tablet', 'Camera' ]

//Remove "Tablet" from inventory 
let remove=product.splice(2,1);
console.log(product); //[ 'Mobile', 'Laptop', 'Camera' ]

//Add "Smart Watch" after "Laptop" 
let add=product.splice(1,0,"Smart watch");
console.log(product); //[ 'Mobile', 'Smart watch', 'Laptop', 'Camera' ]

//Create a duplicate copy of updated inventory 
let duplicate=[...product];
console.log(duplicate);  //[ 'Mobile', 'Smart watch', 'Laptop', 'Camera' ]
