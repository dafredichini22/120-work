//Frederick Cantarine, 50

let trampolines = [];
let trampolineNum = 2;
let watermelons = [];
let watermelonNum = 0;
let watermelonMaxNum = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color('rgb(25, 102, 235)');

  while (trampolines.length < trampolineNum) {
    trampolines.push(new Trampolines());
  }
}

function draw() {
  background(bgColor);

//Makes it so that not all the watermelons are falling at the same time
  if(watermelonNum < watermelonMaxNum && random([true, false, false, false] )){
    watermelonNum++;
  }

  while (watermelons.length < watermelonNum) {
    watermelons.push(new Watermelons());
  }

  for (var i = 0; i < trampolines.length; i++) {
    trampolines[i].frame();
  }

  for (var i = watermelons.length -1 ; i >= 0; i--) {
    watermelons[i].frame(trampolines);
    if (watermelons[i].explosionTimer <= 0) {
      watermelons.splice(i, 1);
    }
  }
}

class Watermelons {

  constructor() {
    this.size_y = random(20, 100);
    this.size_x = this.size_y + this.size_y / 3;
    this.loc_x = random(width);
    this.loc_y = 0;
    this.move_y = 0;
    this.delta_y = 0.1;
    this.body_color = color('rgb(49, 176, 18)');
    this.falling = true;
    this.explosionTimer = 10;
  }

  frame(objArr) {
    this.display();
    this.move();
    this.explode();
    this.checkCollisions(objArr);
  }

  display() {
    push();
    translate(this.loc_x, this.loc_y);
    fill(this.body_color);
    ellipse(0, 0, this.size_x, this.size_y);
    pop();
  }

//makes the watermelons fall
  move() {
    if (this.loc_y >= 0) {
      this.move_y += this.delta_y;
      this.loc_y += this.move_y;
    }

    if (this.loc_y >= height) {
      this.falling = false;
      this.move_y = 0;
    }
  }

//Watermelon explodes red when it hits the ground
  explode() {
    if (!this.falling && this.explosionTimer > 0) {
      this.explosionTimer--;
      this.size_y = this.size_y * 0.75;
      this.body_color = color('rgb(224, 30, 30)');
    }
  }


//checks to see if the watermelons are hitting the trampolines
  checkCollisions(tramps) {
    for (let n = 0; n < tramps.length; n++) {
        let d = dist(this.loc_x, this.loc_y, tramps[n].loc_x, tramps[n].loc_y);
        let combinedR = this.size_y * 0.5 + tramps[n].size_y *0.5;

//if the watermelon hits the trampoline, then it bounces upward
        if (d <= combinedR && this.loc_y < tramps[n].loc_y) {
          this.move_y *= -0.5;
          this.loc_y -= tramps[n].size_y *0.5;
          this.move();
        }
    }
  }
}

class Trampolines {

  constructor() {
    this.size_x = 140;
    this.size_y = 40;
    this.loc_x = random(width);
    this.loc_y = windowHeight - 60;
    this.leg1_x1 = 30;
    this.leg1_y1 = 0;
    this.leg1_x2 = 20;
    this.leg1_y2 = 100;
    this.leg2_x1 = -50;
    this.leg2_y1 = 0;
    this.leg2_x2 = 20;
    this.leg2_y2 = 100;
    this.body_color = color(0);
    this.deltaX = random(-10, 10);
  }

  frame() {
    this.display();
    this.move();
  }

  display() {
    push();
    translate(this.loc_x, this.loc_y);
    fill(this.body_color);
    rect(this.leg1_x1, this.leg1_y1, this.leg1_x2, this.leg1_y2);
    rect(this.leg2_x1, this.leg2_y1, this.leg2_x2, this.leg2_y2);
    stroke('white');
    ellipse(0, 0, this.size_x, this.size_y);
    pop();
  }

//moves trampoilines back and forth across the canvas
  move() {
      this.loc_x = this.loc_x + this.deltaX;

    if (this.loc_x <= 0) {
      this.deltaX = this.deltaX * -1;
    }

    if (this.loc_x >= windowWidth) {
      this.deltaX = this.deltaX * -1;
    }
  }
}
