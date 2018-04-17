//Frederick Cantarine

function setup() {
    createCanvas( windowWidth, 800 );
  }


// raindops' starting positions
  var x = 0;
  var y = 0;
  var a = 50
  var b = 100
  var c = 150
  var d = 200
  var e = 250
  var f = 300
  var g = 350
  var h = 400
  var i = 450
  var j = 500
  var k = 550
  var l = 600
  var m = 650
  var n = 700
  var o = 750
  var p = 800
  var s = 850
  var t = 900
  var u = 950
  var v = 1000

//raindhip speed
var drop = 15;

  function draw() {
    background ( 'rgb(241, 61, 196)' );
    //Turns off cursor
    noCursor();


  var r = random( windowWidth/2 );
  var q = random( windowHeight );

//Raindrops
    fill ('rgb(20, 21, 157)')
    ellipse (x, y, 15);
    ellipse (x, y - 100, 15);
    ellipse (x, y - 200, 15);
    ellipse (x, y - 300, 15);
    ellipse (x, y - 400, 15);
    ellipse (x, y - 500, 15);
    ellipse (x, y - 600, 15);
    ellipse (x, y - 700, 15);
    ellipse (x, y - 800, 15);
    ellipse (x, y + 100, 15);
    ellipse (x, y + 200, 15);
    ellipse (x, y + 300, 15);
    ellipse (x, y + 400, 15);
    ellipse (x, y + 500, 15);
    ellipse (x, y + 600, 15);
    ellipse (x, y + 700, 15);
    ellipse (x, y + 800, 15);

    ellipse (a, y + 50, 15);
    ellipse (a, y - 50, 15);
    ellipse (a, y - 150, 15);
    ellipse (a, y - 250, 15);
    ellipse (a, y - 350, 15);
    ellipse (a, y - 450, 15);
    ellipse (a, y - 550, 15);
    ellipse (a, y - 650, 15);
    ellipse (a, y - 750, 15);
    ellipse (a, y - 850, 15);
    ellipse (a, y + 150, 15);
    ellipse (a, y + 250, 15);
    ellipse (a, y + 350, 15);
    ellipse (a, y + 450, 15);
    ellipse (a, y + 550, 15);
    ellipse (a, y + 650, 15);
    ellipse (a, y + 750, 15);
    ellipse (a, y + 850, 15);

    ellipse (b, y, 15);
    ellipse (b, y - 100, 15);
    ellipse (b, y - 200, 15);
    ellipse (b, y - 300, 15);
    ellipse (b, y - 400, 15);
    ellipse (b, y - 500, 15);
    ellipse (b, y - 600, 15);
    ellipse (b, y - 700, 15);
    ellipse (b, y - 800, 15);
    ellipse (b, y + 100, 15);
    ellipse (b, y + 200, 15);
    ellipse (b, y + 300, 15);
    ellipse (b, y + 400, 15);
    ellipse (b, y + 500, 15);
    ellipse (b, y + 600, 15);
    ellipse (b, y + 700, 15);
    ellipse (b, y + 800, 15);

    ellipse (c, y + 50, 15);
    ellipse (c, y - 50, 15);
    ellipse (c, y - 150, 15);
    ellipse (c, y - 250, 15);
    ellipse (c, y - 350, 15);
    ellipse (c, y - 450, 15);
    ellipse (c, y - 550, 15);
    ellipse (c, y - 650, 15);
    ellipse (c, y - 750, 15);
    ellipse (c, y - 850, 15);
    ellipse (c, y + 150, 15);
    ellipse (c, y + 250, 15);
    ellipse (c, y + 350, 15);
    ellipse (c, y + 450, 15);
    ellipse (c, y + 550, 15);
    ellipse (c, y + 650, 15);
    ellipse (c, y + 750, 15);
    ellipse (c, y + 850, 15);

    ellipse (d, y, 15);
    ellipse (d, y - 100, 15);
    ellipse (d, y - 200, 15);
    ellipse (d, y - 300, 15);
    ellipse (d, y - 400, 15);
    ellipse (d, y - 500, 15);
    ellipse (d, y - 600, 15);
    ellipse (d, y - 700, 15);
    ellipse (d, y - 800, 15);
    ellipse (d, y + 100, 15);
    ellipse (d, y + 200, 15);
    ellipse (d, y + 300, 15);
    ellipse (d, y + 400, 15);
    ellipse (d, y + 500, 15);
    ellipse (d, y + 600, 15);
    ellipse (d, y + 700, 15);
    ellipse (d, y + 800, 15);

    ellipse (e, y + 50, 15);
    ellipse (e, y - 50, 15);
    ellipse (e, y - 150, 15);
    ellipse (e, y - 250, 15);
    ellipse (e, y - 350, 15);
    ellipse (e, y - 450, 15);
    ellipse (e, y - 550, 15);
    ellipse (e, y - 650, 15);
    ellipse (e, y - 750, 15);
    ellipse (e, y - 850, 15);
    ellipse (e, y + 150, 15);
    ellipse (e, y + 250, 15);
    ellipse (e, y + 350, 15);
    ellipse (e, y + 450, 15);
    ellipse (e, y + 550, 15);
    ellipse (e, y + 650, 15);
    ellipse (e, y + 750, 15);
    ellipse (e, y + 850, 15);

    ellipse (f, y, 15);
    ellipse (f, y - 100, 15);
    ellipse (f, y - 200, 15);
    ellipse (f, y - 300, 15);
    ellipse (f, y - 400, 15);
    ellipse (f, y - 500, 15);
    ellipse (f, y - 600, 15);
    ellipse (f, y - 700, 15);
    ellipse (f, y - 800, 15);
    ellipse (f, y + 100, 15);
    ellipse (f, y + 200, 15);
    ellipse (f, y + 300, 15);
    ellipse (f, y + 400, 15);
    ellipse (f, y + 500, 15);
    ellipse (f, y + 600, 15);
    ellipse (f, y + 700, 15);
    ellipse (f, y + 800, 15);

    ellipse (g, y + 50, 15);
    ellipse (g, y - 50, 15);
    ellipse (g, y - 150, 15);
    ellipse (g, y - 250, 15);
    ellipse (g, y - 350, 15);
    ellipse (g, y - 450, 15);
    ellipse (g, y - 550, 15);
    ellipse (g, y - 650, 15);
    ellipse (g, y - 750, 15);
    ellipse (g, y - 850, 15);
    ellipse (g, y + 150, 15);
    ellipse (g, y + 250, 15);
    ellipse (g, y + 350, 15);
    ellipse (g, y + 450, 15);
    ellipse (g, y + 550, 15);
    ellipse (g, y + 650, 15);
    ellipse (g, y + 750, 15);
    ellipse (g, y + 850, 15);

    ellipse (h, y, 15);
    ellipse (h, y - 100, 15);
    ellipse (h, y - 200, 15);
    ellipse (h, y - 300, 15);
    ellipse (h, y - 400, 15);
    ellipse (h, y - 500, 15);
    ellipse (h, y - 600, 15);
    ellipse (h, y - 700, 15);
    ellipse (h, y - 800, 15);
    ellipse (h, y + 100, 15);
    ellipse (h, y + 200, 15);
    ellipse (h, y + 300, 15);
    ellipse (h, y + 400, 15);
    ellipse (h, y + 500, 15);
    ellipse (h, y + 600, 15);
    ellipse (h, y + 700, 15);
    ellipse (h, y + 800, 15);

    ellipse (i, y + 50, 15);
    ellipse (i, y - 50, 15);
    ellipse (i, y - 150, 15);
    ellipse (i, y - 250, 15);
    ellipse (i, y - 350, 15);
    ellipse (i, y - 450, 15);
    ellipse (i, y - 550, 15);
    ellipse (i, y - 650, 15);
    ellipse (i, y - 750, 15);
    ellipse (i, y - 850, 15);
    ellipse (i, y + 150, 15);
    ellipse (i, y + 250, 15);
    ellipse (i, y + 350, 15);
    ellipse (i, y + 450, 15);
    ellipse (i, y + 550, 15);
    ellipse (i, y + 650, 15);
    ellipse (i, y + 750, 15);
    ellipse (i, y + 850, 15);

    ellipse (j, y, 15);
    ellipse (j, y - 100, 15);
    ellipse (j, y - 200, 15);
    ellipse (j, y - 300, 15);
    ellipse (j, y - 400, 15);
    ellipse (j, y - 500, 15);
    ellipse (j, y - 600, 15);
    ellipse (j, y - 700, 15);
    ellipse (j, y - 800, 15);
    ellipse (j, y + 100, 15);
    ellipse (j, y + 200, 15);
    ellipse (j, y + 300, 15);
    ellipse (j, y + 400, 15);
    ellipse (j, y + 500, 15);
    ellipse (j, y + 600, 15);
    ellipse (j, y + 700, 15);
    ellipse (j, y + 800, 15);

    ellipse (k, y + 50, 15);
    ellipse (k, y - 50, 15);
    ellipse (k, y - 150, 15);
    ellipse (k, y - 250, 15);
    ellipse (k, y - 350, 15);
    ellipse (k, y - 450, 15);
    ellipse (k, y - 550, 15);
    ellipse (k, y - 650, 15);
    ellipse (k, y - 750, 15);
    ellipse (k, y - 850, 15);
    ellipse (k, y + 150, 15);
    ellipse (k, y + 250, 15);
    ellipse (k, y + 350, 15);
    ellipse (k, y + 450, 15);
    ellipse (k, y + 550, 15);
    ellipse (k, y + 650, 15);
    ellipse (k, y + 750, 15);
    ellipse (k, y + 850, 15);

    ellipse (l, y, 15);
    ellipse (l, y - 100, 15);
    ellipse (l, y - 200, 15);
    ellipse (l, y - 300, 15);
    ellipse (l, y - 400, 15);
    ellipse (l, y - 500, 15);
    ellipse (l, y - 600, 15);
    ellipse (l, y - 700, 15);
    ellipse (l, y - 800, 15);
    ellipse (l, y + 100, 15);
    ellipse (l, y + 200, 15);
    ellipse (l, y + 300, 15);
    ellipse (l, y + 400, 15);
    ellipse (l, y + 500, 15);
    ellipse (l, y + 600, 15);
    ellipse (l, y + 700, 15);
    ellipse (l, y + 800, 15);

    ellipse (m, y + 50, 15);
    ellipse (m, y - 50, 15);
    ellipse (m, y - 150, 15);
    ellipse (m, y - 250, 15);
    ellipse (m, y - 350, 15);
    ellipse (m, y - 450, 15);
    ellipse (m, y - 550, 15);
    ellipse (m, y - 650, 15);
    ellipse (m, y - 750, 15);
    ellipse (m, y - 850, 15);
    ellipse (m, y + 150, 15);
    ellipse (m, y + 250, 15);
    ellipse (m, y + 350, 15);
    ellipse (m, y + 450, 15);
    ellipse (m, y + 550, 15);
    ellipse (m, y + 650, 15);
    ellipse (m, y + 750, 15);
    ellipse (m, y + 850, 15);

    ellipse (n, y, 15);
    ellipse (n, y - 100, 15);
    ellipse (n, y - 200, 15);
    ellipse (n, y - 300, 15);
    ellipse (n, y - 400, 15);
    ellipse (n, y - 500, 15);
    ellipse (n, y - 600, 15);
    ellipse (n, y - 700, 15);
    ellipse (n, y - 800, 15);
    ellipse (n, y + 100, 15);
    ellipse (n, y + 200, 15);
    ellipse (n, y + 300, 15);
    ellipse (n, y + 400, 15);
    ellipse (n, y + 500, 15);
    ellipse (n, y + 600, 15);
    ellipse (n, y + 700, 15);
    ellipse (n, y + 800, 15);

    ellipse (o, y + 50, 15);
    ellipse (o, y - 50, 15);
    ellipse (o, y - 150, 15);
    ellipse (o, y - 250, 15);
    ellipse (o, y - 350, 15);
    ellipse (o, y - 450, 15);
    ellipse (o, y - 550, 15);
    ellipse (o, y - 650, 15);
    ellipse (o, y - 750, 15);
    ellipse (o, y - 850, 15);
    ellipse (o, y + 150, 15);
    ellipse (o, y + 250, 15);
    ellipse (o, y + 350, 15);
    ellipse (o, y + 450, 15);
    ellipse (o, y + 550, 15);
    ellipse (o, y + 650, 15);
    ellipse (o, y + 750, 15);
    ellipse (o, y + 850, 15);

    ellipse (p, y, 15);
    ellipse (p, y - 100, 15);
    ellipse (p, y - 200, 15);
    ellipse (p, y - 300, 15);
    ellipse (p, y - 400, 15);
    ellipse (p, y - 500, 15);
    ellipse (p, y - 600, 15);
    ellipse (p, y - 700, 15);
    ellipse (p, y - 800, 15);
    ellipse (p, y + 100, 15);
    ellipse (p, y + 200, 15);
    ellipse (p, y + 300, 15);
    ellipse (p, y + 400, 15);
    ellipse (p, y + 500, 15);
    ellipse (p, y + 600, 15);
    ellipse (p, y + 700, 15);
    ellipse (p, y + 800, 15);

    ellipse (s, y + 50, 15);
    ellipse (s, y - 50, 15);
    ellipse (s, y - 150, 15);
    ellipse (s, y - 250, 15);
    ellipse (s, y - 350, 15);
    ellipse (s, y - 450, 15);
    ellipse (s, y - 550, 15);
    ellipse (s, y - 650, 15);
    ellipse (s, y - 750, 15);
    ellipse (s, y - 850, 15);
    ellipse (s, y + 150, 15);
    ellipse (s, y + 250, 15);
    ellipse (s, y + 350, 15);
    ellipse (s, y + 450, 15);
    ellipse (s, y + 550, 15);
    ellipse (s, y + 650, 15);
    ellipse (s, y + 750, 15);
    ellipse (s, y + 850, 15);

    ellipse (t, y, 15);
    ellipse (t, y - 100, 15);
    ellipse (t, y - 200, 15);
    ellipse (t, y - 300, 15);
    ellipse (t, y - 400, 15);
    ellipse (t, y - 500, 15);
    ellipse (t, y - 600, 15);
    ellipse (t, y - 700, 15);
    ellipse (t, y - 800, 15);
    ellipse (t, y + 100, 15);
    ellipse (t, y + 200, 15);
    ellipse (t, y + 300, 15);
    ellipse (t, y + 400, 15);
    ellipse (t, y + 500, 15);
    ellipse (t, y + 600, 15);
    ellipse (t, y + 700, 15);
    ellipse (t, y + 800, 15);

    ellipse (u, y + 50, 15);
    ellipse (u, y - 50, 15);
    ellipse (u, y - 150, 15);
    ellipse (u, y - 250, 15);
    ellipse (u, y - 350, 15);
    ellipse (u, y - 450, 15);
    ellipse (u, y - 550, 15);
    ellipse (u, y - 650, 15);
    ellipse (u, y - 750, 15);
    ellipse (u, y - 850, 15);
    ellipse (u, y + 150, 15);
    ellipse (u, y + 250, 15);
    ellipse (u, y + 350, 15);
    ellipse (u, y + 450, 15);
    ellipse (u, y + 550, 15);
    ellipse (u, y + 650, 15);
    ellipse (u, y + 750, 15);
    ellipse (u, y + 850, 15);

    ellipse (v, y, 15);
    ellipse (v, y - 100, 15);
    ellipse (v, y - 200, 15);
    ellipse (v, y - 300, 15);
    ellipse (v, y - 400, 15);
    ellipse (v, y - 500, 15);
    ellipse (v, y - 600, 15);
    ellipse (v, y - 700, 15);
    ellipse (v, y - 800, 15);
    ellipse (v, y + 100, 15);
    ellipse (v, y + 200, 15);
    ellipse (v, y + 300, 15);
    ellipse (v, y + 400, 15);
    ellipse (v, y + 500, 15);
    ellipse (v, y + 600, 15);
    ellipse (v, y + 700, 15);
    ellipse (v, y + 800, 15);


//Couldn't figure out how to make the following if statement work
//I'm leaving it there if I ever need to refer to it again 
// Moving the raindrop to a random starting point
  /*  if (y > height) {
      x = r ;
    }

    if (y > height) {
      a = r + r ;
    }
*/

//Resetting the raindrop after it falls
    if (y > height) {
      y = 0;
    }
    y = y + drop;



//Umbrella
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
