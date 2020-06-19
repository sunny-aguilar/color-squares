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
        // figure out how many squares to show
        // pick new colors
        // pick a new pickedColor
        // update page to reflect changes
    }, false);
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
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
        squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
}
// hard and easy button event listeners
// easyBtn.addEventListener('click', function() {
//     hardBtn.classList.remove('selected');
//     easyBtn.classList.add('selected');
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         }
//         else {
//             squares[i].style.display = 'none';
//         }
//     }
// }, false);
// hardBtn.addEventListener('click', function() {
//     easyBtn.classList.remove('selected');
//     hardBtn.classList.add('selected');
//     numSquares = 6;
//     colors = generateRandomColors(numSquares );
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//             squares[i].style.background = colors[i];
//             squares[i].style.display = 'block';
//     }
// }, false);
// add event listener to buton
resetButton.addEventListener('click', function (e) {
    // select event target
    var target = e.target;
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // reset text display
    target.textContent = 'New Colors';
    // this.textContent = 'New Colors';
    // update display message
    messageDisplay.textContent = '';
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
}, false);
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
            messageDisplay.textContent = 'Correct!';
            changeColors(clickedColor);
            resetButton.textContent = 'Play Again?';
            h1.style.backgroundColor = clickedColor;
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
