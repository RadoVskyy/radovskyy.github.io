var zimatheme = document.getElementById("zimatheme");
zimatheme.volume = 0.5;

document.getElementById('stach').ondragstart = function() { return false; };

if(schematMost == "true"){
  document.getElementById("dajRyby").style.visibility = "hidden";
}

document.getElementById("stach").onclick = function(){
  if(schematMost == false){
    new Audio("/Audio/INFO.mp3").play();
    document.getElementById("infoStach").style.visibility = "visible";
    setTimeout(function(){ document.getElementById("infoStach").style.visibility = "hidden" }, 6000);
  }
}

document.getElementById("dajRyby").onclick = function(){
  if(ryby >= 5000){
    ryby -= 5000;
    document.getElementById("ryby").innerHTML = ryby;
    localStorage.setItem("ryby", ryby);
    schematMost = true;
    localStorage.setItem("schematMost", schematMost);
    new Audio("/Audio/ULEPSZENIA.mp3").play();
    document.getElementById("dajRyby").style.visibility = "hidden";
  }
  else{
    new Audio("/Audio/ERROR.mp3").play();
    document.getElementById("zaMałoRyb").style.visibility = "visible";
    setTimeout(function(){ document.getElementById("zaMałoRyb").style.visibility = "hidden" }, 3000);
  }
}