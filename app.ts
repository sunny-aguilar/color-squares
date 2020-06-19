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
let colorDisplay = document.getElementById('#colorDisplay');

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}



