//Frederick Cantarine, 50

let bombs = [];
let bombNum = 40;
let bgColor;

function setup(){
  createCanvas(windowWidth, windowHeight);
  bgColor = color('rgb(45, 199, 219)');

  // for (let i = 0; i < bombNum; i++){
  //   bombs.push(new Bomb());
  // }
}

function draw() {
  background(bgColor);

  while( bombs.length < bombNum ){
    bombs.push(new Bomb());
  }

  for (var i = bombs.length-1; i >= 0; i--){
    bombs[i].frame();
    if(bombs[i].explosionTimer <= 0){
      bombs.splice(i, 1);
    }
  }
}

class Bomb {

  constructor(){
    this.size_r = random(20, 100);
    this.loc_x = random(width);
    this.loc_y = 0;
    this.move_y = random(5, 15);
    this.body_color = color(0,0,0);
    this.falling = true;
    this.explosionTimer = 10;
    }

  frame(){
    this.explode();
    this.display();
    this.move();
  }

//Displays the bombs
  display(){
    push();
    translate(this.loc_x, this.loc_y);
    noStroke();
    fill(this.body_color);
    ellipse(0, 0, this.size_r);
    pop();
  }

//Makes the bombs fall
  move(){
    if(this.loc_y >= 0){
      this.loc_y += this.move_y;
    }
//Makes the bombs stop at the bottom
    if(this.loc_y >= height){
      this.falling = false;
      // this.loc_y = 0;
      this.move_y = 0;
    }
  }

//Makes the bombs explode
  explode(){
    if (!this.falling && this.explosionTimer > 0) {
      this.explosionTimer--;
      this.size_r += 50;
      this.body_color = 'white';
    }


  }

  }
