var d1 = Math.floor(Math.random() * 7);
var d2 = Math.floor(Math.random() * 7);

switch (d1) {
  case 1:
    document
      .getElementById("d1")
      .setAttribute("src", "/Dice game/img/dice1.png");
    break;
  case 2:
    document
      .getElementById("d1")
      .setAttribute("src", "/Dice game/img/dice2.png");
    break;
  case 3:
    document
      .getElementById("d1")
      .setAttribute("src", "/Dice game/img/dice3.png");
    break;
  case 4:
    document
      .getElementById("d1")
      .setAttribute("src", "/Dice game/img/dice4.png");
    break;
  case 5:
    document
      .getElementById("d1")
      .setAttribute("src", "/Dice game/img/dice5.png");
    break;
  case 6:
    document
      .getElementById("d1")
      .setAttribute("src", "/Dice game/img/dice6.png");
    break;
}
switch (d2) {
  case 1:
    document
      .getElementById("d2")
      .setAttribute("src", "/Dice game/img/dice1.png");
    break;
  case 2:
    document
      .getElementById("d2")
      .setAttribute("src", "/Dice game/img/dice2.png");
    break;
  case 3:
    document
      .getElementById("d2")
      .setAttribute("src", "/Dice game/img/dice3.png");
    break;
  case 4:
    document
      .getElementById("d2")
      .setAttribute("src", "/Dice game/img/dice4.png");
    break;
  case 5:
    document
      .getElementById("d2")
      .setAttribute("src", "/Dice game/img/dice5.png");
    break;
  case 6:
    document
      .getElementById("d2")
      .setAttribute("src", "/Dice game/img/dice6.png");
    break;
}
if(d1 > d2){
  document.querySelector("h1").textContent="Player 1 Wins 👑";
}
else if(d1 == d2){
  document.querySelector("h1").textContent="Draw";
}
else{
  document.querySelector("h1").textContent="Player 2 Wins 👑"
}