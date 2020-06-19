// RGB color grid web app
export {}

// commands
// tsc app.js - compile code
// tsc app.js --watch => compile as changes happen



let colors = generateRandomColors(6);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');

// update colorDisplay
colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add event listeners to squares
    squares[i].addEventListener('click', function(e) {
        let target = e.target;

        // grab color of clicked square
        let clickedColor = target.style.backgroundColor;

        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct';
            changeColors(clickedColor);
        }
        else {
            target.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try again';
        }

    }, false);
}


// change tile colors on selecting correct tile
function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}


function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) {
    // make an array
    let arr = [];

    // add num random colors to arr
    for (let i = 0; i < num; i++) {
        // get random color push into array

    }

    // return that array
    return arr;
}


function randomColor() {
    // pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256);

    // pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256);

    // pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256);

}






