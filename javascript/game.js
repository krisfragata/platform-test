$(document).ready(()=>{

const Game = function(){
    this.world = {
        backgroundColor: "rgba(197, 147, 90, 0.25)",
        
        player: new Game.Player(),
        height: 72,
        width: 128,

        update: ()=>{
            
        }
        
    };

    this.update = ()=>{ this.world.update(); };
};

Game.prototype = { constructor: Game};

Game.Player = (x,y)=>{
    this.x =  100;
    this.y = 20;
    this.color = "#A195D6";
    this.height = 20;
    this.width = 20;
    this.jumping = true;
    xVel = 0;
    yVel = 0;
}

Game.Player.prototype = {
    constructor: Game.Player,

}
    

})