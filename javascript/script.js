$(document).ready(()=>{

window.addEventListener('load', function(e){

    "use strict";

    // variables
    const start = document.querySelector("#startGameBtn");

    start.addEventListener('click', ()=>{
        start.style.display = 'none';

        // calling all other scripts and objects created
        function render(){
            display.fill(game.world.backgroundColor);
            display.drawRect(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color );
            display.render();
        }

        const canvas = document.querySelector('#canvas');
        let display = new Display(canvas);
        let game = new Game();

       

        setInterval(render, 1000/30);

    })


})


})