class Ball {
	constructor() {
    	this.x = random(100, 200);
        this.y = random(100, 200);
        this.r = random(1, 100);
        
        this.vx = random(-5, 5);
        this.vy = random(-5, 5);
        
        this.r = random(0, 100);
        this.g = random(100, 200);
        this.b = random(200, 255);
        
        this.brightness = random(0, 255);
    }
    
    move() {   
        this.x += this.vx;
        this.y += this.vy;
    }
    
    bounceBall(that) {
        this.vx = -this.vx;
        this.vy = -this.vy;
        
        that.vx = -that.vx;
        that.vy = -that.vy;
    }

    bounceWall() {
        if (this.x > width - this.r || this.x < this.r) {
            this.vx = -this.vx + random(0,1);
        }

        if (this.y > height - this.r || this.y < this.r) {
            this.vy = -this.vy + random(0,1);
        }
    }
    
    intersects(that) {
        let d = dist(this.x, this.y, that.x, that.y);
        
        return (d < this.r + that.r);
    }
            

    show() {
        ellipseMode(CENTER);
        fill(this.r, this.g, this.b, this.brightness);
        ellipse(this.x, this.y, 2*this.r, 2*this.r);
    }
    
    dim(brightness) {
        this.brightness = brightness;
    }
    
    rollover(px, py) {
        var d = dist(px, py, this.x, this.y);
        
        return (d < this.r);
    }
}

