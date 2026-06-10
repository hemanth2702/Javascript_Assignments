//Write a JavaScript program to check whether a number is even or odd. 

let a = 21;
if(a%2==0){
 console.log(a + " is an even number")
}else{
    console.log(a + " is an odd number")
}  

 /*
Assignment2: 
Problem: 
Print the day of the week based on number (1–7). 
What you will use here? If-else or switch case? 
 */


let day =7;
switch(day){

    case 1: console.log("Sunday");
    break;
    case 2: console.log("Monday") 
    break;
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("Wednesday");
    break;
    case 5: console.log("Thursday");
    break;
    case 6: console.log("Friday");
    break;
    case 7: console.log("Saturday");
    break;
    default: console.log(" Invalid input! please enter a number between 1 and 7");

}

/*
Assignment3: 
Problem: 
Print all even numbers between 1 and 50. 
*/

for(let i=1; i<=50;i++){
    if(i%2==0){
        console.log(i);
        i++;
    }
    
}

/*
Assignment4: 
Problem: 
Reverse a number using a loop. 
Input:1234 
Output:4321 

*/

let rev = 1234;
let rev1 = 1234;
let reversedNumber = 0;
while(rev>0){
    let result = rev%10;
    reversedNumber = reversedNumber*10 + result;
    rev = Math.floor(rev/10);
}
console.log("Number before reversing: " + rev1); //1234
console.log("Number agter reveresing: " + reversedNumber); //4321

/*
Assignment5: 
Problem: 
Check whether a number is prime or not. 
*/

