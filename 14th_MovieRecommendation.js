/*
7. Movie Recommendation App 
Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
1. Add "Interstellar" to the movie list  
2. Replace "Titanic" with "Jawan"  
3. Convert all movie names into a single string separated by "-"  
*/

let movie=["Inception", "Avatar", "Titanic"];
console.log(movie); //[ 'Inception', 'Avatar', 'Titanic' ]

//Add "Interstellar" to the movie list 
let addlist=movie.splice(1,0,"Interstellar");
console.log(movie); //[ 'Inception', 'Interstellar', 'Avatar', 'Titanic' ]

//Convert all movie names into a single string separated by "-"  
let string=movie.join(" "+"-");
console.log(string); //Inception -Interstellar -Avatar -Titanic
