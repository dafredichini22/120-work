//Frederick Cantarine
//line grows
//Define Global Variables
/*
let rect = {}
line.pos1x = 100;
line.pos1y = 100;
line.pos2x = 200;
line.pos2y = 200;
*/

function setup() {

  createCanvas(windowWidth, 800);
  background(255);

}

function draw() {
  var lineX = random(1200);
  var lineY = random(800);
  var directionX = random(1200);
  var directionY = random(800);
  var randomNum = random(3);
  var randomCol1= random(255);
  var randomCol2= random(255);
  var randomCol3= random(255);
  var moveX = 1;
  var moveY = 1;



//rect(line.pos1x, line.pos1y, line.pos2x, line.pos2y);
  stroke(randomCol1, randomCol2, randomCol3);
  strokeWeight(randomNum);
  line(lineX, lineY, directionX, directionY);

}
