var block = document.getElementById("block");
var hole = document.getElementById("hole");

//changes the position of the whole after every iteration of the block animation
hole.addEventListener('animationiteration', ()=>{
    var random = -((Math.random()*300)+150);
    hole.style.top = random+"px";
});