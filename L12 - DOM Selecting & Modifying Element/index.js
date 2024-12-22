/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/

//getElementById
const heading = document.getElementById('main-heading');     

console.log(heading);

console.log(heading.innerHTML);
console.log(heading.textContent);

//Changing Values
heading.innerHTML = 'see, I am from planet earth!'; 

function changeHeading() {
    setTimeout(() =>{
        heading.textContent = 'see, I am from planet Mars!'
    },3000)
}

changeHeading();

//2.getElementsByClassName
const listItems = document.getElementsByClassName('list-item');
console.log(listItems);

console.log(listItems.item(1));
console.log(listItems.item(0).innerHTML);

for (let i = 0; i < listItems.length; i++)
{
    console.log(listItems.item(i).innerHTML);
}

for (let i = 0; i < listItems.length; i++)
{
    listItems.item(i).innerHTML = `Modified Item ${i + 1}`;
}

//getElementsByTagName
const contents = document.getElementById('content').getElementsByTagName('p');

console.log(contents)


function contentItemsStyle(){
    contents.item(0).style.color = 'red';
}
contentItemsStyle();

// const content = document.getElementById('content').getElementsByTagName(p);
//Remove Element from dom
const message = document.getElementById('message')

setTimeout(()=> {
    message.remove();
},3000)

const newParagraph = document.createElement('p')

newParagraph.textContent = 'This line is a newly Added line';

const container = document.getElementById('main')

container.appendChild(newParagraph);