const Controller = function(){
    this.left = new Controller.input();
    this.right = new Controller.input();
    this.jump = new Controller.input();
    this.keyPress = (type, keycode)=>{
        let active = (type == "keydown") ? true: false;
        switch(keycode){
            case 65: this.left.checkPress(active);
            break;
            case 68: this.right.checkPress(active); 
            break;
            case 32: this.jump.checkPress(active);
        }
    }
}

Controller.prototype = {constructor: Controller};

Controller.input = function(){
    // this.down = false;
    this.active = this.down = false;
}

Controller.input.prototype = {
    constructor: Controller.input,

    checkPress: function(active){
        if(active){
            this.active = true;
            console.log("pressed a moving key");
        }
        else{
            this.active = false;
            console.log("moving key up")
        }
    } 

}