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
var colorDisplay = document.getElementById('#colorDisplay');
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
