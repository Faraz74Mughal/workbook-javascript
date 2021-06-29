function setup() {
	createCanvas(720, 400);
}

function draw() {
	background(0);
	noFill();

	stroke(255);
	strokeWeight(4);
	point(width * 0.5, height * 0.5);
	point(width * 0.5, height * 0.25);

	stroke(0, 153, 255);
	strokeWeight(4);
	line(0, height * 0.33, width, height * 0.33);

	stroke(255, 153, 0);
	strokeWeight(4);
	rect(width * 0.3, height * 0.1, width * 0.4, height * 0.8);
}
