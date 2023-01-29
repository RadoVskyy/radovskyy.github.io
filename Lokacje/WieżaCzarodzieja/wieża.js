if(schematMaskaGazowa == false){
  document.getElementById("kupSchematMaskaGazowa").style.visibility = "visible";
}

document.getElementById("kupSchematMaskaGazowa").onclick = function(){
  if(złoto >= 150 && poziom >= 20){
    złoto -= 150;
    document.getElementById("złoto").innerHTML = złoto;
    localStorage.setItem("złoto", złoto);
    schematMaskaGazowa = true;
    localStorage.setItem("schematMaskaGazowa", schematMaskaGazowa);
    document.getElementById("kupSchematMaskaGazowa").style.visibility = "hidden";
    new Audio("/Audio/SPRZEDAŻ.mp3").play();
  }
  else{
    new Audio("/Audio/ERROR.mp3").play();
    document.getElementById("errorWieża").style.visibility = "visible";
    setTimeout(function(){ document.getElementById("errorWieża").style.visibility = "hidden"; }, 3000);
  }
}