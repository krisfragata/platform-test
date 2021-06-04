$(document).ready(()=>{

window.addEventListener('load', function(e){

    "use strict";

    // variables
    const start = document.querySelector("#startGameBtn");

    start.addEventListener('click', ()=>{
        start.style.display = 'none';

        // objects
        let game = new Game();
        let display = new Display(document.querySelector('#canvas'))
        const canvas = document.querySelector('#canvas');
        const c = canvas.getContext('2d');


        canvas.height = game.world.height;
        canvas.width = game.world.width;
        // game.world.player.x = canvas.width/2;
        // game.world.player.y = canvas.height;

        // calling all other scripts and objects created
        function render(){
            display.renderCanvas(game.world.backgroundColor);
            display.renderPlayer(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
            // display.render();
        }        
        render();
    })


})


})