var schematytheme = document.getElementById("schematytheme");
schematytheme.volume = 0.5;

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