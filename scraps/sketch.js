//Frederick Cantarine, 50

let xRainArr = [ 50, 100, 150, 200, 250, 300, 350, 400, 450, 500,
                 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];

let yRainArr = [-800,-700, -600, -500, -400, -300, -200, -100, 0,
                100, 200, 300, 400, 500, 600, 700, 800];


let yPos = 0;

function setup() {
    createCanvas( windowWidth, 800 );
  }

  function draw() {
    background ( 'rgb(241, 61, 196)' );
    //Turns off cursor
    noCursor();

    rainDrops();


    yPos = (yPos + 10) % windowHeight;



    push();
    translate( mouseX, mouseY );

    //dry space under umbrella
    fill ( 'rgb(241, 61, 196)' );
    noStroke();
    rect (0, 75, 200, 1000);

    //umbrella handle
    fill ( 'rgb(0, 0, 0)' );
    rect (95, 75, 10, 100);

    //umbrella top
    fill( 'rgb(0, 0, 0)' );
    arc(100, 75, 200, 150, PI, TWO_PI);

    pop();

  }

  function rainDrops() {
    fill ('rgb(20, 21, 157)')
  //  for (let moveY = 0; moveY < windowHeight; )
    for ( let idx = 0; idx < xRainArr.length; idx++){

      ellipse (xRainArr[idx], yPos, 15);

    }
}

  function duplicate() {



  }




//hw-11 copy

  // //Frederick Cantarine, 50
  //
  // let bombs = [];
  // let bombNum = 40;
  // let bgColor;
  //
  // function setup(){
  //   createCanvas(windowWidth, windowHeight);
  //   bgColor = color('rgb(45, 199, 219)');
  //
  //   // for (let i = 0; i < bombNum; i++){
  //   //   bombs.push(new Bomb());
  //   // }
  // }
  //
  // function draw() {
  //   background(bgColor);
  //
  //   while( bombs.length < bombNum ){
  //     bombs.push(new Bomb());
  //   }
  //
  //   for (var i = bombs.length-1; i >= 0; i--){
  //     bombs[i].frame();
  //     if(bombs[i].explosionTimer <= 0){
  //       bombs.splice(i, 1);
  //     }
  //   }
  // }
  //
  // class Bomb {
  //
  //   constructor(){
  //     this.size_r = random(20, 100);
  //     this.loc_x = random(width);
  //     this.loc_y = 0;
  //     this.move_y = random(5, 15);
  //     this.body_color = color(0,0,0);
  //     this.explosion_color = color(255, 255, 0);
  //     this.wick_color = color('rgb(80, 80, 80)');
  //     this.wick_pos1 = this.size_r + 20;
  //     this.falling = true;
  //     this.explosionTimer = 10;
  //     }
  //
  //   frame(){
  //     this.explode();
  //     this.display();
  //     this.move();
  //   }
  //
  //   display(){
  //     push();
  //     translate(this.loc_x, this.loc_y);
  //     noStroke();
  //     fill(this.body_color);
  //     ellipse(0, 0, this.size_r);
  //     pop();
  //   }
  //
  //   move(){
  //     if(this.loc_y >= 0){
  //       this.loc_y += this.move_y;
  //     }
  //
  //     if(this.loc_y >= height){
  //       this.falling = false;
  //       // this.loc_y = 0;
  //       this.move_y = 0;
  //     }
  //   }
  //
  //   explode(){
  //     if (!this.falling && this.explosionTimer > 0) {
  //       this.explosionTimer--;
  //       this.size_r += 50;
  //       this.body_color = 'white';
  //     }
  //
  //
  //   }
  //
  //   }
