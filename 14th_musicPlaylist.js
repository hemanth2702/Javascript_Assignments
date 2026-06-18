/*
10. Music Playlist Application 
Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
1. Display playlist in reverse order  
2. Remove the last song  
3. Add "NewSong" at the beginning  
4. Convert playlist into a single string  
*/

let song=["Song1", "Song2", "Song3"];
console.log(song); //[ 'Song1', 'Song2', 'Song3' ]

//Display playlist in reverse order 
let reverse=song.reverse();
console.log(reverse); //[ 'Song3', 'Song2', 'Song1' ]

//Remove the last song 
let remove= reverse.pop();
console.log(remove); //Song1

//Add "NewSong" at the beginning 
song.unshift("NewSong");
console.log(song); //[ 'NewSong', 'Song3', 'Song2' ]

//Convert playlist into a single string 
let string = song.join(" ");
console.log(string); //NewSong Song3 Song2
console.log(typeof string);

