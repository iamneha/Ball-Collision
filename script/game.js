var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //To store the 2D rendering context - the actual tool we can use to paint on the canvas.
var x = canvas.width/2;   // Bottom center part of canvas in variables called x and y
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x += dx;
	y += dy;
}

setInterval(draw, 25);