//Frederick Cantarine
//line moves across screen and randomizes
//Define Global Variables

let grapplinghook = {};
grapplinghook.pos1x = 0;
grapplinghook.pos2y = 400;
grapplinghook.pos3x = 5;
grapplinghook.pos4y = 0;

/*
var lineX = random (windowWith);
var lineY = random(1, 800);
var directionX = random(windowWith);
var directionY = random(800);
var random = random(1, 3);
var moveX;
var moveY;
*/



function setup() {

  createCanvas(windowWidth, 800);
  background(255);

}

function draw() {
  /*
  If statments that tell where the line
  to go according to a random number
  */
/*  if (random = 1) {
    moveX = random (10, 30);
    moveY = 0;
    }

  if (random = 2) {
    moveY = random (10, 30);
    moveX = 0;
    }

  if (random = 3) {
    moveX = random (10, 30);
    moveY = random (10, 30);
      }
*/
      stroke(0);
      strokeWeight(5);
  //var line = line(lineX, lineY, directionX + moveX, directionY + moveY);
  //line (lineX, lineY, directionX, directionY);
  //line (30, 40, 50, 60);


  grapplinghook += 5;

}
