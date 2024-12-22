let person = {
    name: 'Thamu',
    age: '22',
    isEmployed: true
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.isEmployed)

// Adding a new property
person.city = 'Krishnagiri';
console.log(person)

// Modifying an existing property
person.age = 25;
console.log(person)

// Object with method
let car = {
    
}
// Destructuring assignment
let student = {
    name: 'Thamu',
    age: 22,
    course: 'Developer',
};

let {name, age, course} = student;

console.log(name)
console.log(age)
console.log(course)
//Nested Complex Objects
let restaurant = {
    name: 'Idli Delights',
    location: 'chennai',
    owner:{ 
        name:'Rajini kanth',
        age:50,
        contact:{
            email:'rajinikanth@gmail.com',
            phone:'9488112209',
        },
    },
    menu: [
        { dish:'dosa', price:50, spicy:true},
        { dish:'coffee', price:30, spicy:false},
        { dish:'pongal', price:45, spicy:false},
    ],
};
console.log(restaurant)

console.log(`welcome to ${restaurant.name} in ${restaurant.location}`)

// Accessing properties of the nested objects
restaurant.menu.forEach((item) =>  {
    console.log(`${item.dish} : Rs.${item.price} 
    (${item.spicy ? 'Spicy':'Notspicy'})`);
})

// Destructure owner object
let {name:ownerName,
    age:ownerAge,
    contact: {email:ownerEmail,phone:ownerPhone},
} = restaurant.owner; 
// Output details about the restaurant
console.log(`Owned By ${ownerName},Age ${ownerAge}`)

// Output the menu items using destructuring within forEach

restaurant.menu.forEach(({ dish, price, spicy }) =>  {
    console.log(`${dish} : Rs.${price} 
    (${spicy ? 'Spicy':'Notspicy'})`);
})