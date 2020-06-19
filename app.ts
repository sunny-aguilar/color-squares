// RGB color grid web app
export {}

// commands
// tsc app.js - compile code
// tsc app.js --watch => compile as changes happen



let colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
];

let squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
let colorDisplay = document.getElementById('colorDisplay');

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

    }, false);
}



