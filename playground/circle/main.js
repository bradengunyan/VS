lines = [];
var border;
var particle;

class Particle {
    constructor(p) {
        this.position = p;
        this.velocity = new createVector(0, 0);
        this.acceleration = new createVector(0, 0.03);
        this.size = 10;
    }

    run() {
        this.update();
        this.display();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.handleCollision(border);
    }

    display() {
        fill(220);
        stroke(255);
        strokeWeight(2);
        ellipse(this.position.x, this.position.y, this.size* 2, this.size * 2);
    }

    handleCollision(border) {
        const distance = this.position.mag(); 
        const circleRadius = border.radius + this.size / 2;

        if (distance + this.size >= circleRadius) {
            const normal = this.position.copy().normalize();

            const dotProduct = this.velocity.dot(normal);
            this.velocity.sub(normal.mult(2 * dotProduct));
            lines.push(new Line(new createVector(this.position.x, this.position.y)));
            if (this.acceleration.y > 0) {
            this.acceleration.y -= 0.001;
            }
        }
    }
}
class Border {
    constructor() {
        this.position = new createVector(0, 0);
        this.radius = 250;
    }

    run() {
        this.display();
    }

    display() {
        fill(0, 0, 0, 255);
        stroke(220);
        strokeWeight(3);
        ellipse(0, 0, this.radius * 2, this.radius * 2);
    }
}
class Line {
    constructor(p) {
        this.position1 = p;
        this.position2 = new createVector(particle.position);
    }

    run() {
        this.update();
        this.display();
    }

    update() {
        this.position2 = particle.position;
    }

    display() {
        stroke(255);
        strokeWeight(2);
        line(this.position1.x, this.position1.y, this.position2.x, this.position2.y);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    border = new Border();
    particle = new Particle(new createVector(random(-100, -100), random(-100, -100)));
    frameRate(120);
}

draw = function () {
    background(20, 20, 20);
    var center = new createVector(windowWidth / 2, windowHeight / 2);
    translate(center);
    push();
        border.run();
        particle.run();
        for(let i = 0; i < lines.length; i++) {
            lines[i].run();
        }
    pop();
    stroke(255);
    text(lines.length, 50, 50);
    text(particle.acceleration.y, 100, 100);
};