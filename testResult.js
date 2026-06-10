/*
Assignment 6: 
Problem: Write .js script that evaluates a test case result based on HTTP 
response status code the program should use Nester if..else statements to 
determine result message.  
Instructions:  
1.create a new file named testResult.js Inside the file declare variable to store 
status code Let responseCode=200;  
2.use if else Nested statements to evaluate response code and print status 
message  
3.Use the following logic for result evaluation: I 
f response Code is 100-199→print: Informational  
If response Code is 200-299→print: successful  
If response Code is 300-399→print: Redirectional  
If response Code is 400-499 →print: Client Error 
If response Code is 500-599→print: Server Error For any other code →print 
Unkown Status code  
4.Run script using node testResult.js  
*/
let statusCode = 400;
if(statusCode>=100 && statusCode<=199){
    console.log(statusCode +"is Informational");
}
        if(statusCode >=200 && statusCode<=299){
            console.log(statusCode +" is successful");
        } else{
        if(statusCode>=300 && statusCode<=399){
            console.log(statusCode +" is Redirectional");
        } else{
        if(statusCode>=400 && statusCode<=499){
            console.log(statusCode +" is client error");
        } else{
        if(statusCode>=500 && statusCode<=599){
            console.log(statusCode +" is server error");
        }
            else{
            console.log(" is unknown status code");
            
        }
    }
}
        }
    

        