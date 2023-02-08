// USTAWIENIA 🔽

dragElement(document.getElementById("ustawienia"));

document.getElementById("plecak").onclick = function () {

  if(document.getElementById("plecakDiv").style.visibility == "visible") {
    document.getElementById("plecakDiv").style.visibility = "hidden";
  }
  else {
    document.getElementById("ustawienia").style.visibility = "hidden";
    document.getElementById("plecakDiv").style.visibility = "visible";
  }
}

if(muzyka == "false"){
  document.getElementById("muzykaPrzycisk").innerHTML = "OFF";
  document.getElementById("muzykaPrzycisk").style.background = "red";
}

document.getElementById("muzykaPrzycisk").onclick = function(){
  if(muzyka == "true"){
    muzyka = "false";
    localStorage.setItem("muzyka", muzyka);
    document.getElementById("muzykaPrzycisk").innerHTML = "OFF";
    document.getElementById("muzykaPrzycisk").style.background = "red";
    maintheme.volume = 0;
  }
  else{
    muzyka = "true";
    localStorage.setItem("muzyka", muzyka);
    document.getElementById("muzykaPrzycisk").innerHTML = "ON";
    document.getElementById("muzykaPrzycisk").style.background = "green";
    maintheme.volume = 0.3;
  }
}

document.getElementById("ustawieniaPrzycisk").onclick = function(){
  if(document.getElementById("ustawienia").style.visibility == "visible"){
    document.getElementById("ustawienia").style.visibility = "hidden";
  }
  else{
    document.getElementById("plecakDiv").style.visibility = "hidden";
    document.getElementById("ustawienia").style.visibility = "visible";
  }
}

// ZMIENNE 🔽

var maintheme = document.getElementById("maintheme");
if(muzyka == "true"){
  maintheme.volume = 0.3;
}
else{
  maintheme.volume = 0;
}

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

