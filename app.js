"use strict";
exports.__esModule = true;
// commands
// tsc app.js - compile code
// tsc app.js --watch => compile as changes happen
var colors = generateRandomColors();
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
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
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
