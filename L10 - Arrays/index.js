/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets
let fruits = ['apple','Mango','cherry'];
console.log(fruits);
// Accessing Array Elements:
console.log(fruits[0]);
// Change Value in Array
fruits[1] = 'orange';
console.log(fruits)

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/
for(let i = 0; i < 3; i++){
    console.log(fruits[i])
}
/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
// More Array Methods

/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/

/*
Remove element from array
Removes the last element from an array and returns that element.
*/

/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
let box = ['pencil','pen','Books'];
/*
Removes the first element from an array and returns that element.
*/

// Anonymous Functions
box.forEach(function(x,index){
    console.log(x,index);
}
);   

box.forEach((x)=>{
    console.log(x)
})
// Combining Arrays
let containerOne = ['Televison','Laptop','Mobile']
let containerTwo = ['Redmi','HCL','vivo']

console.log(containerOne)
console.log(containerTwo)

let container = containerOne.concat(containerTwo)
console.log(container)

// Finding an Element Index, If not found it will return -1
let index = container.indexOf('Mobile')
console.log(index)
// Array with mixed data types

// Array of Employee Objects

//Fliters

// Map
