// KEYBOARD Events

// Oefening 1

// Maak (in HTML) een DIV met het id "character".
// Wijzig de achtergrondkleur van de DIV telkens als er een cijfertoets van 0 tot 9 wordt ingedrukt op het toetsenbord
var div1 = document.getElementById('character');
console.log(character);

document.addEventListener("keydown", function(event) {
  let x = event.keyCode;
  switch (x) {
    case 48: console.log(" 0 was pressed");
    div1.style.background = "green";
    break;
    case 49: console.log(" 1 was pressed");
    div1.style.background = "red";
    break;
    case 50: console.log(" 2 was pressed");
    div1.style.background = "blue";
    break;
    case 51: console.log(" 3 was pressed");
    div1.style.background = "purple";
    break;
    case 52: console.log(" 4 was pressed");
    div1.style.background = "brown";
    break;
    case 53: console.log(" 5 was pressed");
    div1.style.background = "yellow";
    break;
    case 54: console.log(" 6 was pressed");
    div1.style.background = "#0087fa";
    break;
    case 55: console.log(" 7 was pressed");
    div1.style.background = "black";
    break;
    case 56: console.log(" 8 was pressed");
    div1.style.background = "grey";
    break;
    case 57: console.log(" 9 was pressed");
    div1.style.background = "#103050";
    break;
    case 96: console.log(" 0 was pressed");
    div1.style.background = "green";
    break;
    case 97: console.log(" 1 was pressed");
    div1.style.background = "red";
    break;
    case 98: console.log(" 2 was pressed");
    div1.style.background = "blue";
    break;
    case 99: console.log(" 3 was pressed");
    div1.style.background = "purple";
    break;
    case 100: console.log(" 4 was pressed");
    div1.style.background = "brown";
    break;
    case 101: console.log(" 5 was pressed");
    div1.style.background = "yellow";
    break;
    case 102: console.log(" 6 was pressed");
    div1.style.background = "#0087fa";
    break;
    case 103: console.log(" 7 was pressed");
    div1.style.background = "black";
    break;
    case 104: console.log(" 8 was pressed");
    div1.style.background = "grey";
    break;
    case 105: console.log(" 9 was pressed");
    div1.style.background = "#103050";
    break;
  }
});


// Oefening 2

// Maak (in HTML) 4 div met de volgende id's: "up, down, left, right".
// Creëer een highlight class in de CSS die de ondoorzichtigheid van het element vermindert
// Voeg voor elke div de klasse highlight toe wanneer een van de pijltjestoetsen wordt ingedrukt
let divUp = document.getElementById('up');
let divDown = document.getElementById('down');
let divLeft =  document.getElementById('left');
let divRight = document.getElementById('right');

document.addEventListener("keydown", function(event) {
  let x = event.keyCode;
  switch (x) {
    case 37: divLeft.classList.add("highlight");
    break;
    case 38: divUp.classList.add("highlight");
    break;
    case 39: divRight.classList.add("highlight");
    break;
    case 40: divDown.classList.add("highlight");
    break;
  }
})
// Verwijder voor elke div de markeringsklasse wanneer de toets wordt losgelaten
document.addEventListener("keyup", function(event) {
  let x = event.keyCode;
  switch (x) {
    case 37: divLeft.classList.remove("highlight");
    break;
    case 38: divUp.classList.remove("highlight");
    break;
    case 39: divRight.classList.remove("highlight");
    break;
    case 40: divDown.classList.remove("highlight");
    break;
  }
})
