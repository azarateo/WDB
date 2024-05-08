var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

console.log(squares);

for(var i = 0; i < squares.length; i++){
    //Add color
    squares[i].style.backgroundColor = colors[i];
    //Add event listener
    squares[i].addEventListener('click',function(){
        alert('clicked one square');
    });
}