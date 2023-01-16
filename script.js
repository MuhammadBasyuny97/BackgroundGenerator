var h3 = document.querySelector("h3");
var color1 = document.querySelectorAll("input")[0];
var color2 = document.querySelectorAll("input")[1];
var body = document.querySelector("body");

var _ = require('lodash');
var array = [1,2,3,4,5,6,7,8,9];
console.log("answer:", _.without(array , 3));

console.log("125");

function setGradient() {
	body.style.background= "linear-gradient(to right ," + color1.value + ", " + color2.value + ")" ;

	h3.textContent = body.style.background + ";";
}
color1.addEventListener("input" , setGradient);
color2.addEventListener("input" , setGradient);