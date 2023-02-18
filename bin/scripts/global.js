// Variables from localstorage

let music = localStorage.getItem("music");
if (music == null){
   music = "true";
}

// Loading screen

var loading_screen = document.getElementById("loading-screen");

window.addEventListener("load", function() {
   loading_screen.style.display = "none";
})