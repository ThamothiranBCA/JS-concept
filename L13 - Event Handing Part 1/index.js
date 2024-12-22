const button = document.getElementById('button');

console.log(button);

button.addEventListener('click', () => {
    alert('Button Clicked')
})

button.addEventListener('mouseover',() => {
    button.classList.add('buttonHover')
})

button.addEventListener('mouseout',() => {
    button.classList.remove('buttonHover')
})

document.addEventListener('keydown',(event)=>{
    if (event.key ==='Enter')
    {
        alert('Enter Key is Pressed!');
    }
});

document.addEventListener('keydown',(event)=>{
    if (event.shiftKey)
    {
        alert('Shift Key is Pressed!');
    }

    if (event.key >='a'  && event.key <='z'){
        alert(`Alphabetical key '${event.key}'pressed`)
      }

      if (event.key >='0'  && event.key <='9'){
        alert(`Number key '${event.key}'pressed`)
      }

}); 

















