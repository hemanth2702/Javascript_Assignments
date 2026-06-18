/*
3. Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order  

*/

let tab=["Google","Youtube","ChatGPT"];

console.log(tab); //[ 'Google', 'Youtube', 'ChatGPT' ]


//Close the last opened tab 
let delete1= tab.pop();
console.log(delete1); //ChatGPT

//Add "GitHub" as the first tab  
tab.unshift("GitHub");
console.log(tab);  //[ 'GitHub', 'Google', 'Youtube' ]

//Display tabs in reverse order  
let reverese= tab.reverse();
console.log(reverese); //[ 'Youtube', 'Google', 'GitHub' ]


