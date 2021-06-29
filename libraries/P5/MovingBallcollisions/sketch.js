let B = [];
let numberOfBalls = 1000;

class Ball {
	constructor() {
		this.horizontalMovement = this.randomMovement();
		this.verticalMovement = this.randomMovement();
		let S = Number.parseInt(Math.random() * 5) + 2;
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
		let r = Number.parseInt(Math.random() * 10) + 1;
		let g = Number.parseInt(Math.random() * 10) + 1;
		let b = Number.parseInt(Math.random() * 10) + 1;
		return `#${r}${g}${b}`;
	}
	make() {
		noStroke();
		fill(this.c);
		ellipse(this.x, this.y, this.w, this.h);
	}
	move() {
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
		let ans = Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2);
		return Math.abs(Number(Math.sqrt(ans)));
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
			this.collide = true;
			if ((angle >= 0 && angle < 30) || (angle <= 360 && angle > 330) || (angle >= 150 && angle < 210)) {
				this.horizontalMovement = this.horizontalMovement * -1;
				// ball.horizontalMovement = ball.horizontalMovement * -1;
			} else if ((angle >= 240 && angle < 300) || (angle >= 60 && angle < 120)) {
				this.verticalMovement = this.verticalMovement * -1;
				// ball.verticalMovement = ball.verticalMovement * -1;
			} else {
				this.verticalMovement = this.verticalMovement * -1;
				this.horizontalMovement = this.horizontalMovement * -1;
				// ball.verticalMovement = ball.verticalMovement * -1;
				// ball.horizontalMovement = ball.horizontalMovement * -1;
			}
		} else {
			this.collide = false;
		}
	}
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	// frameRate(50);
	// noLoop();
	for (let i = 0; i < numberOfBalls; i++) {
		let ball = new Ball();
		B[i] = ball;
	}
}

function draw() {
	background(0);
	for (let i = 0; i < numberOfBalls; i++) {
		B[i].move();
		B[i].make();
		for (let j = 0; j < numberOfBalls; j++) {
			if (B[i] != B[j]) {
				B[i].interCollision(B[j]);
			}
		}
	}
}
