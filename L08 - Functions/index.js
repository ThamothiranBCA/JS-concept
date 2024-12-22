// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */
function understandfunc()
{
    console.log('think about codeing do coding improve coding')
}
// Calling the function
understandfunc();

// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/

//parameter
function greet(username)
{
    console.log('good morning'+ ' ' + username + '!')
}

//argumenrts
greet('Thamu');
greet('Dhoni');

function greetuser(firstname,lastname){
          console.log(`Hello,${firstname},${lastname}`)
}
greetuser('Dhoni','Suryakumar')
greetuser('welcome','Thamu')

function math(x,y,z){
    console.log(x + y + z)
}
math(33,22,45)
// Default Parameter

function printer(color ='gray'){
    console.log(`print this one`+ ' ' + color)
}
printer('red')
printer()


// Function with Return Type
function add(a,b){
    return a + b ;
}

let sum = add(20,30)
console.log(sum)
///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/
const morning = function(){
    console.log('Vanakam da mapla !')
}

morning();
// With Argument
const morningwithname = function(name ='Ronaldo'){
  console.log(`Good morning ${name}`)  
}

morningwithname('Tendulkar')
morningwithname()

// Function Expression with Return Type

///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

// With Argument

// Arrow Function with Return Type

// Shorter Way
const minus = (a,c) => a - c ;
console.log(minus(12,10))

//Function Calling Other Function
function welcomeshopkeeper(name){
    console.log(`Welcome ${name} to The Shop`)
}

function main(name){
    let shoperName = name;
    welcomeshopkeeper(shoperName)
}
main('Virat')

//Anonymous Functions: Later on Course on Arrays
setTimeout(() => {
    console.log('Anonymous Functions Executed')
},2000)

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */
