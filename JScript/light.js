// onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!



function changeImage(newSrc) {

    var imgElement = document.getElementById('myImage');
     if (imgElement) { 
         // Check if the element exists
         if (newSrc == './pic_bulbon.gif') 
             imgElement.src = newSrc;
         else
         imgElement.src = newSrc;
    } else {
         console.error('Element with id "myImage" not found.');
    }

 }
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }


// let a, b, c; 
// a = 5;
// b = 66;
// c = a + b;
// document.getElementById("demo").innerHTML = c;
// console.log('Hello World')