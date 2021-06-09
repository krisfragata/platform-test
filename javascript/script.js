$(document).ready(()=>{

window.addEventListener('load', function(e){

    "use strict";

    // variables
    const start = document.querySelector("#startGameBtn");
    // objects
    // calling all other scripts and objects created
    let controller = new Controller();
    let game = new Game();
    let display = new Display(document.querySelector('#canvas'))
    const canvas = document.querySelector('#canvas');
    const c = canvas.getContext('2d');


    canvas.height = game.world.height;
    canvas.width = game.world.width;
    // game.world.player.x = canvas.width/2;
    // game.world.player.y = canvas.height;

    // creating functions to call other scripts/"classes"
    function render(){
        display.renderCanvas(game.world.backgroundColor);
        display.renderPlayer(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
        // display.render();
    }        

    function keyPress(e){
        controller.keyPress(e.type, e.keyCode);
    }
    
    let jumpCount = 0;
    function update(){
        if(controller.left.active){  game.world.player.moveLeft();}
        if(controller.right.active) {game.world.player.moveRight();}
        if(controller.jump.active && controller.jump.jumpCount<2){ 
            // let jumpCount = 0;
            game.world.player.jumping(); 
            controller.jump.active =false;
            return;
        }
        else if(game.world.player.grounded){
            controller.jump.jumpCount = 0;
        }

        
        if(controller.down.active){game.world.player.down();}
        game.update();
        render();
    }
        
    start.addEventListener('click', ()=>{
        start.style.display = 'none';
        play();
    });

    function play(){
         // initializing things
         window.addEventListener("keydown",keyPress);
         window.addEventListener('keyup', keyPress);
         render();
         update();
         setInterval(update, 22);
    }

})


})