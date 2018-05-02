//Frederick Cantarine

let balloons = [];
let balloonNum = 25;
let darts = [];
let dartNum = 5;

let balloon_counter = 0;

var moveX = 0;
var moveY = 0;

var clicked = false;
var hit = false;

var score = 0;


function setup(){
  createCanvas(windowWidth, windowHeight);
  bgColor = color('rgb(241, 176, 33)');

//adds balloons till all balloons are shown
    for (let moveY  = 150; moveY < windowHeight - 300; moveY += windowHeight/6) {
      for (let moveX = 200; moveX < windowWidth - 150; moveX += windowWidth/6) {
        moveX += windowWidth/16;
        balloons.push(new Balloons(moveX, moveY));
      }
      moveY += 0;
    }

  }

function draw() {
  background(bgColor);
  //noCursor();
  booth();

  //if player gets 1000 pts then the prize will appear
  if (score == 1000){
  prize();
  }

// draws balloons. adds 1 to balloons counter
  for (var i = 0; i < balloons.length; i++){
    balloons[i].frame();
    // balloon_counter ++;
    // this.loc_x += windowWidth/6;
  }

  for (var i = 0; i < darts.length; i++){
    darts[i].frame();
  }



  dart();

  // mousePressed();
  scoreBoard();
// textSize(40);
// fill(0);
// text( 'Score: ' + score, windowWidth/2 - 50, windowHeight - 100);

//adds a dart when clicked
  // if (clicked = true) {
    // clicked = false;
  // }
}

//removes the ballon if clicked
function mousePressed(){
  for (let i = balloons.length - 1; i >= 0; i--){
    if (balloons[i].explode(mouseX, mouseY)){
      balloons.splice(i, 1);
      clicked = true;
      hit = true;
    }
  }
  darts.push(new Darts(mouseX, mouseY));
}

//if balloon is popped, then score goes up
function scoreBoard(){
  textSize(40);
  fill(0);
  text( 'Score: ' + score, windowWidth/2 - 50, windowHeight - 100);
  if (hit == true){
    score += 100;
    hit = false;
  }
}

//draws background booth
function booth(){
  fill('rgb(102, 66, 10)');
  rect(50, 50, windowWidth - 100, windowHeight - 100);
  fill('rgb(87, 55, 5)');
  quad(50, 50, windowWidth - 50, 50, windowWidth - 30, 150, 70, 150 );
  triangle(windowWidth - 50, windowHeight - 199, windowWidth - 50, windowHeight - 220, windowWidth - 30, windowHeight - 199 );
  rect(70, windowHeight - 200, windowWidth - 100, windowHeight - 566 );
  quad(50, windowHeight - 220, 70, windowHeight - 200, 70, windowHeight - 25,50, windowHeight - 50 );
  fill(0);
  line(70, 150, 50, 150);
}

//moves a dart with the cursor
function dart(){
  push();
  translate( mouseX, mouseY );
  translate(45, 35);
  fill(0);
  triangle(-45, -35, 0, -5, 0, 5);
  fill('rgb(255, 148, 0)')
  triangle(20, 15, 55, 10, 35, 50);
  rotate(PI/4.8);
  fill(0);
  ellipse (0, 0, 70, 15);
  pop();
}

//creates the prize
function prize(){
  textSize(40);
  fill(0);
  text('You win!', windowWidth/2 + 50, windowHeight/2 - 400);
  push();
  //Bear's body
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth/2 + 20, windowHeight/2 - 10, 100, 120);
  fill(0);
  ellipse(windowWidth/2 + 20, windowHeight/2 -30, 10);
  ellipse(windowWidth/2 + 20, windowHeight/2 -10, 10);
  ellipse(windowWidth/2 + 20, windowHeight/2 +10, 10);
  //Bear's limbs
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth/2 - 40, windowHeight/2 - 30, 50, 30);
  ellipse(windowWidth/2 + 80, windowHeight/2 - 30, 50, 30);
  ellipse(windowWidth/2 - 20, windowHeight/2 + 50, 50, 30);
  ellipse(windowWidth/2 + 60, windowHeight/2 + 50, 50, 30);
  //Bear's head
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth/2 - 10, windowHeight/2 - 150, 50);
  ellipse(windowWidth/2 + 50, windowHeight/2 - 150, 50);
  fill(0);
  ellipse(windowWidth/2 - 10, windowHeight/2 - 150, 30);
  ellipse(windowWidth/2 + 50, windowHeight/2 - 150, 30);
  fill('rgb(117, 66, 190)');
  ellipse(windowWidth/2 + 20, windowHeight/2 - 100, 100);
  fill(255);
  ellipse(windowWidth/2, windowHeight/2 - 110, 20);
  ellipse(windowWidth/2 + 40, windowHeight/2 - 110, 20);
  fill(255);
  arc(windowWidth/2 + 20, windowHeight/2 - 85, 60 , 30, 0, PI);
  pop();
}

class Darts {

  constructor(lx, ly){
    // this.translate_x1 = mouseX;
    // this.translate_y1 = mouseY;
    this.translate_x2 = lx;
    this.translate_y2 = ly;
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
    this.rotate = PI/4.8;
    this.ellipse_loc = 0;
    this.ellipse_x = 70;
    this.ellipse_y = 15;
    this.color_1 = 0;
    this.color_2 = color(255, 148, 0);
    }

    frame(){
      this.display();
    }

    display(){
      push();
      translate(this.translate_x2, this.translate_y2);
      // translate(this.translate_x1, this.translate_y1);
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

  constructor(lx, ly){
    this.size_r = 50;
    this.loc_x = lx;
    this.loc_y = ly;
    this.move_x = moveX;
    this.move_y = moveY;
    this.body_color = color(random(255), random(255), random(255));
  }

  frame(){
    this.display();
    this.organize();
    this.explode();
  }

  //displays ballons
  display(){
    push();
    translate(this.loc_x, this.loc_y);
    fill(this.body_color);
    ellipse(0, 0, this.size_r);
    pop();
  }

  //organizes balloons into rows
  organize(){
    // while(balloons.length < balloonNum)
    //   this.loc_x += 100;


    // for (let moveY  = this.loc_y; moveY < windowHeight - 300; moveY += windowHeight/6) {
    //   for (let moveX = this.loc_x; moveX < windowWidth - 150; moveX += windowWidth/6) {
    //     this.loc_x += windowWidth/16;
    //   }
    //   this.loc_y += 0;
    // }
  }

  //checks if dart is on balloon
  explode(px, py) {
   let d = dist(px, py, this.loc_x, this.loc_y);
   if (d < this.size_r){
     return true;
       //balloons.splice(i, 1);
   }
   return false;
 }


//     if (ballon_counter = 2){
//       this.move_y += windowHeight/6;
//     }
//     else if (ballon_counter = 3){
//       this.move_y += windowHeight/6;
//     }
//     else if (ballon_counter = 4){
//       this.move_y += windowHeight/6;
//     }
//     else if (ballon_counter = 5){
//       this.move_x += windowWidth/6;
//     }
//     else if (ballon_counter = 6){
//       this.move_y -= windowHeight/6;
//     }
//     else if (ballon_counter = 7){
//       this.move_y -= windowHeight/6;
//     }
//     else if (ballon_counter = 8){
//     this.move_y -= windowHeight/6;
//     }
//     else if (ballon_counter = 9){
//       this.move_x += windowWidth/6;
//     }
//     else if (ballon_counter = 10){
//       this.move_y += windowHeight/6;
//     }
//     else if (ballon_counter = 11){
//       this.move_y += windowHeight/6;
//     }
//     else if (ballon_counter = 12){
//       this.move_y += windowHeight/6;
//     }
//     else if (ballon_counter = 13){
//       this.move_x += windowWidth/6;
//     }
//     else if (ballon_counter = 14){
//       this.move_y -= windowHeight/6;
//     }
//     else if (ballon_counter = 15){
//       this.move_y -= windowHeight/6;
//     }
//     else if (ballon_counter = 16){
//       this.move_y -= windowHeight/6;
//     }
// }




}
