var img;
var balls = [];
var queue;
var table;
var hitBox = [];
var turn = 0;
var stick = [];

class Ball {
    constructor(id) {
        this.id = id;
        this.position = getPosition(this.id);
        this.velocity = new createVector(0, 0);
        this.acceleration = new createVector(0, 0);

    }

    run() {
        this.update();
        this.display();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    display() {
        let color = getColor(this.id);
        fill(...color);
        noStroke();
        ellipse(this.position.x, this.position.y, 13, 13);
    }
}

class Queue {
    constructor() {
        this.position = new createVector(0, 140);
        this.velocity = new createVector(0, 0);
        this.acceleration = new createVector(0, 0);
    }
    run() {
        this.update();
        this.display();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    display() {
        fill(220);
        noStroke();
        ellipse(this.position.x, this.position.y, 13, 13);
    }
}

class Table {
    constructor() {
        this.position = new createVector(0, 0);
    }

    run() {
        this.display();
    }

    display() {
        push();
        imageMode(CENTER);
        angleMode(DEGREES);
        rotate(-90);
        image(img, 0, 0);
        img.resize(640, 360);
        pop();
    }
}

class Stick {
    constructor(p) {
        this.position = p;
        this.velocity = new createVector(0, 0);
        this.center = new createVector(queue.position);
        this.m = new createVector(mouseX, mouseY);
        this.m.sub(this.center);
        this.m.normalize();
        this.m.mult(20);
        this.degrees = atan2(this.m.x / this.m.y) + degmod();
    }

    display() {
        this.center = new createVector(queue.position);
        this.m = new createVector(mouseX, mouseY);
        this.m.sub(this.center);
        this.m.normalize();
        this.m.mult(20);
        this.degrees = atan2(this.m.x / this.m.y) + degmod();
        translate(this.center);
        push();
        angleMode(DEGREES);
        rotate(this.degrees);
        fill(255);
        stroke(255);
        line(this.position.x, this.position.y, 0, 0);
        ellipse(-100, 0, 300, 5);
        pop();
    }

    animate() {

    }
}

class HitBox {
    constructor(p, s, o) {
        this.position = p;
        this.size = s;
        this.o = o;
    }

    display() {
        fill(255);
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }

    getHitbox() {
        return {
            x: this.position.x,
            y: this.position.y,
            width: this.size.x,
            height: this.size.y,
        };    
    }
}

function getColor(id) {
    switch (id) {
        case 1:
            return [255, 255, 0];
        case 2:
            return [255, 255, 0];
        case 3:
            return [255, 255, 0];
        case 4:
            return [255, 255, 0];
        case 5:
            return [255, 255, 0];
        case 6:
            return [255, 255, 0];
        case 7:
            return [255, 255, 0];
        case 8:
            return [20, 20, 20];
        case 9:
            return [255, 25, 25];
        case 10:
            return [255, 25, 25];
        case 11:
            return [255, 25, 25];
        case 12:
            return [255, 25, 25];
        case 13:
            return [255, 25, 25];
        case 14:
            return [255, 25, 25];
        case 15:
            return [255, 25, 25];
    }
}

function getPosition(id) {
    switch (id) {
        case 1:
            return new createVector(0, -140);
        case 2:
            return new createVector(-7, -151);
        case 3:
            return new createVector(-14, -187);
        case 4:
            return new createVector(27, -187);
        case 5:
            return new createVector(7, -175);
        case 6:
            return new createVector(14, -163);
        case 7:
            return new createVector(-20, -175);
        case 8:
            return new createVector(0, -163);
        case 9:
            return new createVector(-7, -175);
        case 10:
            return new createVector(20, -175);
        case 11:
            return new createVector(-27, -187);
        case 12:
            return new createVector(7, -151);
        case 13:
            return new createVector(0, -187);
        case 14:
            return new createVector(14, -187);
        case 15:
            return new createVector(-14, -163);
    }
}

function isCollidingRect(rect1, rect2) {
    return (
      rect1.position.x < rect2.position.x + rect2.size.x &&
      rect1.position.x + rect1.size.x > rect2.position.x &&
      rect1.position.y < rect2.position.y + rect2.size.y &&
      rect1.position.y + rect1.size.y > rect2.position.y
    );
  }
  
function isCollidingCircle(circle1, circle2) {
const distance = dist(
    circle1.position.x,
    circle1.position.y,
    circle2.position.x,
    circle2.position.y
);
if (distance < circle1.radius + circle2.radius) {
    return true;
}
return false;
}
  

function calculateCollision(circle1, circle2) {
    let normal = createVector(
      circle2.position.x - circle1.position.x,
      circle2.position.y - circle1.position.y
    ).normalize();

    let tangent = createVector(-normal.y, normal.x);

    let v1n = p5.Vector.dot(createVector(circle1.velocity.x, circle1.velocity.y), normal);
    let v1t = p5.Vector.dot(createVector(circle1.velocity.x, circle1.velocity.y), tangent);
    let v2n = p5.Vector.dot(createVector(circle2.velocity.x, circle2.velocity.y), normal);
    let v2t = p5.Vector.dot(createVector(circle2.velocity.x, circle2.velocity.y), tangent);

    let v1nAfter = v2n;
    let v2nAfter = v1n;

    let v1NormalAfter = normal.copy().mult(v1nAfter);
    let v2NormalAfter = normal.copy().mult(v2nAfter);
    let v1Tangent = tangent.copy().mult(v1t);
    let v2Tangent = tangent.copy().mult(v2t);
  
    let newV1 = p5.Vector.add(v1NormalAfter, v1Tangent);
    let newV2 = p5.Vector.add(v2NormalAfter, v2Tangent);

    circle1.velocity.x = newV1.x;
    circle1.velocity.y = newV1.y;
    circle2.velocity.x = newV2.x;
    circle2.velocity.y = newV2.y;
  }

function getOrientation(obj) {
    if (obj.o == 'x') {
        return 'x';
    }
    else {
        return 'y';
    }
}

function preload() {
    img = loadImage('pool-4873047_1280.webp');
}

function doTurn() {
    var center = new createVector(windowWidth / 2, windowHeight / 2);
    translate(center);
    push();
    table.run();
    queue.run();
    for(let i = 0; i < balls.length; i++) {
        balls[i].run();
        for (let j = 0; j < hitBox.length; j++) {
            if (isColliding(balls[i], hitBox[j])) {
                balls[i].velocity.getOrientation(hitBox[j]).mult(-1);
            }
        }
        for (let k = 0; k < balls.length; k++) {
            if (isCollidingCircle(balls[i], balls[k])) {
                calculateCollision(balls[i], balls[k]);
            }
        }
    }
    pop();
}

function startTurn() {

}

function waitInput() {
    if (turn < 1) {
        return true;
    }
    else {
        return false;
    }
}

function degmod() {
    if (mouseY < windowHeight / 2) {
      return 180;
    } else {
      return 0;
    }
  }

function setup() {
    table = new Table();
    queue = new Queue();

    for (let i = 1; i < 16; i++) {
        balls.push(new Ball(i));
    }
    createCanvas(windowWidth, windowHeight);
}

draw = function() {
    background(20);
    if (waitInput()) {
        stick.push(new Stick(queue.position));
        stick[0].display();
    }
    doTurn();
};