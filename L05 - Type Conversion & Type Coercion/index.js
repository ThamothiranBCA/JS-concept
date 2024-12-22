//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

let strNum = "123"
let num = Number(strNum);
console.log(num)
console.log(typeof num)

// String to Number
let num2 = 456;

let str = String(num2)
console.log(str) 
console.log(typeof num)

// Number to String
let bool = true;
let strBool = String(bool);
console.log(strBool)
console.log(typeof strBool)

// Boolean to String
let strTrue = 'true';
let strFalse = 'False';
let booltrue = Boolean(strTrue)
let boolFalse = Boolean(strFalse)
console.log(booltrue)
console.log(boolFalse)

// String to Boolean

// Parsing integers and floats
let floatStr = '123.45';

let intNum = parseInt(floatStr);
console.log(intNum);
let floatNum = parseInt(floatStr);
console.log(floatStr)

console.log(true + 1)

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number

// Boolean and Number

// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks
