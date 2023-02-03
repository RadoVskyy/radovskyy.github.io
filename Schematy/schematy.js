var schematytheme = document.getElementById("schematytheme");
if(muzyka == "true"){
  schematytheme.volume = 0.5;
}
else{
  schematytheme.volume = 0;
}

if(schematMost == "true"){
  document.getElementById("schematMostCzarodzieja").style.color = "green";
}

if(schematMaskaGazowa == "true"){
  document.getElementById("schematMaskaGazowa").style.color = "green";
}

if(schematŁom == "true"){
  document.getElementById("schematŁom").style.color = "green";
}