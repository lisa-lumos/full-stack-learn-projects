var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var pathImg1 = "assets/images/dice"+randomNumber1+".png";
var pathImg2 = "assets/images/dice"+randomNumber2+".png";

var diceImg1 = document.querySelector(".img1").setAttribute("src", pathImg1);
var diceImg2 = document.querySelector(".img2").setAttribute("src", pathImg2);

var titleText = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  titleText.textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  titleText.textContent = "🚩 Player 1 Wins!";
} else {
  titleText.textContent = "Player 2 Wins! 🚩";
}
