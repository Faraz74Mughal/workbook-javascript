let font,
	fontsize = 32;

function preload() {
	// font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
	createCanvas(710, 400);
	// textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);
}

function draw() {
	background(160);

	let gap = 52;
	let margin = 10;
	translate(margin * 4, margin * 4);

	let counter = 35;

	for (let y = 0; y < height - gap; y += gap) {
		for (let x = 0; x < width - gap; x += gap) {
			let letter = char(counter);
			if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
				fill('#ed225d');
			} else {
				fill(255);
			}
			text(letter, x, y);
			counter++;
		}
	}
}
