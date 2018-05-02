//Frederick Cantarine, 50

//Hw-12 testing

let trampolines = [];
let trampolineNum = 3;


function setup(){
  createCanvas(windowWidth, windowHeight);
  bgColor = color('rgb(25, 102, 235)');

  for (let i = 0; i < trampolineNum; i++){
     trampolines.push(new Trampolines());
  }
}


function draw() {
  background(bgColor);
  fill(0);
  ellipse(50,400,50);

  while( trampolines.length < trampolineNum ){
    trampolines.push(new Trampolines());
  }

  for (var i = trampolines.length+1; i <= 0; i++){
    trampolines[i].frame();

  }

  }


  class Trampolines {

    constructor(){
      this.size_y = random(20, 100);
      this.size_x = this.size_y + this.size_y/3;
      this.loc_x = random(width);
      this.loc_y = 0;
      this.move_y = random(10, 15);
      this.body_color = color('rgb(49, 176, 18)');

      // this.size_x = 100;
      // this.size_y = 50;
      // this.loc_x = random(width);
      // this.loc_y = windowHeight - 100;
      // this.leg1_x1 = this.loc_x - 50;
      // this.leg1_y1 = this.loc_y;
      // this.leg1_x2 = this.loc_x - 20;
      // this.leg1_y2 = 0;
      // this.leg2_x1 = this.loc_x + 50;
      // this.leg2_y1 = this.loc_y;
      // this.leg2_x2 = this.loc_x + 20;
      // this.leg2_y2 = 0;
      // this.body_color = color(0);
      // this.deltaX = 1;
    }

    frame(){
      this.display();
    //  this.move();
    }

    display(){
      push();
      translate(this.loc_x, this.loc_y);
      fill(this.body_color);
      ellipse(0, 0, this.size_x, this.size_y);
      //ellipse(0, 0, this.size_x, this.size_y);
      // rect(this.leg1_x1. this.leg1_y1, this.leg1_x2, this.leg1_y2);
      // rect(this.leg2_x1. this.leg2_y1, this.leg2_x2, this.leg2_y2);
      pop();
    }

    // move(){
    // if (this.loc_x > -1) {
    //   this.loc_x = this.loc_x + 1 * this.deltaX;
    // }
    //
    // if (this.loc_x = 0) {
    //   this.deltaX = this.deltaX * -1;
    // }
    //
    // if (this.loc_x = windowWidth) {
    //   this.deltaX = this.deltaX * -1;
    // }
    //
    // }


  }
