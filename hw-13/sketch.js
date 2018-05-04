//Frederick Cantarine, 50

let balloons = [];
let balloonNum = 25;
let darts = [];
let dartNum = 10;

var moveX;
var moveY;
var clicked = false;
var hit = false;
var score = 0;
var fail = false;
var done = false;
var hard = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color('rgb(241, 176, 33)');

  //adds balloons till all balloons are shown
  for (let moveY = 200; moveY < windowHeight - 200; moveY += windowHeight / 8) {
    for (let moveX = 70; moveX < windowWidth - 130; moveX += windowWidth / 10) {
      moveX += windowWidth / 16;
      balloons.push(new Balloons(moveX, moveY));
    }
    moveY += 0;
  }
}

function draw() {
  background(bgColor);
  noCursor();
  booth();

  // draws balloons. adds 1 to balloons counter
  for (var i = 0; i < balloons.length; i++) {
    balloons[i].frame();
  }

  for (var i = 0; i < darts.length; i++) {
    darts[i].frame();
  }

  //if player hits 10 ballons with 10 darts they win, otherwise they lose
  if (darts.length == 10) {
    balloons.length = 0;
    darts.length = 0;
    done = true;
  }

  scoreBoard();
  hardMode();
  dart();

  if (done) {
    if (score == 100) {
      prize();
    } else {
      lose();
    }
  }
}


function mousePressed() {
  //if the mouse clicks the hard mode box, then the balloon speed will increase
  if (mouseX > 100 && mouseX < 175 && mouseY > windowHeight - 150 && mouseY < windowHeight - 75) {
    hard = true;
  }

  //removes the ballon if clicked
  for (let i = balloons.length - 1; i >= 0; i--) {
    if (balloons[i].explode(mouseX, mouseY)) {
      balloons.splice(i, 1);
      clicked = true;
      hit = true;
    }
  }

  //only allows darts to be thrown if they are within the booth frame
  if (mouseX >= 50 && mouseX <= windowWidth - 50 && mouseY >= 150 && mouseY <= windowHeight - 200) {
    darts.push(new Darts(mouseX, mouseY));
  }
}

//if balloon is popped, then score goes up
function scoreBoard() {
  fill(255);
  rect(windowWidth / 2 - 90, windowHeight - 150, 235, 75);
  textSize(40);
  fill(0);
  text('Score: ' + score, windowWidth / 2 - 70, windowHeight - 100);
  if (hit == true) {
    score += 10;
    hit = false;
  }
}

//draws hardmode box
function hardMode() {
  fill('rgb(170, 12, 12)');
  rect(100, windowHeight - 150, 75, 75);
  textSize(20);
  fill(0);
  text('Hard', 114, windowHeight - 115);
  text('Mode', 114, windowHeight - 95);
}

//draws background booth
function booth() {
  fill('rgb(102, 66, 10)');
  rect(50, 50, windowWidth - 100, windowHeight - 100);
  fill('rgb(87, 55, 5)');
  quad(50, 50, windowWidth - 50, 50, windowWidth - 30, 150, 70, 150);
  triangle(windowWidth - 50, windowHeight - 199, windowWidth - 50, windowHeight - 220, windowWidth - 30, windowHeight - 199);
  rect(70, windowHeight - 200, windowWidth - 100, windowHeight - 566);
  quad(50, windowHeight - 220, 70, windowHeight - 200, 70, windowHeight - 25, 50, windowHeight - 50);
  fill(0);
  line(70, 150, 50, 150);
}

//moves a dart with the cursor
function dart() {
  push();
  translate(mouseX, mouseY);
  translate(45, 35);
  fill(0);
  triangle(-45, -35, 0, -5, 0, 5);
  fill('rgb(255, 148, 0)')
  triangle(20, 15, 55, 10, 35, 50);
  rotate(PI / 4.8);
  fill(0);
  ellipse(0, 0, 70, 15);
  pop();
}

//tells the user that they lose if they use all 10 darts and do not get 100 points
function lose() {
  textSize(50);
  fill('rgb(233, 23, 5)');
  text('You lose!', windowWidth / 2 - 80, windowHeight / 2 - 250);
}

//creates the prize
function prize() {
  textSize(50);
  fill('rgb(59, 215, 43)');
  text('You win!', windowWidth / 2 - 80, windowHeight / 2 - 250);
  push();
  //Bear's body
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth / 2 + 20, windowHeight / 2 - 10, 100, 120);
  fill(0);
  ellipse(windowWidth / 2 + 20, windowHeight / 2 - 30, 10);
  ellipse(windowWidth / 2 + 20, windowHeight / 2 - 10, 10);
  ellipse(windowWidth / 2 + 20, windowHeight / 2 + 10, 10);
  //Bear's limbs
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth / 2 - 40, windowHeight / 2 - 30, 50, 30);
  ellipse(windowWidth / 2 + 80, windowHeight / 2 - 30, 50, 30);
  ellipse(windowWidth / 2 - 20, windowHeight / 2 + 50, 50, 30);
  ellipse(windowWidth / 2 + 60, windowHeight / 2 + 50, 50, 30);
  //Bear's head
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth / 2 - 10, windowHeight / 2 - 150, 50);
  ellipse(windowWidth / 2 + 50, windowHeight / 2 - 150, 50);
  fill(0);
  ellipse(windowWidth / 2 - 10, windowHeight / 2 - 150, 30);
  ellipse(windowWidth / 2 + 50, windowHeight / 2 - 150, 30);
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth / 2 + 20, windowHeight / 2 - 100, 100);
  fill(255);
  ellipse(windowWidth / 2, windowHeight / 2 - 110, 20);
  ellipse(windowWidth / 2 + 40, windowHeight / 2 - 110, 20);
  fill(255);
  arc(windowWidth / 2 + 20, windowHeight / 2 - 85, 60, 30, 0, PI);
  pop();
}

class Darts {

  constructor(lx, ly) {
    this.translate_x = lx + 45;
    this.translate_y = ly + 35;
    this.tri1_x1 = -45;
    this.tri1_y1 = -35;
    this.tri1_x2 = 0;
    this.tri1_y2 = -5;
    this.tri1_x3 = 0;
    this.tri1_y3 = 5;
    this.tri2_x1 = 20;
    this.tri2_y1 = 15;
    this.tri2_x2 = 55;
    this.tri2_y2 = 10;
    this.tri2_x3 = 35;
    this.tri2_y3 = 50;
    this.rotate = PI / 4.8;
    this.ellipse_loc = 0;
    this.ellipse_x = 70;
    this.ellipse_y = 15;
    this.color_1 = 0;
    this.color_2 = color(255, 148, 0);
  }

  frame() {
    this.display();
  }

  display() {
    push();
    translate(this.translate_x, this.translate_y);
    fill(this.color_1);
    triangle(this.tri1_x1, this.tri1_y1, this.tri1_x2, this.tri1_y2, this.tri1_x3, this.tri1_y3);
    fill(this.color_2)
    triangle(this.tri2_x1, this.tri2_y1, this.tri2_x2, this.tri2_y2, this.tri2_x3, this.tri2_y3);
    rotate(this.rotate);
    fill(this.color_1);
    ellipse(this.ellipse_loc, this.ellipse_loc, this.ellipse_x, this.ellipse_y);
    pop();
  }
}

class Balloons {

  constructor(lx, ly) {
    this.size_r = 50;
    this.loc_x = lx;
    this.loc_y = ly;
    this.move_x = moveX;
    this.move_y = moveY;
    this.deltaX1 = random(-3, 3);
    this.deltaY1 = random(-3, 3);
    this.deltaX2 = random(-10, 10);
    this.deltaY2 = random(-10, 10);
    this.body_color = color(random(255), random(255), random(255));
  }

  frame() {
    this.display();
    this.explode();
    this.bounce();
  }

  //displays ballons
  display() {
    push();
    translate(this.loc_x, this.loc_y);
    fill(this.body_color);
    ellipse(0, 0, this.size_r);
    pop();
  }

  //checks if dart is on balloon
  explode(px, py) {
    let d = dist(px, py, this.loc_x, this.loc_y);
    if (d < this.size_r * 0.5) {
      return true;
    }
    return false;
  }


  bounce() {
    //it moves the balloons at a slow speed after two darts
    if (darts.length >= 2 && hard == false) {
      this.loc_x += this.deltaX1;
      this.loc_y += this.deltaY1;
    }
    //if hardmode is pressed, then the balloon speed fast after two darts
    if (darts.length >= 2 && hard == true) {
      this.loc_x += this.deltaX2;
      this.loc_y += this.deltaY2;
    }

    //bounces the balloons when it hits the side walls of the booth
    if (this.loc_x + this.size_r * 0.5 >= windowWidth - 50 || this.loc_x + this.size_r * 0.5 < 100) {
      this.deltaX1 *= -1;
      this.deltaX2 *= -1;
    }

    //bounces the balloons when it hits the top and bottom of the booth
    if (this.loc_y + this.size_r * 0.5 >= windowHeight - 200 || this.loc_y + this.size_r * 0.5 <= 200) {
      this.deltaY1 *= -1;
      this.deltaY2 *= -1;
    }
  }

}
