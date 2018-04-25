//Frederick Cantarine, 50

let xPepperoniArr = [ 120, 190, 200, 275, 330, 410, 350, 360, 450, 480, 530, 560, 590 ];
let yPepperoniArr = [ 350, 225, 490, 370, 130, 280, 585, 460, 160, 515, 365, 240, 470  ];

function setup() {
    createCanvas( 800, 800 );
  }

  function draw() {
    makepizza();
    addCheese();
    addPepperoni();
    if (click > 0){}

  }

//making pizza crust and sauce
  function makepizza(){
    fill ('rgb(246, 231, 139)');
    ellipse (380, 380, 700);
    fill ('rgb(203, 58, 19)');
    ellipse (380, 380, 625);
  }

//putting down cheese
  function addCheese(){
    strokeWeight(0.1);
    fill(255);
    //randomly places cheese on pizza
    for (cheeseCount = 0; cheeseCount < 400; cheeseCount++){
    var xMove = random(-260, 260);
    var yMove = random (-230, 270);
    quad(380 + xMove, 380 + yMove, 400 + xMove, 370 + yMove, 380 + xMove, 310 + yMove, 360 + xMove, 320 + yMove );
  }
  }

//places down pepperoni
  function addPepperoni(){
    let idy = 0;

    //gets pepperoni coordinates from the arrays
    for (let idx = 0; idx < xPepperoniArr.length; idx++) {
    fill('rgb(190, 78, 9)');
    ellipse (xPepperoniArr[idx], yPepperoniArr[idy], 70);
    idy++;
    }
  }

//gives a statement when clicked
  function mousePressed() {
    var click = 0;
    click ++;

    if (click > 0){
    textSize(50);
    fill(0);
    text("First one's on the hosue!", 120, 50);
  }
  }
