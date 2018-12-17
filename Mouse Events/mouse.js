// Mouse Events

// Oefening 1
// Maak (in HTML) 3 DIV met dezelfde "hoverMe" klasse
// Laat de divs verdwijnen als je met de muis over de divs beweegt
// var hoverClass = document.getElementsByClassName("hoverMe");
// console.log(hoverClass);
// hoverClass.addEventListener("onmouseover", HideDiv());
// function HideDiv() {
//   hoverClass.style.display = "none";
// }
// Versie Mahdi
// let divClass = document.getElementsByClassName('hoverMe');
// console.log(divClass);
// let onMouseOver = function (event){
//     this.style.visibility = "hidden";
// }
//
// for (variable of divClass) {
//   variable.addEventListener("mouseover",onMouseOver);
// }

var hoverClass = document.getElementsByClassName("hoverMe");
console.log(hoverClass);

let hideDiv = function (event) {
 this.style.visibility = "hidden";
}

for (i = 0; i < hoverClass.length; i++ ) {
  hoverClass[i].addEventListener("mouseover", hideDiv);
}
// Hide Divs
// let showDiv = function (event) {
//  this.style.visibility = "visible";
// }
//
// for (i = 0; i < hoverClass.length; i++ ) {
//   hoverClass[i].addEventListener("mouseleave", showDiv);
// }

// Oefening 2

// Maak (in HTML) een DIV met een reset id
// Zorg ervoor dat wanneer je erop klikt, de 3 divs die je eerst hebt gemaakt weer verschijnen

var clickReset = document.getElementById('reset');
console.log(clickReset);

let resetDivs = function(event) {
  for (i = 0; i < hoverClass.length; i++ ) {
    hoverClass[i].style.visibility = "visible";
  }
}

clickReset.addEventListener("click", resetDivs);

// Oefening 3

// Maak (in HTML) 2 DIV met één id per div x-axis en y-axis.
// Zorg ervoor dat wanneer u de muis in het venster beweegt, de positie van de muis wordt weergegeven in de bijbehorende divs
var div1 = document.getElementById("x-axis");
var div2 = document.getElementById("y-axis");
console.log(div1);
console.log(div2);

div1.addEventListener("mousemove", runEvent);
div2.addEventListener("mousemove", runEvent);

function runEvent(event) {
  this.innerHTML = "MouseX: "+event.offsetX +", MouseY: " + event.offsetY + ".";

}
