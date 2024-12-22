const inputName = document.getElementById('name');
const outputName = document.getElementById('name-output');

console.log(inputName);

inputName.addEventListener('input' ,() => {
    console.log(inputName);
    outputName.textContent = `Typed Name: ${inputName.value}`;
});




const rotated = document.getElementById('rotated');
// Rotate element by 90 degrees clockwise

rotated.addEventListener('mouseover',() => {
    rotated.classList.add('imges')
})

rotated.addEventListener('mouseout',() => {
    rotated.classList.add('imgess')
    // alert('Button Clicked')
})

const rotat = document.getElementById('rotat');
rotat.addEventListener('mouseover',() => {
    rotat.classList.add('imgees')
})

rotat.addEventListener('mouseout',() => {
    rotat.classList.add('imgess')
    // alert('Button Clicked')
})