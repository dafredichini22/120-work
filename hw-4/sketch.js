//Frederick Cantarine

function setup() {
  createCanvas( 600, 800 );

}

function draw() {
  background ( 'rgb(48, 66, 222)' );

  push();

  translate( 300, 350 );

//Body
  push();

  fill( 'rgb(107, 11, 40)');
  rect( -100, -80, 180, 300 );

  fill( 'rgb(45, 10, 3)');
  arc( -10, 100, 100, 100, 0, PI );

  fill( 255 );
  triangle(-10, -35, 80, -80, -100, -80);

  line( -10, -35, -20, 10 );
  line( -10, -35, 0, 10 );

  pop();
//End Body

//Arms
push();
//left arm
fill( 'rgb(107, 11, 40)');
rect( -140, -50, 40, 150 );

fill( 'rgb(247, 221, 171)');
rect( -140, 100, 40, 50);

//right arm
fill( 'rgb(107, 11, 40)');
rect( 80, -50, 40, 150 );

fill( 'rgb(247, 221, 171)');
rect( 80, 100, 40, 50);

pop();
//end Arms

//legs
push();
fill( 'rgb(1, 2, 17)');
rect( -100, 200, 180, 80);

rect( -100, 280, 60, 170);
rect( 20, 280, 60, 170);

pop();

//Head
push();
fill( 'rgb(247, 221, 171)');
ellipse( -10, -140, 170);

//mouth
push();
arc( -10, -110, 80, 70, 0, PI );

pop();
//end mouth

//eyebrows
push();
fill('rgb(102, 67, 15)')
quad(-60, -165, -60, -170, -30, -175, -30, -170);
quad(40, -165, 40, -170, 10, -175, 10, -170);

pop();
//end eyebrows

//eyes
push();
fill( 255);
ellipse(-45, -150, 30, 25);
ellipse(25, -150, 30, 25);

fill( 'rgb(133, 139, 13)');
ellipse(-45, -150, 15);
ellipse(25, -150, 15);

fill(0);
ellipse(-45, -150, 5);
ellipse(25, -150, 5);

pop();
//end eyes

//nose
push();
line(-25, -120, -10, -130);
line(-25, -120, -10, -120);

pop();

//hat
push();

fill( 'black' );
rotate( radians( 180) );
arc( 10, 180, 150, 100, 0, PI );


pop();

push();
fill( 'red');
rect(-90, -190, 160, 10);

pop();

pop();
//end Head

pop();


}
