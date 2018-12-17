// Giuseppe

// EXERCISE 1: Behandeling van klassen

var x = document.querySelector("body.bg-aqua");
console.log(x);

x.classList.remove("bg-aqua");
console.log(x);

x.classList.add("bg-olive");

var alinea1 = document.getElementsByTagName("p").item(0);
console.log(alinea1);

alinea1.classList.remove("bg-lime", "gray");
console.log(alinea1);

alinea1.classList.add("aqua");
console.log(alinea1);

var silverclass = document.getElementsByClassName("bg-silver")
console.log(silverclass);

silverclass.item(0).classList.add("bg-teal");
console.log(silverclass);

silverclass.item(0).classList.remove("bg-silver");
console.log(silverclass);
