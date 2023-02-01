// POZIOM GRACZA, SZYNA, WCZYTYWANIE ZMIENNYCH 🔽

let łom = false;
łom = localStorage.getItem("łom");
if(łom == null){
  łom = false;
}

let schematŁom = false;
schematŁom = localStorage.getItem("schematŁom");
if(schematŁom == null){
  schematŁom = false;
}

let maskaGazowa = false;
maskaGazowa = localStorage.getItem("maskaGazowa");
if(maskaGazowa == null){
  maskaGazowa = false;
}

let schematMaskaGazowa = false;
schematMaskaGazowa = localStorage.getItem("schematMaskaGazowa");
if(schematMaskaGazowa == null){
  schematMaskaGazowa = false;
}

let budowaMost = false;
budowaMost = localStorage.getItem("budowaMost");
if(budowaMost == null){
  budowaMost = false;
}

let schematMost = false;
schematMost = localStorage.getItem("schematMost");
if(schematMost == null){
  schematMost = false;
}

let diamentowaSiekiera = false;
diamentowaSiekiera = localStorage.getItem("diamentowaSiekiera");
if(diamentowaSiekiera == null){
  diamentowaSiekiera = false;
}

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

let złom = 0;
złom = Number(localStorage.getItem("złom"));
if(złom == null){
  złom = 0;
}
document.getElementById("złom").innerHTML = złom;

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

document.getElementById("info").onclick = function(){
  new Audio("/Audio/INFO.mp3").play();
  document.getElementById("infoTekst").style.visibility = "visible";
  setTimeout(function () { document.getElementById("infoTekst").style.visibility = "hidden" }, 3000);
}
