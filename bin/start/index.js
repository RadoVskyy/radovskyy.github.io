// Options

document.getElementById("options-button").onclick = function(){
    new Audio("/assets/audio/menu.mp3").play();
    if (document.getElementById("options").style.transform == "translate(0vw, -50%)"){
        document.getElementById("options").style.transform = "translate(-35vw, -50%)"
    }
    else {
        document.getElementById("options").style.transform = "translate(0vw, -50%)"
    }
    if (music == "false"){
        document.getElementById("music-button").style.color = "gray";
        document.getElementById("music-button").style.border = "3px solid gray";
    }
}

document.getElementById("music-button").onclick = function(){
    new Audio("/assets/audio/menu.mp3").play();
    if (music == "true"){
        music = "false";
        localStorage.setItem("music", music);
        document.getElementById("music-button").style.color = "gray";
        document.getElementById("music-button").style.border = "3px solid gray";
    }
    else if (music == "false"){
        music = "true";
        localStorage.setItem("music", music);
        document.getElementById("music-button").style.color = "rgb(3, 201, 3)";
        document.getElementById("music-button").style.border = "3px solid rgb(3, 201, 3)";
    }
}

// New game

document.getElementById("newgame-button").onclick = function(){
    if (confirm("Are you sure you want to start a new game?\nAll progress will be lost!") == true){
        window.location.href = "/bin/base/intro.html";
    }
}

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
 