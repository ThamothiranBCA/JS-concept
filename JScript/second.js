// for (let i = 0; i < 5; i++ )
// {
// console.log("Number #",i)

// }

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("demo").innerHTML = text;
    console.log('Hello World!');