// Fullscreen

function fullscreen() {
   document.getElementById("fullscreen-alert").style.opacity = "0%";
   setTimeout( function() {document.getElementById("fullscreen-alert".style.display = "none")}, 2000)
   document.getElementById("background-video").style.filter = "blur(0rem)";
   setTimeout( function() {document.getElementById("menu").style.opacity = "100%"}, 1500);
}

window.onresize = function (event) {
   var maxHeight = window.screen.height,
       maxWidth = window.screen.width,
       curHeight = window.innerHeight,
       curWidth = window.innerWidth;

   if (maxWidth == curWidth && maxHeight == curHeight) {
       setTimeout(fullscreen, 500);
   }
}
