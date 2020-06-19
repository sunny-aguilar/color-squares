"use strict";
exports.__esModule = true;
// commands
// tsc app.js - compile code
// tsc app.js --watch => compile as changes happen
var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
];
var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');
// update colorDisplay
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add event listeners to squares
    squares[i].addEventListener('click', function (e) {
        var target = e.target;
        // grab color of clicked square
        var clickedColor = target.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            alert('correct!');
        }
        else {
            target.style.backgroundColor = '#232323';
        }
    }, false);
}
