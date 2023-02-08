var nighttheme = document.getElementById("nighttheme");
if(muzyka == "true"){
  nighttheme.volume = 0.5;
}
else{
  nighttheme.volume = 0;
}

document.getElementById('drzewo').ondragstart = function() { return false; };
document.getElementById('konradDrwal').ondragstart = function() { return false; };

let drzewoHP = 100;

document.getElementById("drzewo").onclick = function(){
  if(kupnoToporu == "true"){
    drzewoHP -= 20;
  }
  else if(diamentowaSiekiera == "true"){
    drzewoHP -= 10;
  }
  else{
    drzewoHP -= 5;
  }
  document.getElementById("drzewoHP").value = drzewoHP;
  if(drzewoHP == 0){
    drewno += 10;
    localStorage.setItem("drewno", drewno);
    document.getElementById("drewno").innerHTML = drewno;
    new Audio("/Audio/DRZEWOSPADA.mp3").play();
    drzewoHP = 100;
    document.getElementById("drzewoHP").value = drzewoHP;
    xp = xp + 100;
    document.getElementById("xp").value = xp;
    localStorage.setItem("xp", xp)
    if(xp >= (poziom*1000)){
      new Audio("/Audio/LEVEL UP.mp3").play();
      xp = 0;
      document.getElementById("xp").value = xp;
      localStorage.setItem("xp", xp)
      poziom = poziom + 1;
      document.getElementById("poziom").innerHTML = poziom;
      document.getElementById("xp").setAttribute("max", (poziom*1000))
      localStorage.setItem("poziom", poziom);
    }
  }
}

document.getElementById("konradDrwal").onclick = function(){
  if(drewno >= 30){
    drewno = drewno - 30;
    localStorage.setItem("drewno", drewno);
    document.getElementById("drewno").innerHTML = drewno;
    złoto = złoto + 3;
    document.getElementById("złoto").innerHTML = złoto;
    localStorage.setItem("złoto", złoto);
    new Audio("/Audio/SPRZEDAŻ.mp3").play();
  }
  else{
    new Audio("/Audio/ERROR.mp3").play();
    document.getElementById("errorLas").style.visibility = "visible";
    setTimeout(function () { document.getElementById("errorLas").style.visibility = "hidden" }, 2000);
  }
}
