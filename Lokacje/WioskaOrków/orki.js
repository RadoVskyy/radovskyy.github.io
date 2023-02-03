// MUZYKA 

var schematytheme = document.getElementById("schematytheme");
if(muzyka == "true"){
  schematytheme.volume = 0.5;
}
else{
  schematytheme.volume = 0;
}

// MASKA GAZOWA

if(maskaGazowa == "true"){
  document.getElementById("przyciskMaskaGazowa").style.visibility = "hidden";
}

document.getElementById("przyciskMaskaGazowa").onclick = function(){
  if(schematMaskaGazowa == "true" && złoto >= 350 && maskaGazowa == false){
    document.getElementById("przyciskMaskaGazowa").style.visibility = "hidden";
    new Audio("/Audio/SCHEMATY.mp3").play();
    złoto -= 350
    document.getElementById("złoto").innerHTML = złoto;
    localStorage.setItem("złoto", złoto);
    maskaGazowa = "true";
    localStorage.setItem("maskaGazowa", maskaGazowa);
  }
  else{
    new Audio("/Audio/ERROR.mp3").play();
  }
}

// ŁOM

if(łom == "true"){
  document.getElementById("przyciskŁom").style.visibility = "hidden";
}

document.getElementById("przyciskŁom").onclick = function(){
  if(schematŁom == "true" && złoto >= 500 && złom >= 750 && łom == false){
    document.getElementById("przyciskŁom").style.visibility = "hidden";
    new Audio("/Audio/SCHEMATY.mp3").play();
    złoto -= 500
    document.getElementById("złoto").innerHTML = złoto;
    localStorage.setItem("złoto", złoto);
    złom -= 750;
    document.getElementById("złom").innerHTML = złom;
    localStorage.setItem("złom", złom);
    łom = "true";
    localStorage.setItem("łom", łom);
  }
  else{
    new Audio("/Audio/ERROR.mp3").play();
  }
}

// NAWIGACJA

document.getElementById("jeden").onclick = function(){
  new Audio("/Audio/ULEPSZENIA.mp3").play();
  document.getElementById("jeden").style.background = "white";
  document.getElementById("dwa").style.background = "gray";
  document.getElementById("trzy").style.background = "gray";
  document.getElementById("craftingMaskaGazowa").style.visibility = "visible";
  document.getElementById("zasobyMaskaGazowa").style.visibility = "visible";
  document.getElementById("craftingŁom").style.visibility = "hidden";
  document.getElementById("zasobyŁom").style.visibility = "hidden";
}

document.getElementById("dwa").onclick = function(){
  new Audio("/Audio/ULEPSZENIA.mp3").play();
  document.getElementById("jeden").style.background = "gray";
  document.getElementById("dwa").style.background = "white";
  document.getElementById("trzy").style.background = "gray";
  document.getElementById("craftingŁom").style.visibility = "visible";
  document.getElementById("zasobyŁom").style.visibility = "visible";
  document.getElementById("craftingMaskaGazowa").style.visibility = "hidden";
  document.getElementById("zasobyMaskaGazowa").style.visibility = "hidden";
}