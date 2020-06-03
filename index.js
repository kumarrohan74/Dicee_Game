var randomNumber1 = Math.random() * 6;
var original1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
var original2 = Math.floor(randomNumber2) + 1;

document.querySelector('.img1').src = "dice"+original1+".png";
document.querySelector('.img2').src = "dice"+original2+".png";

if(original1 > original2)
{
  document.querySelector('h1').innerHTML = "🚩 Player 1 Wins";
}
else if(original2 > original1)
{
  document.querySelector('h1').innerHTML = "Player 2 Wins 🚩";
}
else
{
  document.querySelector('h1').innerHTML = "Draw";
}
