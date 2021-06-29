function setup() {
	createCanvas(720, 400);
}

function draw() {
	background('gold');
	noStroke();
	for (let i = 0; i < height; i += 20) {
		fill('black');
		rect(0, i, width, 10);
		fill('gold');
		rect(i, 0, 10, height);
	}
}
