//Frederick Cantarine, 50

var change = true;
let option = 1;
let timer = 1;

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

  //Background to billbaord
  fill('rgb(240, 242, 218)');
  stroke(5);
  rect(90, 180, windowWidth - 220, 300);

  //Lines on billboard
  for (let k = 225; k < 500; k += 50){
    line(100, k, windowWidth - 120, k);

  }

  //Top and bottom grey bars
  for (let h = 165; h < 700; h += 304){
    noStroke();
    fill (50, 50, 50);
    rect (90, h, windowWidth - 205, 15);

    //Not needed anymore. Saved just incase.
    //rect (90, 165, windowWidth - 205, 15);
    //rect (90, 469, windowWidth - 205, 15);

  }

  //Side grey bars
  for (let f = 90; f < windowWidth - 50; f += windowWidth - 220){
    noStroke();
    fill (50, 50, 50);
    rect (f, 166, 15, 304);

  }

  //Make lights alternate colors

timer++;


while (timer < 4){
  timer++;
  if(timer % 2 == 0){
    col1 = 50;
  }
  else {
    col1 = 255;
  }
}

/*
  if (timer % 2 == 0) {
    while (timer < 100){
        col1 = 50;
      /*
      if (col1 == col2){
        col1 = 50;
      }
      */
      /*
      timer++;
    }
  }

  else {
    while (timer < 1000){
      col1 = 255;
      /*
      if (col1 == col4){
        col1 = 255;
      }
      */
      /*
    timer++;
    }
  }

/*
  else if (col1 == col4) {
    col1 = 255;
    //col2 += 1;
  }
  else {
    col3 = 0;
  }
*/



  //Top and bottom string of lights
  for (let moveY  = 150; moveY < 700; moveY += 350) {
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

/*
if (change = true){
  if (col1 == 255){
    col1 = 50;
    change = false;
  }
  else {
    col1 = 255;
    change = false;
  }
}
else{
  if (col1 != 255){
    col1 = 255;
    change = true;
  }
  else {
    col1 = 50;
    change = true;
  }
}
*/

      ellipse(i, moveY, bulbWidth, bulbHeight);

        }
      }

    //Left and right string of lights
    for (let moveX = 74; moveX < windowWidth - 50; moveX += windowWidth - 173) {
      for (let j = 175; j < 500; j += 30) {

        fill(col1, col1, 0);
        if (col1 == 255){
          col1 = 50;
        }
        else {
          col1 = 255;
        }
        ellipse(moveX, j, bulbHeight, bulbWidth);
      }
    }






if (option == 1) {
  textSize(40);
  fill(0);
  text('Avengers: Infinity War', windowWidth/2 - 200, 275);
  text('2:30, 4:30, 6:30, 8:30, 10:30', windowWidth/2 - 265, 325);

}
else if (option == 2) {
  textSize(40);
  fill(0);
  text('A Quiet Place', windowWidth/2 - 135, 275);
  text('3:45, 5:30, 7:15, 9:00, 10:45', windowWidth/2 - 265, 325);

}
else {
  textSize(40);
  fill(0);
  text('A Wrinkle in Time', windowWidth/2 - 160, 275);
  text('3:00, 6:00, 9:00, 12:00', windowWidth/2 - 215, 325);

}
}


function mousePressed() {
  option++;
  if (option > 3) option = 1;
}


/*
Scratch work:

moveY += 350;
  //Bottom string of lights
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
        /*
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
