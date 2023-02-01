var radiacja = document.getElementById("radiacja");
radiacja.volume = 0.2;

document.getElementById('złomKupa').ondragstart = function() { return false; };

document.getElementById("złomKupa").onclick = function(){
  var złomAudio = new Audio("/Audio/ZŁOM.mp3");
  złomAudio.volume = 0.25;
  złomAudio.play();
  złom += 1;
  localStorage.setItem("złom", złom);
  document.getElementById("złom").innerHTML = złom;
  xp = xp + 20;
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
