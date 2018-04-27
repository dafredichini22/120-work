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
    this.explosion_color = color(255, 255, 0);
    this.wick_color = color('rgb(80, 80, 80)');
    this.wick_pos1 = this.size_r + 20;
    this.falling = true;
    this.explosionTimer = 10;
    }

  frame(){
    this.explode();
    this.display();
    this.move();
  }

  display(){
    push();
    translate(this.loc_x, this.loc_y);
    noStroke();
    fill(this.body_color);
    ellipse(0, 0, this.size_r);



    pop();
  }

  move(){
    if(this.loc_y >= 0){
      this.loc_y += this.move_y;
    }

    if(this.loc_y >= height){
      this.falling = false;
      // this.loc_y = 0;
      this.move_y = 0;
    }
  }

  explode(){
    if (!this.falling && this.explosionTimer > 0) {
      this.explosionTimer--;
      this.size_r += 100;
      this.body_color = 'white';
    }


  }

  }
