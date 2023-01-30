// WCZYTYWANIE 🔽

if(kupnoToporu == false){
  document.getElementById("kupTopór").style.visibility = "visible";
}

if(kupnoWędki == false){
  document.getElementById("kupWędka").style.visibility = "visible";
}

// INFO 🔽

document.getElementById("infoWędka").onclick = function(){
  if(document.getElementById("infoTopórTekst").style.visibility = "hidden"){
    new Audio("/Audio/INFO.mp3").play();
    document.getElementById("infoWędkaTekst").style.visibility = "visible";
    setTimeout(function () { document.getElementById("infoWędkaTekst").style.visibility = "hidden" }, 3000);
  }
}

document.getElementById("infoTopór").onclick = function(){
  if(document.getElementById("infoWędkaTekst").style.visibility = "hidden"){
    new Audio("/Audio/INFO.mp3").play();
    document.getElementById("infoTopórTekst").style.visibility = "visible";
    setTimeout(function () { document.getElementById("infoTopórTekst").style.visibility = "hidden" }, 3000);
  }
}

// SKLEP 🔽

// WĘDKA //

document.getElementById("kupWędka").onclick = function(){
  if(kupnoWędki == false && złoto >= 75){
    new Audio("/Audio/SPRZEDAŻ.mp3").play();
    kupnoWędki = true;
    localStorage.setItem("kupnoWędki", kupnoWędki);
    złoto = złoto - 75;
    localStorage.setItem("złoto", złoto);
    document.getElementById("złoto").innerHTML = złoto;
    document.getElementById("kupWędka").style.visibility = "hidden";
  }
  else if(kupnoWędki == false && złoto < 75){
    new Audio("/Audio/ERROR.mp3").play();
    document.getElementById("zaMałoZłota").style.visibility = "visible";
    setTimeout(function () { document.getElementById("zaMałoZłota").style.visibility = "hidden" }, 2000);
  }
}

// TOPÓR //

document.getElementById("kupTopór").onclick = function(){
  if(kupnoToporu == false && złoto >= 400 && poziom >= 15){
    new Audio("/Audio/SPRZEDAŻ.mp3").play();
    kupnoToporu = true;
    localStorage.setItem("kupnoToporu", kupnoToporu);
    złoto = złoto - 400;
    localStorage.setItem("złoto", złoto);
    document.getElementById("złoto").innerHTML = złoto;
    document.getElementById("kupTopór").style.visibility = "hidden";
  }
  else if(kupnoToporu == false && złoto < 400 || poziom < 15){
    new Audio("/Audio/ERROR.mp3").play();
    document.getElementById("zaMałoZłota").style.visibility = "visible";
    setTimeout(function () { document.getElementById("zaMałoZłota").style.visibility = "hidden" }, 2000);
  }
}