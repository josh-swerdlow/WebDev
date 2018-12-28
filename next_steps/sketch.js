let balls = [];

function setup() {
    createCanvas(880, 940);
    balls[balls.length] = new Ball();
}

function draw() {
    // Background
    background(400, 200, 100);
    
    for (let b1 of balls) {
        b1.move();
        b1.bounceWall();
        b1.show();
        
        if (b1.rollover(mouseX, mouseY)) {
            b1.dim(255);
        }
        else {
            b1.dim(100);
        }
        
        for (let b2 of balls) {
            if (b1.intersects(b2)) {
                b1.bounceBall(b2);
            }
        }
        
    }
}

function mousePressed() {
    balls[balls.length] = new Ball();
    
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].rollover(mouseX, mouseY)) {
            balls.splice(i, random(0, balls.length));
        }
    }
}