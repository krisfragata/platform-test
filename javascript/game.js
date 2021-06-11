    const canvas = document.querySelector('#canvas');
    const Game = function(){
        this.world = {
            backgroundColor: "rgba(255, 203, 108, 0.25)",
            // "rgba(197, 147, 90, 0.25)",
            player: new Game.Player(),
            friction: 0.7,
            gravity: 7.8,
            width: innerWidth,
            height: innerHeight,

            collide: function(obj){
                if(obj.x<0){obj.x = 0; obj.xVel = 0;}
                else if(obj.x + obj.width > this.width){ obj.x = this.width - obj.width; obj.xVel = 0;}
                else if(obj.y + obj.height > this.height){ obj.y = this.height-obj.height; obj.jump = false; obj.yVel= 0; this.player.grounded = true;}
                if(obj.x<=10 || obj.x +obj.width > this.width - 10){this.player.isTouchingFront = true;}
                else{this.player.isTouchingFront = false}

            },


            update: function(){
                this.player.yVel += this.gravity;
                this.player.update();
                this.player.xVel *= this.friction;
                // this.player.yVel *= this.friction;
                this.collide(this.player);
            }
        };

        this.update = function(){this.world.update();}

    };

    Game.prototype = {constructor: Game};
    Game.Player = function(x,y){
        this.color = "#A195D6";
        this.x = 600;
        this.y = 500;
        this.xVel = 0;
        this.yVel = 0;
        this.jump =true;
        this.height = 70;
        this.width = 50;
        this.wallSlideVel = 0;
        this.wallJumpTime = 1000;
        // this.wallJumpVel = 20;
    }

    Game.Player.prototype = {
        constructor: Game.Player,

        moveLeft: function(){this.xVel -= 4.5;},
        moveRight: function(){this.xVel += 4.5;},
        jumping: function(){
                this.yVel -= 65;
                this.jump = true; 
                this.grounded = false;
        },
       


        down: function(){
            this.yVel += 20;
        },

        // wallJump: false,
        grounded: true,

        isTouchingFront: false,

        wallSliding: false,

        wallJump: false,

        wallJumping: function(){
            this.yVel -= 30;
            this.wallJump = true;
        },

        update: function(){
            this.x += this.xVel;
            this.y += this.yVel;
        
        }
    }

