/*
15. Real-Time Automation Framework Scenario 
Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
1. Add "ProfileFail"  
2. Remove the first failed test  
3. Create another copy of the failed tests array  
4. Extract only the first 2 failed tests  
5. Replace "CheckoutFail" with "PaymentFail"  
6. Convert all failures into a single comma-separated string 
*/

let app=["LoginFail", "CheckoutFail", "SearchFail"];
console.log(app);

//Add "ProfileFail"  
app.push("ProfileFail");
console.log(app);

//Remove the first failed test  
let remove = app.shift();
console.log(app);

//Create another copy of the failed tests array 
let app2=[...app];
console.log(app2);

//Extract only the first 2 failed tests 
let extract = app.slice(0,2);
console.log(extract);

//Replace "CheckoutFail" with "PaymentFail"
let replace= app.splice(1,1,"PaymentFail");
console.log(app);

//Convert all failures into a single comma-separated string 
let reverese = app.join(" "+",");
console.log(reverese);
