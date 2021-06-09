const Controller = function(){
    this.left = new Controller.input();
    this.right = new Controller.input();
    this.jump = new Controller.input();
    this.down = new Controller.input();
    this.keyPress = (type, keycode)=>{
        let active = (type == "keydown") ? true: false;
        switch(keycode){
            case 65: this.left.checkPress(active);
            break;
            case 68: this.right.checkPress(active); 
            break;
            case 32: this.jump.checkPress(active);
            this.jump.jumpCounter(type);
            break;
            case 83: this.down.checkPress(active);
        }
    }
}

Controller.prototype = {constructor: Controller};

Controller.input = function(){
    this.down = false;
    this.active = false;
}

Controller.input.prototype = {
    constructor: Controller.input,

    checkPress: function(active){
        if(this.down != active){
            this.active = active;
            this.down = active;
            console.log("pressed a moving key");
        }
        else{
            // this.jumpCount += 1;
            // this.active = false;
            console.log("moving key up")
        }
    },

    jumpCount: 0,

    jumpCounter: function(type){
        
        if(type == "keyup"){
            this.jumpCount += 1;
        }
    }, 

}