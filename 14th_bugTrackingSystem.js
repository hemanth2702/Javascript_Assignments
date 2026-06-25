/*
11. Bug Tracking System 
Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
1. Add "Bug104"  
2. Remove "Bug102"  
3. Create a copy of the bug list 
*/
let bugTrack =["Bug101", "Bug102", "Bug103"];
console.log(bugTrack); //[ 'Bug101', 'Bug102', 'Bug103' ]

//Add "Bug104" 
bugTrack.push("Bug104");
console.log(bugTrack); //[ 'Bug101', 'Bug102', 'Bug103', 'Bug104' ]

//Remove "Bug102"  
let remove =bugTrack.splice(1,1);
console.log(remove); //[ 'Bug102']

//Create a copy of the bug list 
let bugTrack1=[...bugTrack];
console.log(bugTrack1); //[ 'Bug101', 'Bug103', 'Bug104' ]
