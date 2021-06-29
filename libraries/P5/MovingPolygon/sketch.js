let B = [];
let numberOfBalls = 50;
var song;
var audio;
var btn;

class Ball {
	constructor() {
		this.horizontalMovement = this.randomMovement();
		this.verticalMovement = this.randomMovement();
		let S = Number.parseInt(Math.random() * 20) + 10;
		this.w = S;
		this.h = S;
		this.x = Number.parseInt(Math.random() * (width - S * 2)) + S;
		this.y = Number.parseInt(Math.random() * (height - S * 2)) + S;
		this.c = this.randomColor();
		this.collide = false;
	}
	randomMovement() {
		let type = Number.parseInt(Math.random() * 2);
		return type === 1 ? 1 : -1;
	}
	randomColor() {
		let r = Number.parseInt(Math.random() * 251) + 5;
		let g = Number.parseInt(Math.random() * 251) + 5;
		let b = Number.parseInt(Math.random() * 251) + 5;
		return `rgb(${r},${g},${b})`;
	}
	make() {
		noStroke();
		fill(this.c);
		ellipse(this.x, this.y, this.w, this.h);
		// fill(`white`);
		// textSize(12);
		// textAlign(CENTER, CENTER);
		// text(`${this.w * 0.5}`, this.x, this.y - 10);
		// text(`${this.x},${this.y}`, this.x, this.y + 10);
	}
	move() {
		this.collide = false;
		this.wallCollision();
		this.x = this.x + this.horizontalMovement;
		this.y = this.y + this.verticalMovement;
	}
	wallCollision() {
		if (this.x - this.w * 0.5 <= 0) {
			this.horizontalMovement = this.horizontalMovement * -1;
		}
		if (this.y - this.h * 0.5 <= 0) {
			this.verticalMovement = this.verticalMovement * -1;
		}
		if (this.x + this.w * 0.5 >= width) {
			this.horizontalMovement = this.horizontalMovement * -1;
		}
		if (this.y + this.h * 0.5 >= height) {
			this.verticalMovement = this.verticalMovement * -1;
		}
	}
	pythagorousTheorum(point1, point2) {
		// let ans = Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2);
		// return Math.abs(Number(Math.sqrt(ans)));
		return Number(Math.hypot(point1.x - point2.x, point1.y - point2.y));
	}
	theta(point1, point2) {
		return Math.abs(Number(Math.atan2(point1.y - point2.y, point1.x - point2.x) * (180 / Math.PI)));
	}
	interCollision(ball) {
		let arm1 = this.w * 0.5;
		let arm2 = ball.w * 0.5;
		let totalArm = arm1 + arm2;
		let distance = this.pythagorousTheorum({ x: this.x, y: this.y }, { x: ball.x, y: ball.y });
		let angle = this.theta({ x: this.x, y: this.y }, { x: ball.x, y: ball.y });
		if (distance <= totalArm) {
			btn.click();
			// audio.play();
			this.collide = true;
			this.verticalMovement = this.verticalMovement * -1;
			this.horizontalMovement = this.horizontalMovement * -1;
			// if ((angle >= 0 && angle < 30) || (angle <= 360 && angle > 330) || (angle >= 150 && angle < 210)) {
			// 	this.horizontalMovement = this.horizontalMovement * -1;
			// 	ball.horizontalMovement = this.horizontalMovement * -1;
			// } else if ((angle >= 240 && angle < 300) || (angle >= 60 && angle < 120)) {
			// 	this.verticalMovement = this.verticalMovement * -1;
			// 	ball.verticalMovement = this.verticalMovement * -1;
			// } else {
			// 	this.verticalMovement = this.verticalMovement * -1;
			// 	this.horizontalMovement = this.horizontalMovement * -1;
			// 	ball.verticalMovement = this.verticalMovement * -1;
			// 	ball.horizontalMovement = this.horizontalMovement * -1;
			// }
		}
	}
}

function preload() {
	btn = document.getElementById('btn');
	btn.style.display = 'none';
	btn.onClick = function(e) {
		audio.play();
		console.log('Sound Played');
	};
	// song = loadSound('beep-1.mp3');
	new Promise((resolve, reject) => {
		audio = new Audio('assets/beep-1.mp3');
		resolve(audio);
	})
		.then((audio) => {
			audio.autoplay = false;
			audio.loop = false;
			audio.muted = false;
			audio.volume = 1;
			audio.playbackRate = 7;
			return audio;
		})
		.catch((err) => {
			console.error('Error: ', err);
		});
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	// frameRate(50);
	for (let i = 0; i < numberOfBalls; i++) {
		let ball = new Ball();
		B[i] = ball;
	}
	for (let i = 0; i < numberOfBalls; i++) {
		for (let j = 0; j < numberOfBalls; j++) {
			if (B[i] != B[j]) {
				B[i].interCollision(B[j]);
			}
		}
	}
	for (let i = 0; i < numberOfBalls; i++) {
		try {
			if (B != undefined && B[i] != undefined && B[i].collide) {
				B.splice(i, 1);
			}
		} catch (err) {}
	}
	// noLoop();
}

function draw() {
	background(0);
	try {
		for (let i = 0; i < numberOfBalls; i++) {
			for (let j = 0; j < numberOfBalls; j++) {
				if (B[i] != undefined && B[j] != undefined) {
					if (B[i] != B[j]) {
						B[i].interCollision(B[j]);
					}
					let r1 = B[i].w * 0.5;
					let r2 = B[j].w * 0.5;
					let totalRadius = r1 + r2;
					let distance = B[i].pythagorousTheorum({ x: B[i].x, y: B[i].y }, { x: B[j].x, y: B[j].y });
					if (distance < 200) {
						strokeWeight(1);
						stroke('red');
						line(B[i].x, B[i].y, B[j].x, B[j].y);
					} else if (distance < 300) {
						strokeWeight(1);
						stroke('orange');
						line(B[i].x, B[i].y, B[j].x, B[j].y);
					} else if (distance < 400) {
						strokeWeight(1);
						stroke('yellow');
						line(B[i].x, B[i].y, B[j].x, B[j].y);
					} else if (distance < 500) {
						strokeWeight(1);
						stroke('gray');
						line(B[i].x, B[i].y, B[j].x, B[j].y);
					} else if (distance <= totalRadius) {
						// console.log('Distance: ', distance - totalRadius);
						// strokeWeight(4);
						// stroke('red');
						// line(B[i].x, B[i].y, B[j].x, B[j].y);
						// console.log(B[i].w, B[i], x, B[i].y, B[j], w, B[j].x, B[j].y);
						// B.splice(i, 1);
						// B.splice(j, 1);
					}
				}
			}
			if (B[i] != undefined) {
				B[i].move();
				B[i].make();
			}
		}
	} catch (err) {}
}
