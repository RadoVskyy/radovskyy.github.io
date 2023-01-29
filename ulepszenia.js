// WCZYTYWANIE ZMIENNYCH //

if(diamentowaSiekiera == false){
  document.getElementById("ulepszenieSiekiera").style.background = "rgba(101, 0, 0, 0.4)"
}

if(kupnoToporu == false){
  document.getElementById("ulepszenieTopór").style.background = "rgba(101, 0, 0, 0.4)"
}

if(kupnoWędki == false){
  document.getElementById("ulepszenieWędka").style.background = "rgba(101, 0, 0, 0.4)"
}

let tekstNaEkranie = false;

// KLIKANIE //

document.getElementById("ulepszenieWędka").onclick = function(){
    if(tekstNaEkranie == false){
      tekstNaEkranie = true;
      new Audio("Audio/INFO.mp3").play()
      document.getElementById("infoWędka").style.visibility = "visible";
      setTimeout(function () { document.getElementById("infoWędka").style.visibility = "hidden" }, 2000);
      setTimeout(function () { tekstNaEkranie = false; }, 2000);
    }
}


document.getElementById("ulepszenieTopór").onclick = function(){
  if(tekstNaEkranie == false){
    tekstNaEkranie = true;
    new Audio("Audio/INFO.mp3").play()
    document.getElementById("infoTopór").style.visibility = "visible";
    setTimeout(function () { document.getElementById("infoTopór").style.visibility = "hidden" }, 2000);
    setTimeout(function () { tekstNaEkranie = false }, 2000);
  }
}

document.getElementById("ulepszenieSiekiera").onclick = function(){
  if(tekstNaEkranie == false){
    tekstNaEkranie = true;
    new Audio("Audio/INFO.mp3").play()
    document.getElementById("infoSiekiera").style.visibility = "visible";
    setTimeout(function () { document.getElementById("infoSiekiera").style.visibility = "hidden" }, 2000);
    setTimeout(function () { tekstNaEkranie = false }, 2000);
  }
}