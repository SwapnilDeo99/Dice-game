var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
switch (d1) {
  case 1:
    document
      .getElementById("d1")
      .setAttribute("src", "img/dice1.png");
    break;
  case 2:
    document
      .getElementById("d1")
      .setAttribute("src", "img/dice2.png");
    break;
  case 3:
    document
      .getElementById("d1")
      .setAttribute("src", "img/dice3.png");
    break;
  case 4:
    document
      .getElementById("d1")
      .setAttribute("src", "img/dice4.png");
    break;
  case 5:
    document
      .getElementById("d1")
      .setAttribute("src", "img/dice5.png");
    break;
  case 6:
    document
      .getElementById("d1")
      .setAttribute("src", "img/dice6.png");
    break;
}
switch (d2) {
  case 1:
    document
      .getElementById("d2")
      .setAttribute("src", "img/dice1.png");
    break;
  case 2:
    document
      .getElementById("d2")
      .setAttribute("src", "img/dice2.png");
    break;
  case 3:
    document
      .getElementById("d2")
      .setAttribute("src", "img/dice3.png");
    break;
  case 4:
    document
      .getElementById("d2")
      .setAttribute("src", "img/dice4.png");
    break;
  case 5:
    document
      .getElementById("d2")
      .setAttribute("src", "img/dice5.png");
    break;
  case 6:
    document
      .getElementById("d2")
      .setAttribute("src", "img/dice6.png");
    break;
}
if(d1 > d2){
  document.querySelector("h1").textContent="Player 1 Wins 👑";
}
else if(d1 === d2){
  document.querySelector("h1").textContent="Draw";
}
else{
  document.querySelector("h1").textContent="Player 2 Wins 👑"
}
