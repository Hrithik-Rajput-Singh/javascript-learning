var randomNumber1 =Math.floor(Math.random()*6)+1;       //slelecting random no from 1 to 6

var randomImagesSource = "images/dice"+randomNumber1+".png";      //image/dice1.png-dice6.png

var images1 = document.querySelectorAll("img")[0];                //pointing selector
images1.setAttribute("src", randomImagesSource);                 //setting attribute to random img source from src html se


var randomNumber2 =Math.floor(Math.random()*6)+1;                   //same as above
var randomImagesSource2 = "images/dice" +randomNumber2+".png";
var image2 = document.querySelectorAll('img')[1].setAttribute("src", randomImagesSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player one wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player two wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}










