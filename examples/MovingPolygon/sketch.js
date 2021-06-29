const Launch = () => {
	let Speed = 1;
	var audio;
	var mainPage;
	var btn;
	var canvas = document.getElementById(`ground`);
	var ctx = canvas.getContext('2d', { alpha: false });
	var numOfBalls = 30;
	var Balls = [];

	class Color {
		constructor() {}
		static randomColor() {
			let r = Number.parseInt(Math.random() * 251) + 5;
			let g = Number.parseInt(Math.random() * 251) + 5;
			let b = Number.parseInt(Math.random() * 251) + 5;
			return `rgb(${r},${g},${b})`;
		}
	}

	class Formula {
		constructor() {}
		static pythagorousTheorum(point1, point2) {
			return Number(Math.hypot(point1.x - point2.x, point1.y - point2.y));
		}
		static theta(point1, point2) {
			return Math.abs(Number(Math.atan2(point1.y - point2.y, point1.x - point2.x) * (180 / Math.PI)));
		}
	}

	class Ball {
		constructor() {
			this.horizontalMovement = this.randomMovement();
			this.verticalMovement = this.randomMovement();
			this.radius = Number.parseInt(Math.random() * 11) + 5;
			this.x = Number.parseInt(Math.random() * (canvas.width - this.radius * 2)) + this.radius;
			this.y = Number.parseInt(Math.random() * (canvas.height - this.radius * 2)) + this.radius;
			this.color = Color.randomColor();
		}
		randomMovement() {
			let type = Number.parseInt(Math.random() * 2);
			return type === 1 ? 1 : -1;
		}
		make() {
			ctx.lineWidth = 1;
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			ctx.fill();
			// ctx.beginPath();
			// ctx.fillStyle = 'white';
			// ctx.font = '10px arial';
			// ctx.textAlign = `center`;
			// ctx.fillText(`${this.radius}`, this.x, this.y - 5);
			// ctx.fillText(`${this.x},${this.y}`, this.x, this.y + 5);
			// ctx.fill();
		}
		move() {
			this.wallCollision();
			this.x = this.x + this.horizontalMovement;
			this.y = this.y + this.verticalMovement;
		}
		wallCollision() {
			if (this.x - this.radius <= 0) {
				this.horizontalMovement = this.horizontalMovement * -1;
			}
			if (this.y - this.radius <= 0) {
				this.verticalMovement = this.verticalMovement * -1;
			}
			if (this.x + this.radius >= canvas.width) {
				this.horizontalMovement = this.horizontalMovement * -1;
			}
			if (this.y + this.radius >= canvas.height) {
				this.verticalMovement = this.verticalMovement * -1;
			}
		}
		static interCollision(bi1, bi2) {
			if (Balls[bi1] != undefined && Balls[bi2] != undefined) {
				let strike = Balls[bi1].radius + Balls[bi2].radius;
				let distance = Formula.pythagorousTheorum(
					{ x: Balls[bi1].x, y: Balls[bi1].y },
					{ x: Balls[bi2].x, y: Balls[bi2].y }
				);
				if (distance <= strike) {
					let Chainer = new Promise((resolve, reject) => resolve());
					Chainer.then(() => {
						Balls[bi1].horizontalMovement = Balls[bi1].horizontalMovement * -1;
					})
						.then(() => {
							Balls[bi1].verticalMovement = Balls[bi1].verticalMovement * -1;
						})
						.then(() => {
							Balls[bi2].horizontalMovement = Balls[bi2].horizontalMovement * -1;
						})
						.then(() => {
							Balls[bi2].verticalMovement = Balls[bi2].verticalMovement * -1;
						})
						.catch((e) => {
							console.log('Error: ', e);
						});
				} else if (distance < strike) {
					let Chainer = new Promise((resolve, reject) => resolve());
					Chainer.then(() => {
						Balls.splice(bi1, 1);
					})
						.then(() => {
							Balls.splice(bi2, 1);
						})
						.catch((e) => {
							console.log('Error: ', e);
						});
				}
			}
		}
		static interCollision2(bi1, bi2) {
			if (Balls[bi1] != undefined && Balls[bi2] != undefined) {
				let strike = Balls[bi1].radius + Balls[bi2].radius;
				let distance = Formula.pythagorousTheorum(
					{ x: Balls[bi1].x, y: Balls[bi1].y },
					{ x: Balls[bi2].x, y: Balls[bi2].y }
				);
				if (distance <= strike) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
	}

	const Preload = () => {
		audio = new Audio('assets/beep-1.mp3');
		audio.autoplay = false;
		audio.loop = false;
		audio.muted = false;
		audio.volume = 1;
		audio.playbackRate = 7;

		// canvas.width = 800;
		// canvas.height = 400;
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		canvas.style.backgroundColor = 'black';
		var scaleX = window.innerWidth / canvas.width;
		var scaleY = window.innerHeight / canvas.height;
		var scaleToFit = Math.min(scaleX, scaleY);
		var scaleToCover = Math.max(scaleX, scaleY);
		ctx.scale(scaleToFit, scaleToFit);
	};

	const Setup = () => {
		console.log('Canvas: ', canvas.width, canvas.height);
		mainPage = document.createElement('mainPage');
		btn = document.createElement('button');
		btn.style.display = 'none';
		btn.onclick = function() {
			audio.play();
		};
		mainPage.append(btn);
		for (let i = 0; i < numOfBalls; i++) {
			let B = new Ball();
			Balls.push(B);
		}
		// canvas.addEventListener('mousemove', (e) => {
		// 	console.log(`Coords: (${e.clientX},${e.clientY})`);
		// });
		for (let i = 0; i < numOfBalls; i++) {
			for (let j = 0; j < numOfBalls; j++) {
				let result = Ball.interCollision(i, j);
				if (result) {
					Balls.splice(i, 1);
					Balls.splice(j, 1);
				}
			}
		}
	};

	const DrawLine = (x1, y1, x2, y2, c = 'white') => {
		ctx.beginPath(); // Start a new path
		ctx.strokeStyle = c;
		ctx.moveTo(x1, y1); // Move the pen to (30, 50)
		ctx.lineTo(x2, y2); // Draw a line to (150, 100)
		ctx.stroke(); // Render the path
	};

	const Background = () => {
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	const Run = () => {
		// console.log('Running');
		Background();
		for (let i = 0; i < numOfBalls; i++) {
			for (let j = 0; j < numOfBalls; j++) {
				try {
					if (i != j) {
						Ball.interCollision(i, j);
					}
				} catch (err) {}
				let distance = Formula.pythagorousTheorum(
					{ x: Balls[i].x, y: Balls[i].y },
					{ x: Balls[j].x, y: Balls[j].y }
				);
				let C = 'transparent';
				if (distance < 200) {
					C = 'red';
				} else if (distance < 300) {
					C = 'orange';
				} else if (distance < 400) {
					C = 'gold';
				} else if (distance < 500) {
					C = 'yellow';
				} else if (distance < 600) {
					C = 'lightgreen';
				} else if (distance < 700) {
					C = 'green';
				}
				DrawLine(Balls[i].x, Balls[i].y, Balls[j].x, Balls[j].y, C);
			}
			try {
				Balls[i].move();
				Balls[i].make();
			} catch (err) {}
		}

		setTimeout(() => {
			window.requestAnimationFrame(Run);
		}, Speed);
	};

	let Chain = new Promise((resolve, reject) => resolve());
	Chain.then(() => {
		Preload();
	})
		.then(() => {
			Setup();
		})
		.then(() => {
			// Run();
			window.requestAnimationFrame(Run);
		})
		.catch((e) => {
			console.log('Error: ', e);
		});
};

window.onload = Launch;
