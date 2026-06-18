/*
13. Mobile Contacts List 
Scenario: 
A mobile app stores contact names. 
Question: 
Declare an array with "Ram", "Shyam", "Mohan" and: 
1. Add "Sita" at the beginning  
2. Remove the last contact  
3. Extract only the first 2 contacts  
*/

let mobileApp=["Ram", "Shyam", "Mohan"];
console.log(mobileApp); //[ 'Ram', 'Shyam', 'Mohan' ]

//Add "Sita" at the beginning 
mobileApp.unshift("Sita");
console.log(mobileApp); //[ 'Sita', 'Ram', 'Shyam', 'Mohan' ]

//Remove the last contact 
let delete1=mobileApp.pop();
console.log(delete1); //Mohan

//Extract only the first 2 contacts  
let extract=mobileApp.slice(0,2);
console.log(extract); //[ 'Sita', 'Ram' ]
