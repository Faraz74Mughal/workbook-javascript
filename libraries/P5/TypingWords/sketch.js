let font,
	fontsize = 40;

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
	textAlign(RIGHT);
	drawWords(width * 0.25);
	textAlign(CENTER);
	drawWords(width * 0.5);
	textAlign(LEFT);
	drawWords(width * 0.75);
}

function drawWords(x) {
	fill(0);
	text('ichi', x, 80);
	fill(65);
	text('ni', x, 150);
	fill(190);
	text('san', x, 220);
	fill(255);
	text('shi', x, 290);
}
