// WCZYTYWANIE ZMIENNYCH //

if(kupnoToporu == false){
  document.getElementById("ulepszenieTopór").style.background = "rgba(101, 0, 0, 0.4)"
}

if(kupnoWędki == false){
  document.getElementById("ulepszenieWędka").style.background = "rgba(101, 0, 0, 0.4)"
}

// KLIKANIE //

document.getElementById("ulepszenieWędka").onclick = function(){

    new Audio("Audio/INFO.mp3").play()
    document.getElementById("infoWędka").style.visibility = "visible";
    setTimeout(function () { document.getElementById("infoWędka").style.visibility = "hidden" }, 3000);
}


document.getElementById("ulepszenieTopór").onclick = function(){
  
    new Audio("Audio/INFO.mp3").play()
    document.getElementById("infoTopór").style.visibility = "visible";
    setTimeout(function () { document.getElementById("infoTopór").style.visibility = "hidden" }, 3000);
}

