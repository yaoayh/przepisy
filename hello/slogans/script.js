
var imageHal = document.getElementById("imgHal");

var imageHal2  = imageHal.addEventListener("touchstart", function(){
    imageHal.src = "pictures/hal/halGreen.gif";});

var imageHalReturn = imageHal.addEventListener("touchend", function(){
    imageHal.src = "pictures/hal/halRed.gif";
    newSlogan();    
    numberOfProducts ++;
    prise = prise + 0.50;
});
var numberOfTr = 0;
var numberOfTd = -2;
var numberOfProducts = 1;
var prise = 0.50;
function newSlogan(){
    var tableElement = document.getElementsByTagName("table")[0];
    var createTr = document.createElement("tr");
    tableElement.appendChild(createTr);

    for(x = 0; x < 3; x++){
        var trElement = document.getElementsByTagName("tr")[numberOfTr];
        var createTd = document.createElement("td");
        trElement.appendChild(createTd);
        numberOfTd ++;
        }

    var tdCreate = document.getElementsByTagName("td")[numberOfTd];
    var createTdSlogan = document.createTextNode(newSloganFunction());
    tdCreate.appendChild(createTdSlogan);
    numberOfTr ++;
    console.log("check");
    document.getElementById("itemsNumber").innerHTML = "Ilość: " + numberOfProducts;
    document.getElementById("amount").innerHTML = "Do zapłaty: " + prise + "$";
    console.log(numberOfTr);
    console.log(numberOfTd);
 }

// x = addEventListener("click", function(){
//     newP = document.createElement("p");
//     newNodeP = document.createTextNode(newSloganFunction());
//     newP.appendChild(newNodeP);
//     tableX = document.querySelector("table");
//     tableX.appendChild(newP);
// });




// script for creating new slogans
var word1 = ["interpersonalne", "asymetryczne", "empiryczne", "strategiczne", "liryczne", "kanoniczne", "demokratyczne", "nieskalowalne", "jednokierunkowe", "oportunistyczne"];
var word2 = ["wyładowanie", "wyprofilowanie", "udokumentowanie", "wyrównanie", "wyodrębnienie", "rozgałęzienie", "oderwanie", "porównanie", "reagowanie", "korelacjonowanie"];
var word3 = ["asocjalności twórczej", "pragmatyzmu społecznego", "liberalności narodowej", "jedności komunistycznej", "niepoprawności politycznej", "tradycji Polskiej", "reakcji obronnej", "prokrasycynacji", "teorii darwina", "anonimowości społecznej"];
function getRandom1() {
    return Math.floor(Math.random() * word1.length);
  }

function getRandom2() {
   return Math.floor(Math.random() * word2.length);
 }

 function getRandom3() {
    return Math.floor(Math.random() * word3.length);
  }
function newSloganFunction(){
newSloganX = '"' + word1[getRandom1()] + " " + word2[getRandom2()] + " " + word3[getRandom3()] + '"';
return newSloganX;}
// alert(newSlogan);
