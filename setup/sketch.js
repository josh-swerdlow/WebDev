function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(100, 100);
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 50, 50);
}