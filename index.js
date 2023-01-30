var maintheme = document.getElementById("maintheme");
maintheme.volume = 0.5;

if(maskaGazowa == "true"){
  document.getElementById("szynaRadiacja").style.visibility = "visible";
}

if(budowaMost == "true"){
  document.getElementById("mostCzarodzieja").style.visibility = "visible";
  document.getElementById("budowaMostCzarodzieja").style.visibility = "hidden";
  document.getElementById("karol").style.visibility = "visible";
}

document.getElementById('mostCzarodzieja').ondragstart = function() { return false; };

// BUDOWA MOSTU CZARODZIEJA 🔽

document.getElementById("budowaMostCzarodzieja").onclick = function(){
  if(budowaMost == false && złoto >= 750 && drewno >= 1500 && schematMost == "true"){
    new Audio("Audio/BUDOWANIE.mp3").play();
    budowaMost = "true";
    localStorage.setItem("budowaMost", budowaMost);
    złoto -= 750;
    document.getElementById("złoto").innerHTML = złoto;
    localStorage.setItem("złoto", złoto);
    drewno -= 1500;
    document.getElementById("drewno").innerHTML = drewno;
    localStorage.setItem("drewno", drewno);
    document.getElementById("mostCzarodzieja").style.visibility = "visible";
    document.getElementById("budowaMostCzarodzieja").style.visibility = "hidden";
    document.getElementById("karol").style.visibility = "visible";
  }
  else{
    new Audio("Audio/ERROR.mp3").play();
  }
}

