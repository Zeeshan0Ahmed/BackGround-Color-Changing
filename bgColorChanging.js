/*const button = document.querySelector("button");
const body = document.body;
console.log(body)
const random = Math.floor(Math.random()*256);
let red = random;
const random1 = Math.floor(Math.random()*256);
let green = random1;
const random2 = Math.floor(Math.random()*256);
let blue = random2;
button.addEventListener('click',(e)=>{
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    e.target.textContent = `rgb(${red},${green},${blue})`;
})*/
const mainButton = document.querySelector("button");
const body = document.body;
//const currentColor = document.querySelector(".current-color");
function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener("click",(e)=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    e.target.textContent = randomColor;
})
