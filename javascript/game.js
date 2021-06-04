    const canvas = document.querySelector('#canvas');
    const Game = function(){
        this.world = {
            backgroundColor: "rgba(255, 203, 108, 0.25)",
            // "rgba(197, 147, 90, 0.25)",
            player: new Game.Player(),
            width: innerWidth,
            height: innerHeight,
        }

    };

    Game.prototype = {constructor: Game};
    Game.Player = function(x,y){
        this.color = "#A195D6";
        this.x = 200;
        this.y = 911;
        this.xVel = 0;
        this.yVel = 0;
        this.jump =true;
        this.height = 130;
        this.width = 70;
    }

    Game.Player.prototype = {
        constructor: Game.Player,
    }

