var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //To store the 2D rendering context - the actual tool we can use to paint on the canvas.
var x = canvas.width/2;   // Bottom center part of canvas in variables called x and y
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();

	//There are four walls to bounce the ball off.
	if(y + dy < 0 || y + dy > canvas.height) {  //check with top left and bottom edge
		dy = -dy;  //Reverse the direction of ball
	}

	if(x + dx < 0 || x + dx > canvas.width) {  //check with left and right ones.                             
		dx = -dx;
	}
	
	x += dx;
	y += dy;
}

setInterval(draw, 25);