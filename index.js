// for Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // randomNumber generator betweeen 1-6

var randomSelectImage1 = "images/dice" + randomNumber1 +".png"; // randomSelection of images according to randomnumber

document.querySelector(".img1").setAttribute("src",randomSelectImage1); // changing images 

// for Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSelectImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randomSelectImage2);

// text content change

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Role Dices Again";
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins";
}