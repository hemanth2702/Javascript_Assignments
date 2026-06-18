/*
12. Daily Tasks Planner 
Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
1. Add "Meeting" to the task list  
2. Remove the first task  
3. Reverse all tasks  
4. Display all tasks in a single string separated by " -> "  
*/

let planner=["Wake Up", "Exercise", "Study"];
console.log(planner); //[ 'Wake Up', 'Exercise', 'Study' ]

//Add "Meeting" to the task list 
planner.push("Meeting");
console.log(planner); //[ 'Wake Up', 'Exercise', 'Study', 'Meeting' ]

//Remove the first task 
let remove = planner.shift();
console.log(remove); //Wake Up

//Reverse all tasks 
let reverse = planner.reverse()
console.log(reverse); //[ 'Meeting', 'Study', 'Exercise' ]

//Display all tasks in a single string separated by " -> " 
let string = planner.join(" "+ "->");
console.log(string); //Meeting ->Study ->Exercise
