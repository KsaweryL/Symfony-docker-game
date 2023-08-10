var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

//changes the position of the hole after every iteration of the block animation
hole.addEventListener('animationiteration', ()=>{
    var random = Math.random()*3;
    var top = random*100 + 150;
    hole.style.top = -top + "px";

    //counting points
    counter++;
});

//related to the gravity of the character
setInterval(function(){
    var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));       //get the top position of the character

    //start falling only if jumping has the value 0
    if(jumping==0) {
        character.style.top = (characterTop + 3) + "px";
    }
    //defining where a hit would occur
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("left")) + 50;
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = characterTop - 500;

    //for testing
    // console.log("holeBottom: " + (holeTop+130).toString());
    // console.log("holeTop: " + holeTop.toString());
    // console.log("cTop: " + cTop.toString());

    //hit detection
    if((characterTop>480)||((blockLeft<32)&&(blockLeft>-14)&&((cTop<holeTop - 2)||(cTop>holeTop+126)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }

},10)

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function() {
        var characterTop =
            parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6) && (counter<15)) {
            character.style.top = (characterTop - 5) + "px";                                    //actual jump
        }

        if(jumpCount>30){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }

        jumpCount++;
    },10);

}