/*
4. Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string  
*/

let food=["pizza","Burger","Pasta"];
console.log(food);

//Add "Sandwich" to the orders  
let addFood=food.splice(1,0,"Sandwich");
console.log(food);

//Remove the first order 
let remove=food.shift();
console.log(remove);

//Display all orders as a comma-separated string 
let string=food.join(" "+ ",");
console.log(string);
