const Display = function(canvas){
    this.buffer = document.createElement('canvas').getContext('2d');
    this.c = canvas.getContext('2d');

    this.drawRect = (x, y, width, height, color)=>{
        this.buffer.fillStyle = color;
        this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height)
    }

    this.fill = (color)=>{
        this.buffer.fillStyle = color;
        this.buffer.fillRect = (0,0, this.buffer.canvas.width, this.buffer.canvas.height);
    }


};

Display.prototype = { constructor: Display}