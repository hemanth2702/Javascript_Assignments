/*
9. Online Course Platform 
Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
1. Remove the first course  
2. Add "TypeScript" at the beginning  
3. Extract only the last 2 courses 

*/

let course=["JavaScript", "Playwright", "Cypress"];
console.log(course);

//Remove the first course 
course.shift();
console.log(course);

//Add "TypeScript" at the beginning
course.unshift("Typescript");
console.log(course);


//Extract only the last 2 courses 
let lastCourse=course.slice(1,3);
console.log(lastCourse);
