//Frederick Cantarine  
//line grows
//Define Global Variables

var start = {};
start.pos1x = 100;
start.pos1y = 100;
start.pos2x = 200;
start.pos2y = 200;

var second = {};
second.pos1x = 100;
second.pos1y = 100;
second.pos2x = 200;
second.pos2y = 200;

var third = {};
third.pos1x = 100;
third.pos1y = 100;
third.pos2x = 200;
third.pos2y = 200;

var fourth = {};
third.pos1x = 100;
third.pos1y = 100;
third.pos2x = 200;
third.pos2y = 200;



function setup() {

  createCanvas(windowWidth, 800);
  background(255);

  //set initial position
  start.pos1x = random(windowWidth);
  start.pos1y = random(800);
  start.pos2x = random(windowWidth);
  start.pos2y = random(800);

  second.pos2x = random(windowWidth);
  second.pos2y = random(800);

  third.pos2x = random(windowWidth);
  third.pos2y = random(800);

}

function draw() {
  frameRate(1);

  var randomNum1 = random(windowWidth - start.pos1x);
  var randomNum2 = random(-800, 800);

line (start.pos1x, start.pos1y, start.pos2x, start.pos2y);

start.pos2x = start.pos2x + randomNum1;
//start.pos2y = start.pos2y + randomNuym2;

//start.pos1x = start.pos2x;
//start.pos1y = start.pos2y;




//addX = start.pos2x + randomNum1;
//addY = start.pos2y + randomNum2;
/*
second.pos1x = start.pos2x;
second.pos1y = start.pos2y;

line (second.pos1x, second.pos1y, second.pos2x, second.pos2y);

third.pos1x = second.pos2x;
third.pos1y = second.pos2y;

line (third.pos1x, third.pos1y, third.pos2x, third.pos2y);

start.pos1x = third.pos2x;
start.pos1y = third.pos2y;

line (start.pos1x, start.pos1y, start.pos2x, start.pos2y);
*/

}
