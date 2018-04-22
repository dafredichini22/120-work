Frederick Cantarine, 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

This is working the way it is because the ellipse has certain perameters that it must stay within and when it reaches those perameters, then it switches direction. It starts off moving 1 pixel in the x and y direction and then is affected depending where you click the screen which alters the values given to the movement in the x and y direction.
The beginning part starting with "let ball" is creating an object and it's qualitites. Then the function setup allows to code to run. Then the Canvas is made and background colored. Then the draw function is established.
Line 21 moves the ellpise 1 pixel in the x direction while line 22 moves the ellipse 1 pixel in the y direction. Both of these combined in the draw function leaves a trail behind them leaving a path of ellipses.
The If statement in line 25 changes the direction of the ellipse in the x direction when it either reaches the width of the screen to the right or when it reaches the width of the screen to the left.
The If statement in line 28 changes the direction of the ellipse in the y direction when it either reaches the top of the canvas or the bottom of the canvas.
Then the fill statement states that the following will be filled white.. Then the ellipse is drawn.
Then the mousePressed function is set up. This function changes the angle of the ellipse whenever the mouse is pressed. Now the map the mapping is done, it changes the x value to where ever the mouseX is on the map. Meaning the further right you click, the more the ellipse will change in the x direction. Likewise, the mapping also changes the y value to where ever the mouseY is on the map. So the higher you click, the less it will change in the y direction. And the lower you click, the more it will change in the y direction.
The closer you click to the top right, the slower the ball will move. And the closer you click to the bottom left, the faster the the ball move.


## How did you alter the sketch?

I altered the sketch in a few ways. The first thing I did was make it so that the ellipse goes completely off screen rather than bouncing when it touches the page. I did this to help create a better effect for another change I did.
Next I made it so that the ball does not bounce when hitting the top or bottom of the page, but rather continues its path starting over at the opposite side of the page. This just gives it a different feel. You go from a bouncing ball chain to a ball chain that transports across the room when it leaves the page. I used two "if" statements to accomplish this.
Next I added a boolean so that I could create a switch. I named the boolean kick. I added kick to an "if else" statement in the mousePressed function so that it could change the direction of the ball by inversing the ball.delta_y. This allows the user to play with the ball chain and make the chain go back and fourth as they please. The "if else" statement also changes if the boolean is true or false so that it could become a switch and not only change the direction once but an infinte amount of times.
Lastly, I added some new variables that get randomized when in the mousePressed function so that when the user clicks their mouse, it changes the fill color to a randomized color scheme. This just gives some color to the art.
