var character = document.getElementById("character");
var enemy1 = document.getElementById("enemy1");
var enemy2 = document.getElementById("enemy2");
var enemy3 = document.getElementById("enemy3");
var enemy4 = document.getElementById("enemy4");
var enemy5 = document.getElementById("enemy5");
function move(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate")
    }, 2000);
}

const pc = newPlayableCharacter(100, 110)