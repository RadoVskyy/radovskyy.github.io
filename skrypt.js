// POZIOM GRACZA, SZYNA, WCZYTYWANIE ZMIENNYCH 🔽

let kupnoToporu = false;
kupnoToporu = localStorage.getItem("kupnoToporu");
if(kupnoToporu == null){
  kupnoToporu = false;
}

let kupnoWędki = false;
kupnoWędki = localStorage.getItem("kupnoWędki");
if(kupnoWędki == null){
  kupnoWędki = false;
}

let drewno = 0;
drewno = Number(localStorage.getItem("drewno"));
if(drewno == null){
  drewno = 0;
}
document.getElementById("drewno").innerHTML = drewno;

let złoto = 0;
złoto = Number(localStorage.getItem("złoto"));
if(złoto == null){
  złoto = 0;
}
document.getElementById("złoto").innerHTML = złoto;

let ryby = 0;
ryby = Number(localStorage.getItem("ryby"));
if(ryby == null){
  ryby = 0;
}
document.getElementById("ryby").innerHTML = ryby;

let poziom = 1;
poziom = Number(localStorage.getItem("poziom"));
if(poziom == null || poziom == 0){
  poziom = 1;
}
document.getElementById("poziom").innerHTML = poziom;

let xp = 0;
xp = Number(localStorage.getItem("xp"));
if(xp == null){
  xp = 0;
}
document.getElementById("xp").value = xp;
document.getElementById("xp").setAttribute("max", (poziom*1000))

document.getElementById("szyna").onclick = function(){
  xp = xp + 20;
  document.getElementById("xp").value = xp;
  localStorage.setItem("xp", xp)
  if(xp >= (poziom*1000)){
    new Audio("Audio/LEVEL UP.mp3").play();
    xp = 0;
    document.getElementById("xp").value = xp;
    localStorage.setItem("xp", xp)
    poziom = poziom + 1;
    document.getElementById("poziom").innerHTML = poziom;
    document.getElementById("xp").setAttribute("max", (poziom*1000))
    localStorage.setItem("poziom", poziom);
  }
  if(kupnoWędki == false){
    ryby = ryby + 1;
  }
  else{
    ryby = ryby + 2;
  }
  document.getElementById("ryby").innerHTML = ryby;
  localStorage.setItem("ryby", ryby);
  var wodaAudio = new Audio("Audio/WODA.mp3");
  wodaAudio.volume = 0.25;
  wodaAudio.play();
}

// NAZWA UŻYTKOWNIKA 🔽

let nazwaUzytkownika = "Gracz";
nazwaUzytkownika = localStorage.getItem("nazwaUzytkownika");
if(nazwaUzytkownika == null){
  nazwaUzytkownika = "Gracz";
}
document.getElementById("nazwaUżytkownika").innerHTML = nazwaUzytkownika;
document.getElementById("nazwaUżytkownika").onclick = function(){
  nazwaUzytkownika = window.prompt("Wprowadź nazwę użytkownika (MAX 10 ZNAKÓW!): ");
  if(nazwaUzytkownika.length > 10){
    alert("Za dużo znaków!")
  }
  else{
    document.getElementById("nazwaUżytkownika").innerHTML = nazwaUzytkownika;
    localStorage.setItem("nazwaUzytkownika", nazwaUzytkownika);
  }
}

// EKWIPUNEK 🔽

document.getElementById("rozwiń").onclick = function(){
  if(document.getElementById("ekwipunek").style.visibility == "visible"){
    document.getElementById("ekwipunek").style.visibility = "hidden";
  }
  else{
    document.getElementById("ekwipunek").style.visibility = "visible";
  }
}

// INFO 🔽

document.getElementById("infoFarma").onclick = function(){
  new Audio("Audio/INFO.mp3").play();
  document.getElementById("infoFarmaTekst").style.visibility = "visible";
  setTimeout(function () { document.getElementById("infoFarmaTekst").style.visibility = "hidden" }, 3000);
}

// FARMA 🔽

// AREK FARMER // 

document.getElementById("arekFarmer").onclick = function(){
  if(ryby >= 20){
    ryby = ryby - 20;
    document.getElementById("ryby").innerHTML = ryby;
    localStorage.setItem("ryby", ryby);
    złoto = złoto + 1;
    document.getElementById("złoto").innerHTML = złoto;
    localStorage.setItem("złoto", złoto);
    new Audio("Audio/SPRZEDAŻ.mp3").play();
  }
  else{
    new Audio("Audio/ERROR.mp3").play();
    document.getElementById("errorFarma").style.visibility = "visible";
    setTimeout(function () { document.getElementById("errorFarma").style.visibility = "hidden" }, 2000);
  }
}