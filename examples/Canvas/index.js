const Speed = 3;
const canvas = document.querySelector('#ground');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let Frame = 0;

let Ground = {
	color: {
		R: 0,
		G: 0,
		B: 0
	},
	background: {
		R: 0,
		G: 0,
		B: 0
	},
	getColor() {
		return `#${this.color.R}${this.color.G}${this.color.B}`;
	},
	getBackground() {
		return `#${this.background.R}${this.background.G}${this.background.B}`;
	},
	change() {
		if (this.color.R != 9) this.color.R = this.color.R + 1;
		else this.color.R = 0;
		if (this.color.G != 9) this.color.G = this.color.G + 1;
		else this.color.G = 0;
		if (this.color.B != 9) this.color.B = this.color.B + 1;
		else this.color.B = 0;
		if (this.background.R != 9) this.background.R = this.background.R + 1;
		else this.background.R = 0;
		if (this.background.G != 9) this.color.G = this.color.G + 1;
		else this.background.G = 0;
		if (this.background.B != 9) this.background.B = this.background.B + 1;
		else this.background.B = 0;
	}
};

const RandomColor = () => {
	let R = Number.parseInt(Math.random() * 9);
	let G = Number.parseInt(Math.random() * 9);
	let B = Number.parseInt(Math.random() * 9);
	const color = `#${R}${G}${B}`;
	console.log(color);
	return color;
};

let State = {
	character: 'stand'
};

let Keyboard = {
	space: false
};

document.addEventListener('keyup', (event) => {
	event.preventDefault();
	Keyboard.space = true;
	if (State.character == 'stand') {
		State.character = 'walk';
	} else {
		State.character = 'stand';
	}
});

let img = new Image();
img.onload = () => {
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = 'high';
};
img.src = 'mario.png';

const Run = () => {
	Frame++;
	// if (Frame % Speed == 0) {
	// 	Ground.change();
	// }

	// base_image = new Image();
	// base_image.src = 'mario.png';
	// base_image.onload = () => ctx.drawImage(base_image, 0, 0, 400, 400);

	if (State.character == 'stand') {
		ctx.drawImage(img, 0, 0, 50, 70, 10, 10, img.width / 3, img.height / 3);
	} else {
		ctx.drawImage(img, 65, 0, 50, 70, 10, 10, img.width / 3, img.height / 3);
	}

	// ctx.lineWidth = 10;
	// ctx.strokeStyle = Ground.getColor();
	// ctx.fillStyle = Ground.getBackground();
	// ctx.strokeRect(75, 140, 150, 110);
	// ctx.fillRect(130, 190, 40, 60);
	// ctx.beginPath();
	// ctx.moveTo(50, 140);
	// ctx.lineTo(150, 60);
	// ctx.lineTo(250, 140);
	// ctx.closePath();
	// ctx.stroke();

	// ctx.rotate(45 * Math.PI / 180);
	// ctx.fillStyle = Ground.getColor();
	// ctx.fillRect(200, 10, 800, 20);
	// ctx.setTransform(1, 0, 0, 1, 0, 0);

	// ctx.fillStyle = Ground.getColor();
	// ctx.fillRect(80, 60, 140, 30);
	// ctx.translate(150, 75);
	// ctx.rotate(Math.PI / 2);
	// ctx.translate(-150, -75);
	// ctx.fillStyle = Ground.getColor();
	// ctx.fillRect(80, 60, 140, 30);
	// ctx.setTransform(1, 0, 0, 1, 0, 0);

	// Recurrsion
	if (Frame % Speed == 0) {
		if (Keyboard.space) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			Keyboard.space = false;
		}
	}
	window.requestAnimationFrame(Run);
};

window.requestAnimationFrame(Run);
