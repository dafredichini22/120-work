//Frederick Cantarine, 50

let change = true;

function setup() {
    createCanvas(windowWidth, 700);
    background(0);

    frameRate(2);
  }

function draw() {
  var col1 = 255;
  var col2 = 255;
  var col3 = 0;
  var col4 = 50;

  let bulbWidth = 20;
  let bulbHeight = 30;
  let moveY = 150;





  for (let h = 165; h < 700; h += 304){
    fill (50, 50, 50);
    rect (90, h, windowWidth - 205, 15);

    //Not needed anymore. Saved just incase.
    //rect (90, 165, windowWidth - 205, 15);
    //rect (90, 469, windowWidth - 205, 15);

  }

  for (let i = 100; i < windowWidth - 100; i += 30) {

/*
    if (change) {

        }
      change = false;
    }
    else {
      change = true;

    }
    */
    fill(col1, col1, 0);
    if (col1 == 255){
      col1 = 50;
    }
    else {
      col1 = 255;
    }
    ellipse(i, moveY, bulbWidth, bulbHeight);

      }

moveY += 350;

  for (let i = 100; i < windowWidth - 100; i += 30) {

      /*
        if (change) {

            }
          change = false;
        }
        else {
          change = true;

        }
        */
        fill(col1, col1, 0);
        if (col1 == 255){
          col1 = 50;
        }
        else {
          col1 = 255;
        }
        ellipse(i, moveY, bulbWidth, bulbHeight);

          }
/*
  moveY += 630;
  for ( let i = 30; i < windowWidth; i +=80) {
    fill(random(255), random(255), random(255));
    ellipse(i, moveY, bulbWidth, bulbHeight);
  }
*/






}
