/*
5. Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning  
2. Remove the last student from the list  
3. Create a separate copy of the attendance list  
*/

let student=["Ankit", "Riya", "Karan"];
console.log(student);

//Add "Neha" at the beginning 
student.unshift("Neha");
console.log(student);


//Remove the last student from the list  
let delete1 =student.pop();
console.log(delete1);

//Create a separate copy of the attendance list 
let student2=[...student];
console.log(student2);
