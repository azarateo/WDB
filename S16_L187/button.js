//var button = document.querySelector("button");
var button = document.getElementsByTagName("button")[0];
var mybody = document.querySelector("body");
var isPurple = false;
button.addEventListener("click",function(){
	document.body.classList.toggle("purple");
});



