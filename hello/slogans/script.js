
var imageHal = document.getElementById("imgHal");

var imageHal2  = imageHal.addEventListener("touchstart", function(){
    imageHal.src = "pictures/hal/halGreen.gif";});

var imageHalReturn = imageHal.addEventListener("touchend", function(){
    imageHal.src = "pictures/hal/halRed.gif";
    newSlogan();    
    console.log(m);
    console.log(s);
});
var m = 0;
var s = 0;
function newSlogan(){
    for(x = 0; x < 3; x++){
    var createTr = document.createElement("tr");
    var createTd = document.createElement("td");
    var tableElement = document.querySelector("table");

    tableElement.appendChild(createTr);
    // var createTrTd = createTr.appendChild(createTd);
    var trNumber = document.querySelector("tr");
    m = m+1;
    for(i = 0; i < 3; i++){
        trNumber.appendChild(createTd);
        
        // document.tr.appendChild(createTd);
        // var createTdId = document.getElementsByTagName("td")[i];
        
        // // createTh.createTextNode(textNode);
        console.log("how it's work x3");
        s = s + 1;
        // return s;
    }
    console.log("check");
    // return m;
}
}
