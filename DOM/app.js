// DOM EXERCISES

// EXERCISE 1

// selecteer de body
var theBody = document.body;
// console.log(theBody);
// neem de "bg-aqua"-klasse weg
theBody.classList.remove("bg-aqua");
// klasse "bg-olive" toevoegen
theBody.classList.add("bg-olive");
// eerste alinea kiezen
var firstAll = document.getElementById("first-paragraph");
// console.log(firstAll);
// de klassen "bg-lime" en "gray" te verwijderen
firstAll.classList.remove("bg-lime", "gray");
// console.log(firstAll);
// de "aqua"-klasse eraan toe te voegen
firstAll.classList.add("aqua");
// console.log(firstAll);
// selecteer alle elementen die de klasse 'bg-silver' hebben.
var silverClass = document.getElementsByClassName("bg-silver");
// console.log(silverClass);
// pas alle elementen aan door de klasse "bg-teal" aan de elementen toe te voegen
for (var i = 0; i < silverClass.length; i++) {
    silverClass[i].classList.add("bg-teal");
}
// console.log(silverClass);
// Pas het element aan door "bg-silver"-klasse ervan te verwijderen
for (var i = 0; i < silverClass.length; i++) {
    silverClass[i].classList.remove("bg-silver");
}
// console.log(silverClass);
// selecteer alle blokquote-elementen
var blockQ = document.getElementsByTagName("blockquote");
// console.log(blockQ);
// Pas al elementen aan door de klasse "bg-white" an de elementen toe te voegen
for (var i = 0; i < blockQ.length; i++) {
    blockQ[i].classList.add("bg-white");
}


// EXERCISE 2

// Met querySelector selecteert u het element my-table
var myTable = document.querySelector("#my-table");
// console.log(myTable);
// De klasse "bg-purple" toevoegen
myTable.classList.add("bg-purpl");
//,console.log(myTable);
// met querySelectorAll selecteert u alle paragrafen in "container".
var allAll = document.querySelector(".container").querySelectorAll("p");
// console.log(allAll);
// wijzig alle elementen door het toevoegen van de shadow-klasse
for (let i = 0; i < allAll.length; i++) {
  allAll[i].classList.add("shadow");
}


// EXERCISE 3

// Selecteer alle elementen van het type pre.
var pre = document.querySelectorAll("pre");
// console.log(pre);
// //met de eigenschap style wijzigt u de tekstkleur.
for (let i = 0; i < pre.length; i++) {
  pre[i].style.color = "grey";
}
// met de style eigenschap verandert de achtergrondkleur dankzij backgroundColor.
for (let i = 0; i < pre.length; i++) {
  pre[i].style.backgroundColor = "yellow";
}
// met de style eigenschap voeg een border-top van 3px solid red toe (vergeet niet dat je op deze manier toegang hebt tot de eigenschappen van een object: ["prop-name"]).
// console.log(pre);
for (let i = 0; i < pre.length; i++) {
  pre[i].style.borderTop = "solid red 3px";
}
// met de style eigenschap voeg een border-bottom van 3px solid red toe.
for (let i = 0; i < pre.length; i++) {
  pre[i].style.borderBottom = "solid red 3px";
}
// Selecteer het eerste element van het type h3.
var firstH3 = document.querySelector("h3");
// console.log(firstH3);
// vervang de HTML inhoud door <em>Italic title ! yeah !</em>.
firstH3.innerHTML = "<em>Italic title ! yeah !</em>";
// Selecteer het eerste element van het type h2
var firstH2 = document.querySelector("h2");
// console.log(firstH2);
firstH2.style.color ="black";
//vervang de HTML inhoud door <strong>HTML doesn't work !</strong>
firstH2.innerHTML = "<strong>HTML doesn't work !</strong>";


// EXERCISE 4

// Selecteer de eerste ul
var firstUl = document.querySelector("ul");
// console.log(firstUl);
var newListItem = document.createElement("LI");   //hoofdletters, bron: w3 schools.
// console.log(newListItem);
newListItem.innerHTML = "My best friend is <a href='http://www.google.com'>Google</a>";
// console.log(newListItem);
firstUl.appendChild(newListItem);
//selecteer de eerste link in de eerder aangemaakte li
var firstA = newListItem.firstElementChild;
// console.log(firstA);
firstA.style.color = "#F0FFFF";


// EXERCISE 5

// selecteer het eerste 'ol' element
var firstOl = document.querySelector("ol");
// console.log(firstOl);
// lus over alle kinderen van de laatste dankzij de children eigendom
for (let i =0; i < firstOl.children.length; i++) {
  console.log(firstOl.children[i]);
}
// verwijder elk kind van ol dankzij removeChild()
var numOfChilds = firstOl.children.length;
// console.log(numOfChilds);
for (let i = 0; i < numOfChilds; i++) {
  firstOl.removeChild(firstOl.children[0]);
}
console.log(firstOl);
// Geef in een array de volgende waarden op: ["Silent Teacher","Code Monkey", "CodeCombat"]
var array1 = ["Silent Teacher","Code Monkey", "CodeCombat"];
// console.log(array1);
// //lus alle kinderen in de eerder gecreëerde tafel
for (let i =0; i < array1.length; i++) {
  console.log(array1[i]);
}
// creëer voor elke waarde van de array een li element met behulp van document.createElement()
var array1Li = [];
for (let i = 0; i < array1.length; i++) {
  array1Li[i] = document.createElement("li");
  array1Li[i].innerHTML = array1[i];
  console.log(array1Li[i]);
}
//voeg vervolgens elke link toe aan het eerder geselecteerde a element met als naam de waarde van de array.
var listA = [];
// console.log(listA);
for (let i=0; i < array1.length; i++) {
  listA[i] = document.createElement("a");
  console.log(listA);
  if (i==0) {
    listA[i].setAttribute("href", "http://silentteacher.toxicode.fr/");
  } else if (i==1) {
    listA[i].setAttribute("href", "https://www.playcodemonkey.com/");
  } else if (i==2) {
    listA[i].setAttribute("href", "https://codecombat.com/");
  }
  console.log(listA[i]);

  listA[i].innerHTML = array1[i];
  array1Li[i].innerHTML= "";
  array1Li[i].appendChild(listA[i]);
  console.log(array1Li[i]);
  firstOl.appendChild(array1Li[i]);
}
