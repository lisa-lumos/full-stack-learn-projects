var randomNum1 = Math.floor(Math.random() * 6)+1;
var randomNum2 = Math.floor(Math.random() * 6)+1;

var pathImg1 = "assets/images/dice" + randomNum1 + ".png";
var pathImg2 = "assets/images/dice" + randomNum2 + ".png";

var diceImg1 = document.querySelector(".img1").setAttribute("src", pathImg1);
var diceImg2 = document.querySelector(".img2").setAttribute("src", pathImg2);

var h1_Object = document.querySelector("h1");

if (randomNum1 === randomNum2) {
  h1_Object.textContent = "Draw!";
} else if (randomNum1 > randomNum2) {
  h1_Object.textContent = "🚩 Player 1 Wins!";
} else {
  h1_Object.textContent = "Player 2 Wins! 🚩";
}
