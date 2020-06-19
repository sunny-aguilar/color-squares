"use strict";
exports.__esModule = true;
// commands
// tsc app.js - compile code
// tsc app.js --watch => compile as changes happen
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
// let easyBtn = document.querySelector('#easyBtn');
// let hardBtn = document.querySelector('#hardBtn');
var modeButtons = document.querySelectorAll('.mode');
init();
function init() {
    // mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function (e) {
            // select event target
            var target = e.target;
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            target.classList.add('selected');
            if (target.textContent == 'Easy') {
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
        }, false);
    }
    // add colors to squares
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        // add event listeners to squares
        squares[i].addEventListener('click', function (e) {
            var target = e.target;
            // grab color of clicked square
            var clickedColor = target.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                resetButton.textContent = 'Play Again?';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                target.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try again';
            }
        }, false);
    }
    reset();
}
function reset() {
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // reset text display
    resetButton.textContent = 'New Colors';
    // this.textContent = 'New Colors';
    // update display message
    messageDisplay.textContent = '';
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
        squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
}
// add event listener to buton
resetButton.addEventListener('click', reset, false);
// update colorDisplay
colorDisplay.textContent = pickedColor;
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
function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to arr
    for (var i = 0; i < num; i++) {
        // get random color push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}
function randomColor() {
    // pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
