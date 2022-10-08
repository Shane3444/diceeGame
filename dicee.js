if (performance.navigation.type === performance.navigation.TYPE_RELOAD){

  var n1 = Math.random();
  var n2 = Math.random();
  n1 = Math.floor((n1 * 6) + 1);
  n2 = Math.floor((n2 * 6) + 1);
  randomImageSource1 = "images/dice"+n1+".png";
  randomImageSource2 = "images/dice"+n2+".png";
  document.querySelector(".dice1").setAttribute("src", randomImageSource1);
  document.querySelector(".dice2").setAttribute("src", randomImageSource2);

  if (n1 > n2){
    document.querySelector(".result").innerHTML = "🔥 Player 1 Wins";
  }
  else if (n1 < n2) {
    document.querySelector(".result").innerHTML = "Player 2 Wins 🔥";
  }
  else {
    document.querySelector(".result").innerHTML = "It's a Tie";
  }
}
