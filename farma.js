document.getElementById('arekFarmer').ondragstart = function() { return false; };
document.getElementById('szyna').ondragstart = function() { return false; };
document.getElementById('diamentowaSiekiera').ondragstart = function() { return false; };

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

// DIAMENTOWA SIEKIERA //

document.getElementById("diamentowaSiekiera").onclick = function(){
  diamentowaSiekiera = true;
  localStorage.setItem("diamentowaSiekiera", diamentowaSiekiera);
  document.getElementById("diamentowaSiekiera").style.visibility = "hidden";
  new Audio("Audio/ULEPSZENIA.mp3").play();
}

if(diamentowaSiekiera == false){
  document.getElementById("diamentowaSiekiera").style.visibility = "visible";
}

// SZYNA //

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
