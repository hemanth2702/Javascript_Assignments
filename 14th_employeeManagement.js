/*
1. Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
1. Add "Sneha" to the employee list  
2. Remove the last employee from the list  
3. Add "Manager" at the beginning of the list  
4. Remove the first employee from the list

*/

let ems=["rahul","priya","Amith"];

console.log(ems);//[ 'rahul', 'priya', 'Amith' ]

ems.push("sneha");
console.log(ems); //[ 'rahul', 'priya', 'Amith', 'sneha' ]

let delete1=ems.pop();
console.log(delete1); //sneha


ems.unshift("Manager");
console.log(ems); //[ 'Manager', 'rahul', 'priya', 'Amith' ]

let delete2=ems.shift();
console.log(delete2); //Manager
