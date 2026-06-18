/*
14. Sports Team Selection 
Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
1. Add "Hardik" to the team  
2. Replace "Gill" with "KL Rahul"  
3. Display players in reverse order 
*/

let team =["Virat", "Rohit", "Gill"];
console.log(team); //[ 'Virat', 'Rohit', 'Gill' ]

//Add "Hardik" to the team 
team.push("Hardik");
console.log(team); //[ 'Virat', 'Rohit', 'Gill', 'Hardik' ]

//Replace "Gill" with "KL Rahul" 
let replace=team.splice(2,1,"KL Rahul");
console.log(replace); //[ 'Gill' ]

//Display players in reverse order 
let reverse = team.reverse();
console.log(reverse); //[ 'Hardik', 'KL Rahul', 'Rohit', 'Virat' ]
