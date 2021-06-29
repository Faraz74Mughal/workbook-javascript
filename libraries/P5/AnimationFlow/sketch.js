let x = 100;
let y = 100;

function setup() {
	createCanvas(720, 400);
	stroke(255);
	frameRate(50);
	// noLoop();
}

function draw() {
	background(0);
	y = y - 1;
	x = x - 1;
	if (y < 0) {
		y = height;
	}
	if (x < 0) {
		x = width;
	}
	line(0, y, width, y);
	line(x, 0, x, height);
}
