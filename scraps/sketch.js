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
