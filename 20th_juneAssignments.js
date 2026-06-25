/*

1. How do you get all the keys of a JavaScript object? Which method do you use? 

    To get all the keys of a javaScript we use object.keys() method.

    related methods             Returns
    --------------------------------------------
    object.keys(obj)            Array of keys [id, name]
    object.values(obj)          Array of values [101, "jay"]
    object.entries(obj)         Array of [key,value] pairs [id:101, name:"jay"]

    example:
*/
let student ={
    id:101,
    name:"jay"
}

let keys = Object.keys(student);
console.log(keys); //[ 'id', 'name' ]

let values = Object.values(student);
console.log(values); //[ 101, 'jay' ]

let keyValues = Object.entries(student);
console.log(keyValues); //[ [ 'id', 101 ], [ 'name', 'jay' ] ]


// 2. Write a for...in loop to print all keys and values of an object. 

let mobile ={
    name: "samsung",
    model: "s23fe",
    series: "s"
}

for(let i in mobile){
    console.log(i + ":" + mobile[i]); //name:samsung  
                                      //model:s23fe
                                      //series:s
                                      //here i =key and mobile = value
    
}

/*
3. What is the difference between for...in and for...of?  

    for...in                                      for...of
    -----------------------------------------------------------------------------------------------
    1. Iterates over keys(property names )          1. Iterates over values.
    2. Mainly used for object                       2. Mainly used for arrays, strings, maps and sets.
    3. Returns the index when used with arrays      3. returns the actual element when used with arrays

    Example:
*/
//object example for for...in
let student={
    id:104,
    name:"jay",
    city: "Karnataka"
}

for(let i in student){
    console.log(i + ":" + student[i]);
    
}

//example for for...of loop
let fruits=["apple", "Mango","Banana"];
for(let i of fruits){
   // if we pass log inside loop output will print 3 times for each value
}
 console.log(fruits);//[ 'apple', 'Mango', 'Banana' ] if we pass log outside
                        // the loop it will print one time.

 //example for for...in index.
 let arr=[10,20,30,40];
 for(let i in arr){
    console.log(i); //0,1,2,3 here need to pass log statement inside loop to get all the 
                    //index values
 }                       

 //example for for...of loop values.
 let arr=[10,20,30,40];
 for(let i of arr){
    console.log(i); //10,20,30,40
 }

 /*4.  What does JSON.stringify() do? What type does it return? 
        It converts the JavaScript object into JSON format.
 */

        let student={
            id: 1010,
            name:"Hemanth",
            role: "QA"
        }

        let jsToJson = JSON.stringify(student);
        console.log(jsToJson); //{"id":1010,"name":"Hemanth","role":"QA"}
        console.log(typeof jsToJson); //string
        
/*
5. What does JSON.parse() do? What type does it return?  
        Json.parse() convert JSON string into JavaScript object.
*/       
let details=`{"id":1010,"name":"Hemanth","role":"QA"}`;

let jsonToJs = JSON.parse(details);
console.log(jsonToJs);        //{ id: 1010, name: 'Hemanth', role: 'QA' }
console.log(typeof jsonToJs); //object

/*
6. Write code to convert a JS object {name:'Tom', age:30} to a JSON 
string and print it.  
*/
let profile={
    name: "Tom",
    age: "30"
}
let jsToJson = JSON.stringify(profile);
console.log(jsToJson);      //{"name":"Tom","age":"30"}
console.log(typeof jsToJson); //string


/*
7. Write code to convert the JSON string back to a JS object and 
access the name property.  
        It converts the JavaScript object into JSON format.
 */

        let student={
            id: 1010,
            name:"Hemanth",
            role: "QA"
        }

        let jsToJson = JSON.stringify(student);
        console.log(jsToJson); //{"id":1010,"name":"Hemanth","role":"QA"}
        console.log(typeof jsToJson); //string

 
/*
8.  What is serialization? What is deserialization?  
        serialization:
        ---------------
        It is the process of converting a javaScript object into a 
        formate that can be stored or transmitted into JSON string. 

        serialization--> object-->string--> JSON.stringify(object)

        Deserialization:
        ----------------
        It is the process of converting JSON string back to the Js object.

        deserialization--> string-->object--> JSON.parse(object)
*/

/*
9. What happens when you set an object to null and then try to 
access its property?  
        When you set an object to null, the variable no longer points 
        to an object. If you then try to access the property it will throw an error.
*/
let student={
    id:"101",
    name:"hemanth"
}
student=null;
console.log(student);      //null
console.log(student.name); // TypeError: Cannot read properties of null

/*
10. What is the ?. (optional chaining) operator? How does it help 
with null objects?  
    Optional chaining operator(?.) allows you to safely access the properties or 
    methods of an object that refers to null or undefined.
    -Instead of throwing an error it will return undefined.
*/
let student={
    id:"101",
    name:"hemanth"
}
student=null;
console.log(student?.name); //undefined

/*
11. What is a function in JavaScript? Why do we use functions?
    -Group of statement we can write to perform functionality is called function.
                or
    - A block of reusable code that performs a specific task.
    - instead of writing the same code again and again we can add it inside the function and call 
    whenever it is needed.            
*/

/*
12. Write a simple function called greet that prints 'Hello World' and call it.
*/
function greet(){
    console.log("Hello World");
}
greet(); //Hello World


/*
13. What is the difference between parameters and arguments? 
    parameter                                               arguments
    -------------------------------------------------------------------------------------------
    1. variables listed in the function defination          1. Actual value passed to the function when it is called.
    2. Placeholder for data                                 2. real given data for function.
    3. Defined when creating the function.                  3. Supplied when calling the function.

    function greet(name){ //name is parameter
    console.log(name):
    }greet("hemanth");  //hemanth is the argument passed to parameter.
*/


//14.  Write a function that takes two numbers as input, adds them, and returns the result.  

function add(a,b){
    console.log("Addition of both numbers is: " + (a+b));
}add(5,5);  //Addition of both numbers is: 10


/*
15. What is call by value? Give a simple example. 
    call by value means that a copy of the variable's value is passed to a function.
    Any changes made to the parameter inside the function do not affect the original variable.
*/
function value(x){
    x=100;
    console.log(x);
}
let num = 10;
value(num);
console.log(num);

/*
16. What is the call stack? What happens when a function is called? 
    call stack is a data structure used by JavaScript to keep track on function calls.

    it works on the LIFO structure(Last in first out).
        - the last function added to the stack is the first one removed.
        - when the function is called it is pushed on to the stack.
        - when the function is finished it is popped out of the stack.

        function first(){
        console.log("first is calling...");
        }

        function second(){
        first();
        console.log("second is calling...")
        }
        second();

        step-by-step call stack
        ----------------------------
        1. initial state - global();
        2. second() is called.
        3. inside second(), first() is called.
        4. first executes and finishes and gives output.
        5. Then second() finishes and gives output.

*/

/*
17. What is heap memory? What kind of data is stored there?  
    Heap memory is a region of memory in Javascript where it stores object and reference type data.
        - unlike call stack heap memory doesnot follow any order like LIFO. it's a large pool of memory 
        used to store dynamic data storage.

        what kind of data stored in heap memory: object{},array[], maps,sets,dates and function.
        
        why use heap memory: object and array may be large and their size may change during execution of program.

*/

// 18. Write a function getStudentMarks that takes a student name and 
//returns their marks using if-else. Return -1 if the student is not found. 

function getStudentName(name){
    if(name==="Hemanth"){
        return 85;
    }else if(name==="jay"){
        return 75;
    }else if(name==="raj"){
        return 65;
    }else{
        return -1;
    }
}
console.log(getStudentName("Hemanth")); //85
console.log(getStudentName("jay"));    //75
console.log(getStudentName("raj"));    //65
console.log(getStudentName("pooja"));  //-1


/* 19. What does functionName.length return? 
    functionName.length returns the number of parameter defined in the functions.
    example: function add(a,b){
    }
    console.log(add.length); // 2 that is a and b
*/


/*20. What does functionName.name return?  
    functionName.name returns the name of the function as a string.
    Example: gunction greet(){
    }
    console.log(functionName.name); // greet
*/


/*
21. What happens if you write two functions with the same name in 
JavaScript?
    In javascript two functions have same name then last function will override the first function.
    example:
    function greet(){
    console.log("hello");
    }
    function greet(){
    console.log("hi");
    }
    greet(); //hi will be printed here hello will be replaced with hi.

*/

/*
22. What are default parameters in a function? Write an example. 
    default parameters allow you to assign a default value to  a function parameter.
    If no argument is passed or undefined then default parameter will execute.

    example: function greet(name="ALL"){
    console.log("hello" + name);
    }
    greet("hemanth"); //Hello Hemanth
    greet(); //Hello ALL

    */

    /*
23. What is a function expression? How is it different from a function declaration? 
    function expression is a function assigned to a variable.
    syntax:  let greet=function(){}

    function declaration uses function keyword followed by function name.
    syntax: function greet(){}

    */

//24. Write a function expression and assign it to a variable called cart. 
    let cart = function(){
        console.log("function expression");
        
    }    
    cart();

  /*
  25. Can you call a function expression before it is defined? Why or why not? 
    No you cannot call the function expression before it is defined as it is assigned to variable
    and that variable is not initialized until the assignment statement executs.

    so will get a reference error: cannpt be access function before initialization.

  */

/*
26. How do you add functions (methods) inside a JavaScript object? 
    A function stored inside object is called method.
    You can add methods as properties of an object.

    let student = {
    name: "Hemanth",
    marks: 95,

    displayInfo() {
        console.log(this.name + " scored " + this.marks);
    }
};

student.displayInfo();
*/

// 27. Write an object called loginPage with properties username and 
//password, and a method login() that prints the username. 

let loginPage={
    username: "hemanth",
    password: "hemanth@123",

    login(){
        console.log(loginPage.username);
        
    }
}
loginPage.login(); //hemanth

/*
28. What does the 'this' keyword refer to inside an object method?  
    Inside the object method this refers to the object that is calling the method.
    student.showDetails();
    this.name-->student.name-->hemanth---> here this refers to the student method.
*/

/*
29. What is the rest parameter in JavaScript? What symbol is used for it?
    rest parameter allows a function to accept any number of arguments collect them into single array.
    The rest parameter will use three dots(...) symbol. 
*/

// 30. 30. Write a function that accepts any number of arguments using the 
//rest parameter and prints them all. 

let [...arr]=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);

/*
31. What is an anonymous function? Give one example.  Where 
are anonymous functions commonly used?
    Ananyomous function is a function without name.
    It is usually assigned to a variable and passed as an argument to another
     function or used immediately.

     Anonymous function commonly used in methods like setTimeout();
     example:
    
*/
let greet=function(){
    console.log("Hello all");
    
}
greet();

 setTimeout(function( ){
     console.log("executed after 2 sec");
     
     },2000);


/*
32. What is an arrow function? Write a simple arrow function that 
adds two numbers. 

Arrow function is the shorter way to write the function.
syntax: let functionName=(parameter)=>{
}
*/
let add=(a,b)=>{
console.log(a+b);
}
add(2,2);

/*
33. What is the difference between a regular function and an arrow 
function in terms of syntax?  
    A regular function uses function keyword and arrow function uses => syntax
*/


// 34. Write an arrow function with no parameters that prints 'Hello JS'. 

let greet =()=>{
    console.log("Hello JS");
}
greet();//Hello JS

// 35. Write an arrow function with one parameter that returns the value multiplied by 10. 

let mul =(a)=>{
    return a*10;
}
console.log(mul(10));

let mulValue=(value)=>value*10;
console.log(mulValue(10));

/*
36. What is an IIFE? What does it stand for? 
    It is a function expression that runs immediately after it is defined. 
    It is written by wrapping up within parenthesis ().
IIFE stands for immediate invoke function expresion.
*/

// 37. Write an IIFE that prints 'Server started'.  

(function(){
    console.log("server started");
    
})(); //server started


// 38. Can you pass arguments to an IIFE? Write an example that takes a browser name and prints it. 

//yes just like a normal function we can define parameters and pass arguments.

(function(browser){
    console.log("Given browser is: "+ browser);
    
})("chrome"); //chrome

/*
39. What is a callback function?  
    Function that is passed as an argument for the other function is called callback function

*/

// 40. Write a simple example where one function is passed as an argument to another function. 

function greet(name){
    console.log("Hello " + name);
}

function user(name,callback){
    callback(name);
}
user("hemanth",greet); //Hello hemanth

//41. Write a function perform that takes two callback functions and calls both of them. 

function perform(callback1,callback2){
    callback1();
    callback2();
}

function hi(){
    console.log("Hello");
    
}
function bye(){
    console.log("bye");
    
}
perform(hi,bye); //hello bye

//42. How does forEach use a callback function? Write an example with an array of numbers. 

let arr=[10,20,30,40];

arr.forEach(function(num){
});
console.log(arr);

// 43. How does filter use a callback function? Write an example to filter numbers greater than 3 from [1,2,3,4,5]. 

let num = [1,2,3,4,5];

let result = num.filter(function(number){
    return number>3;
});
console.log(result); //[4,5]


// 44. Can you pass an anonymous arrow function directly as a callback? Write an example.
// yes we can pass an ananymous arrow function directly.

let numbers = [1,2,3,4,5,6,7,8];

numbers.forEach(num=>{
});
console.log(numbers); //[1,2,3,4,5,6,7,8]


// 45. Write a function launchBrowser that takes a browser name and 
// a callback. The callback should use a switch-case to print which 
// browser to launch and return true or false. 

function launchBrowser(browser){
    switch(browser){
        case "chrome": console.log("chrome has executed");
                        return true;
                        break;
        case "firefox": console.log("firefox has executed");
                        return true;
                        break;
        case "edge": console.log("edge is executed");
                        return true;
                        break;

        default: console.log("given browser is not in the list");
                        return false;
                        break;
        
    }
}
 function perform(browser,callback1){
    callback1(browser);
 }
 perform("safari",launchBrowser);
 