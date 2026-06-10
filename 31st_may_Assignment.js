// Assignment on DataTypes,Variable and Operators
// 1. Identify the Data Type 
// Write a program to declare the following variables and log 
// their data types: 


let a = "Hello"; 
console.log(a); //Hello
console.log(typeof a); //String

console.log("----------------------------");

let b = 100; 
console.log(b); //100
console.log(typeof b); //number

console.log("----------------------------");

let c = true; 
console.log(c); //true
console.log(typeof c); //boolean

console.log("----------------------------");

let d = null; 
console.log(d); //null
console.log(typeof d); //object

console.log("----------------------------");

let e = undefined; 
console.log(e); // undefined
console.log(typeof e); //undefined

console.log("----------------------------");

let f = { name: "John" };
console.log(f);                // {name: "John"}
console.log(typeof f);         // Object

console.log("----------------------------");

let g = [1, 2, 3];
console.log(g);         //[1,2,3]
console.log(typeof g);  //object

console.log("----------------------------");

let h = function() { 
};
console.log(h);          //[function: h]
console.log(typeof h);   // function

console.log("----------------------------");


// 2. Variable Scope Check 
// What will be the output of the following? 
var x=10;
function test(){
    var x=20;
    console.log(x);  //20
}
test();
console.log(x);  //10

console.log("-----------------------");

// 3. Hoisting Example 
// Predict the output and explain: 
console.log(a);
var a = 5;  // undefined  it will treat as a already exist but value 5 is not yet assigned
//  as we are calling 'a' before declaration so the value will be undefined.

console.log("----------------------");

// 4. Let vs Var 
// What will be the output? 
function testsccope(){
    if(true){
        var a = 10;
        let b = 20;
    }
    console.log(a);  // 10
    console.log(b);  //Reference error
}
testsccope();

console.log("--------------------------");

// 5. Const Behavior 
// What will happen? 
const obj = { name: "Alice"};
obj.name = "bob";               //because we are changing the property of the object that 
                                // obj refers
console.log(obj.name);          // bob
obj = { name: "charlie"};       // here you are trying to make obj point to a completely 
// new object. Const variables cannot be reassigned so it will throw "TypeError: Assignment to const variable"
console.log(obj);               

console.log("--------------------------");

// 6. What’s the type of typeof null? 
console.log(typeof null); // object

console.log("-----------------------");

// 7. Operator Precedence(Apply BODMAS rule) 
// Predict the output: 
let result = 10 + 5 * 2 / 2 - 1; 
console.log(result);             //14   

/*Prepare Theory based questions
Q1. What is JavaScript? Is it a compiled language or an interpreted language?
    javascript is a cross platform, object-oriented scripting language used to make 
    webpages interactive.

    Older javascript uses interpreted language  because browser executes code line by line.
    modren javascript is combination of both techniques(interpreted+compiled) for better
    performance.
    uses JIT(Just In Time Compilation)

    Process is roughly:
    * javascript source code is parsed.
    * It is converted into abstract syntax tree.
    * the engine generates bitecode
    * * frequently executed code is compiled into optimized machine code.
    * the machine code is executed by the CPU.
    
Q2. Name at least three places where JavaScript can run?.
    webbrowser: Google chrome, firefox and safari.
    server side environment: using Node.js
    mobile application: using electron.
    cloude/serverless platforms: such as function running on cloud services.

    Javascript can be used in browsers, on servers using nodejs and in mobile/web 
    applications using frameworks like react native and electron.

Q3. What is Node.js? Why do we need it if we already have browsers?
    Node.js is javascript runtime that allows javascript to work outside the browser.
    
    We need it because browsers are limited to client side tasks, while node.js lets us 
    build servers, APIs , work with files, databases and other backend functionality 
    using javascript.

Q4. What is the V8 engine? Which browser uses it?
    V8 engine is a open source java script and web assembly engine developed by google.
        * uses JIT compilation.
        * Improves speed and performance of javascript execution.
        * Includes automatic memory management and garbage collection.
        * supports modren javascript features and webassembly
        
Q5. Name the JavaScript engines used by Chrome, Firefox, and Safari.    
    chrome: V8
    firefox: spidermonkey
    safari: Javascript core also called nitro.

Q6. What is the difference between a browser engine and a JavaScript engine?    
    Browser Engine: builds and displays the webpage(html+css).
    Javascript Engine: runs the Javascript code that makes the page interactive.
    
Q7. How do you check if Node.js is installed on your machine? Write the command.    
    node -v
    npm  - v    this confirms whether Node.js and its package manager are 
    properly installed. 

Q8. What is VS Code? Name two extensions that are useful for writing JavaScript.    
    VS Code is a free, lightweight, and powerful source code editor developed by microsoft.
    Two usefull extension:
    Material icon: Add attractive icons for files and folders for vscode.
    code runner: run javascript code quickly inside VS Code.
    
Q9. Write a simple program that prints 'Hello, JavaScript!' using console.log and run it
 using Node.js.    
    console.log("hello, javaScript!");
    to run using node.js: node.filename.js(hello.js)

Q10. Can JavaScript run without a browser? Explain how
    Yes javascript can run without browser.
    Javascript was originally made for browsers. but now it can also run in standalone 
    environments like node.js

    How Node.js make it happen:
    Node.js includes the v8 javascript engine.
    It allows javascript to run directly on the computer.

Q11. What are the three ways to declare a variable in JavaScript?
    var:
        * Old way of declaring variable.
        * can be decalered and updated.
    
    let:
        * modren way introduced in ES6.
        * can be updated but not redeclared in the same scope.
        
    const:
        * Also introduced in ES6.
        * Cannot be updated or redeclared.

Q12. What is the difference between let and const?
    let--> you can reassign the value.
    const--> you can't reassign the value.    

Q13. Can you reassign a value to a const variable? What happens if you try?
    we can't reassign the value, javascript will throw the error.

Q14. What is hoisting? Give a simple example using var.
    Hoisting means javascript moves variable declarations to the top of their 
    scope before execution.
        console.log(a); //undefined
        var a=15;

Q15. What happens if you try to use a let variable before declaring it?
        You get a reference error because let will be in the temporal dead zone.
        console.log(a); //error
        let a =20; 

Q16. List all the primitive data types in JavaScript.
    * Number
    * String
    * boolean
    * null
    * undefined
    * bigint
    * symbol

Q17. What is the difference between null and undefined?
    Null--> intentional empty value set by developer.
    undefined--> variable declared but value not assigned.

Q18. What does typeof return for: 42, 'hello', true, null, undefined?
    * typeof 42 // number
    * typeof 'hello' //string
    * typeof true //boolean
    * typeof null  // object
    * typeof undefined //undefined

Q19. What is the range of the Number type in JavaScript? What happens if you go beyond that
range?
    safe  range -2^53 +1 to 2^53 -1

    beyond this range: precision is lost and large number will become inaccurate.

Q20. Write a small code to declare one variable with var, one with let, and one with const. Print all
three
    var x=10;
    let y=20;
    const z= 30;


*/