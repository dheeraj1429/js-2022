/*

High-level Overview of Javascript => 

------------------------------------------
Javascript -> Javascript is a high-level, Object-oriented, Multi-paradigm Programming Language.


another defination -> java script is a high-level, prototype-based object-orienterd multi-paradigm, interpreted or just-in-time complied, Dynamic, single-threaded, garbage-collected programming language with first class function and a non-blocking event loop concurrency model.

High-level -> Developer does not have to worry, ervery thing happes automatically. A high-level language is any programming language that enables development of a program in a much more user-friendly programming context and is generally independent of the computer's hardware architecture.

A high level language has h higer level of abstraction from the computer, and foces more on the programing logic, without knowing about such as memory and refist utilization.

Garbage-collected -> Java script is a garbage collected language, thats mean java script remove automatic unuseble object from the memory. means cleaning the momery so we don't have to worry about it. it's like the java script is like a cleaning gay who just clean our memory time to time,

Interpreted or Just in time compiled -> The computer processor only know 01, the java script is over readbly adstraction munchen code.

Multi-paradigm -> an approch and mindset of structuring code, which will direct your coding style and technique.
is like a methods and mean your coding structuring which type of code you write

1) -> Procedural programming
2) -> Object oriented programming
3) -> Functinal Programming

First Class Function -> in a language with first-class function, function are simply tredted as variable. we can pass them into functions, and return them from function.

passing a fucntion into another function as an argument first-class function.

Single-threaded -> javascript runs in one single-thread, so it can only do one thing ata a time,

Event Loop -> By using event loop: takes loop rungin taks, executes them in the "background" and put them back in the main thread once they are finished.

------------------------------------------

The javascript Engine and Runtime => 

Js Engin -> A Program thats executes Javascript code. 

Compilation -> Entire code is converted into machine code at once, and written to binary file that cna be executed by a computer.

INterpretation -> Interapreter runs through the soucer code and executes line by line.


Web Api -> Funcionalities provided to the engine, accessible on window object, web api is not the part or javascript. javascript can access to the web api through to the window object. 

and a run time -> a run time is like a box which has containes the javascript extra Funcionalities thats we need to use.




Execution Contexts and the Call Stack =>






Scope and The Scope Chain =>

Scoping in Practice =>

Variable Enviroments: Hoisting and the TDZ =>

The This Keyword =>

url -> https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/08-Behind-the-Scenes/final/script.js

This -> This keyword/variable: spacile variable that is created for every execution context(every function) takes the values of (points ot) the "OWNER" of the functuon in which the this keyword is used.

this keyword is not a static. it depends on how the function is calles, and its value is only assigned when the function is actually called.

if we create a object and the inside that object we create a function, and inside that function we use this keyword then the this keyword points his owner object that mena to the perent object .

this key word inside the arrow function -> arrow function do not get his own this keyword if we use this keyword inside the arrow function its simply this keyword to that surrounding function mean ( lexical this ),
of the perent function -> IMP

Event listener -> if we use the this keyword to the handler funtion then the this keyword pointin to the dom element, Dom element taht the halder is attached to.


Regular Fucntion vs  Arrow Functions =>

Primitives vs Object (Primitive vs. Refences Type) =>

 
 */
