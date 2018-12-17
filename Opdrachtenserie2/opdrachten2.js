// Opdrachten serie 2


//Oefening 1

// function oppRechthoek () {
//   let breedte = prompt("Geef de breedte?");
//   let lengte = prompt("Geef de lengte?");
//   alert("De oppervlakte van je rechthoek is " + (lengte * breedte) +" cm^2.");
// }

// function perimeterRectangle() {
//   let breedte = prompt("Geef de breedte?");
//   let lengte = prompt("Geef de lengte?");
//   alert("De omtrek van je rechthoek is " + ((lengte * 2) + (breedte * 2)) + " cm.");
// }


//Oefening 2

// let straal = prompt("Geef een straal in.");

// function oppCirkel() {
//   let straal = prompt("Geef een straal in.");
//   let oppervlakte = (straal * straal) * Math.PI
//   alert("De oppervlakte van je cirkel is " + oppervlakte + " cm^2.")
// }


//Oefening 3

// let a = 3;
// let b = 2;
//
// function tripple(x) {
//   return x * 3
// }
//
// function display() {
//   alert(tripple(a));
//   alert(tripple(b));
// }


//Oefening 4

// var tab = [-2, 1, 4];
// function add(x) {
//   return x + 2;
// }
// function display() {
// alert(add(tab[0]));                  //for (i=0; i < tab.length; i++) {
// alert(add(tab[tab.length-1]));       // alert(add(i));
//
// }


//Oefening 5
//
// let b = 2;
// let a;
// a=b++;
// a=++b;
// a=b--;
// a=--b;
// a+=b++;
// a=1; a+=++b;
// a=1; a-=b++;
// a=1; a-=++b;
// a=1; a+=b--;
// a=1; a+=--b;
//
// console.log(a);
// console.log(b);


//Oefening 6    WERKT NIET

//1.
// let tab = [-2, 1, 4];
// let x;
// // 2.
// function subtract(x) {
//   // return (x-tab[0]);
//     if (x-tab[0] >= 0) {
//     console.log("Het getal is positief.");
//   } else {
//     console.log("Het getal is negatief");
//   }
// }
// // 3.
//
// function display () {
//   function subtract2(x) {
//     return x - tab[tab.length - 1];
//   }
//   alert(subtract(x));
//   alert(subtract2(x));
// }

//Versie Mahdi
//
// let tab = [-2,1,4];
// function substract(x){
//   console.log(x>=0?"Getal positief":"Negatief getal!");
//   return 10 - x;
// }
// function display(){
//   let a = substract(tab[0]);
//   alert(`Aftrekking met het eerste element uit de array  = ${a}`);
//   let b = substract(tab[tab.length-1]);
//   alert(`Aftrekking met het tweede element uit de array = ${b}`);
// }

//Versie Tom
// var tab = [-1, 2, 4];
//
// function add(x){
//   return x+2;
// }
//
//
// function subtract(x){
//   x = x-tab[0];
//   if (x< 0){
//     alert("negatief getal!");
//   } else if (x >= 0){
//     alert("Getal positief.");
//   }
//   return x;
// }
//
// function display3(){
//   alert(subtract(tab[0]));
//   temp = (tab.length-1);
//   alert(subtract(tab[temp]));
// }

// Oefening 7

// function makeChoice() {
//   let keuze = prompt("Kies een nummer tussen 1, 2 en 3.");
//   switch (keuze) {
//     case ("1"):
//       alert("1. Thank you");
//       break;
//     case ("2"):
//       alert("2. Hello");
//       break;
//     case ("3"):
//       alert("3. Good bye");
//       break;
//     default:
//       alert("Excuse me, what do you want?");
// }
// }


// Oefening 8

// function weekday() {
//   var day;
//   switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
//   alert("Vandaag is het " + day + " .");
// }
// console.log(new Date().getDay());


// Oefening 9
//
// function testWhile () {
//   string = prompt("Geef een string in die de letter \"p\" bevat.");
//   // var n = string.includes("p");
//   while (string.includes("p") === false) {
//     alert("Deze string bevat geen letter p, probeer opnieuw");
//     string = prompt("Geef een string in die de letter \"p\" bevat.");
//
//
//   }
//   alert("Deze string bevat de letter p, string: " + string + " .");
// }


// Oefening 10

// function sum () {
//   let getal1 = prompt("Geef een getal in.");
//   let getal2 = prompt("Geef nog een getal in");
//   let getal3 = prompt("Geef een laatste getal in");
//   for (isNaN(getal1)===true; isNaN(getal2)===true; isNaN(getal3)===true); {
//     getal1
//   } let som = parseFloat(getal1) + parseFloat(getal2) + parseFloat(getal3)
//     alert("De som van de 3 getallen is " + som + " ");
// }


//Oefening 11
// versie Mahdi
// function calcAverage(){
//   alert("Je gaat gehele getallen moeten invoeren");
//   let count = 0;
//   let getal = 0;
//   let som = 0;
//   let check = true;
//
//   while(check && getal >= 0){
//     getal = parseFloat(prompt("Geef een geheel getal:"));
//     check = getal%1==0;
//
//     while(!check){
//     alert("Je hebt geen getal ingevoerd... Geef een getal:");
//     getal = parseFloat(prompt("Geef een geheel getal:"));
//     check = getal%1==0;
//     }
//     som += getal;
//     count++;
//   }
//   alert("Aantal ingevoerde getallen = "+(count-1)+". Gemiddelde van de ingevoerde getallen = "+(som/count));
// }

// Mijn Versie
// function calcAverage() {
//   let aantalGetallen = 0;
//   let som = 0;
//   let invoer = 0;
//   invoer = parseInt(prompt("geef een getal in."));
//   let check = invoer%1 == 0;
//   while (invoer >= 0 && check) {
//     aantalGetallen++;
//     som += invoer;
//     invoer = parseInt(prompt("geef een getal in."));
//     check = invoer%1 == 0;
//   while (!check) {
//     alert("Je hebt geen getal ingevoerd, geef een getal!")
//     invoer = parseInt(prompt("geef een getal in."));
//     check = invoer%1 == 0;
//   }
//
//   }
//     alert("Je ingevoerde getal is geen geheel getal");
//     let gemiddelde = som / aantalGetallen;
//
//
//   alert("Het aantal ingevoerde getallen zijn " + aantalGetallen + " .");
//   alert("Het gemiddelde is " + gemiddelde + " .");
//
// }


//Oefening 12

// function TemperatureConversion() {
//   let invoer = prompt("Maak een keuze(nummer):\n\n0.End of the program:\n1.Celsius to Fahrenheit\n2.Celsius to Kelvin\n3.Fahrenheit to Celsius\n4.Fahrenheit to Kelvin\n5.Kelvin to Celsius\n6.Kelvin to Fahrenheit");
//   let fahrenheit = 0;
//   let kelvin = 0;
//   let celsius = 0;
//
//   switch (invoer) {
//     case '0': alert("You ended the program.");
//       break;
//     case '1': celsius = parseInt(prompt("You started the Celsius to Fahrenheit program... please input your Celius value."));
//       alert("Celsius to Fahrenheit = F°"+(celsius * 9/5 + 32));
//       break;
//     case '2': celsius = parseInt(prompt("You started the Celsius to Kelvin program... please input your Celius value."));
//       alert("Celsius to Kelvin = K°"+(celsius + 273.15));
//       break;
//     case '3': fahrenheit = parseInt(prompt("You started the Fahrenheit to Celsius program... please input your Fahrenheit value."));
//       alert("Fahrenheit to Celsius = C°"+((fahrenheit - 32) / (9/5)));
//       break;
//     case '4': fahrenheit = parseInt(prompt("You started the Fahrenheit to Kelvin program... please input your Fahrenheit value."));
//       alert("Fahrenheit to Kelvin = K°"+(((fahrenheit - 32) * (5/9)) + 273.15));
//       break;
//     case '5': kelvin = parseInt(prompt("You started the Kelvin to Celsius program... please input your Kelvin value."));
//       alert("Kelvin to Celsius = C°"+(kelvin - 273.15));
//       break;
//     case '6': kelvin = parseInt(prompt("You started the Kelvin to Fahrenheit program... please input your Kelvin value."));
//       alert("Kelvin to Fahrenheit = F°"+((kelvin * 9/5) - 459.67));
//       break;
//   }
// }


// Oefening 13

// function calcBMI() {
//   let gewicht, lengte;
//   gewicht = parseInt(prompt("Geef je gewicht in kilogram."));
//   lengte = parseFloat(prompt("Geef je lengte in meter."));
//   var bmi = gewicht / (lengte*lengte);
//   bmi = Number(bmi.toFixed(2));
//
//   if(bmi >= 40){
//     alert("morbide obesitas");
//   } else if(bmi >= 35) {
//     alert("ernstige overgewicht");
//   } else if(bmi >= 30) {
//     alert("matig overgewicht");
//   } else if(bmi >= 25) {
//     alert("overgewicht");
//   } else if(bmi >= 18.5) {
//     alert("normale bouw");
//   } else if(bmi >= 16.5) {
//     alert("dunheid");
//   } else {
//     alert("u bent te dun en ondervoed!");
//   }
//   alert("Een persoon die " + gewicht + " kg weegt en " + lengte + " M meet, heeft een BMI van " + bmi + " .");
// }
