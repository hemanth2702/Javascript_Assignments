/*
6. QA Test Case Management 
Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
1. Create another copy of the same array  
2. Extract only the first 2 test cases  
3. Display test cases in reverse order  

*/

let qatest=["LoginTest", "PaymentTest", "SearchTest"];
console.log(qatest);

//Create another copy of the same array
let qatest1=[...qatest];
console.log(qatest1);

//Extract only the first 2 test cases 
let extract=qatest.slice(0,2);
console.log(extract);

//Display test cases in reverse order 
let reverse = qatest.reverse();
console.log(reverse);

