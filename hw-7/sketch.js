

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

let kick = true;

var col1 = 255;
var col2 = 255;
var col3 = 255;


function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }

/*
If the ball is moving upward and reaches the top of the page,
it will return at the bottom of the page at the same x coordinate.
*/

    if (ball.delta_y < 0, ball.y <= -40){
        ball.y = height + 25 ;
      }

/*
If the ball is moving downward and reaches the bottom of the page,
it will return at the top of the page at the same x coordinate.
*/

    if (ball.delta_y > 0, ball.y >= height + 40) {
         ball.y = -25;
        }

//The ellipse color is changed to a random color when clicked
    fill(col1, col2, col3);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}


function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);

//When the mouse is clicked,it changes direction
    if (kick) {
      ball.delta_y = -1 * ball.delta_y;
      on  = false;
    }
    else {
      on = true;
    }
//When the mouse is clicked, it randomizes the color of the fill
    col1 = random(255);
    col2 = random(255);
    col3 = random(255);

}
