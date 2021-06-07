    const Display = function(canvas){
        this.canvas = document.querySelector("#canvas");
        this.c = canvas.getContext('2d');

        this.renderPlayer = (x, y, width, height, color)=>{
            this.c.fillStyle = color;
            this.c.fillRect(Math.floor(x), Math.floor(y), width, height);
        }

        this.renderCanvas = (color)=>{
            this.c.fillStyle = color;
            this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        // this.render = ()=>{this.c.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, this.c.width, this.c.height);}

    }

