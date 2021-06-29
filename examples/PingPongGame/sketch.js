const Launch = () => {
	var Scale = 20;
	let Speed = 1;
	var audio;
	var mainPage;
	var btn;
	var canvas = document.getElementById(`ground`);
	var ctx = canvas.getContext('2d', { alpha: false });

	var Bar = 0;
	var Score = 0;
	var ScoreJump = 1;
	var ballImage;
	var barImage;
	var start = false;

	const Preload = () => {
		audio = new Audio('assets/beep-1.mp3');
		audio.autoplay = false;
		audio.loop = false;
		audio.muted = false;
		audio.volume = 1;
		audio.playbackRate = 7;

		ballImage = new Image();
		ballImage.src = 'assets/ping-pong-ball.png';

		barImage = new Image();
		barImage.src = 'assets/pong_logo.png';

		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		canvas.style.backgroundColor = 'black';
		var scaleX = window.innerWidth / canvas.width;
		var scaleY = window.innerHeight / canvas.height;
		var scaleToFit = Math.min(scaleX, scaleY);
		var scaleToCover = Math.max(scaleX, scaleY);
		ctx.scale(scaleToFit, scaleToFit);
	};

	// document.addEventListener('keydown', function(event) {
	// 	const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
	// 	if (key == 'ArrowRight') {
	// 		// up arrow
	// 		Bar += 1;
	// 	}
	// });
	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 65:
				start = true;
				break;
			case 37:
				if (Bar != 0 || Bar < 0) {
					Bar -= Scale;
				}
				break;
			case 38:
				// alert('up');
				break;
			case 39:
				if (Bar < canvas.width - Scale * Scale) {
					Bar += Scale;
				}
				break;
			case 40:
				// alert('down');
				break;
		}
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
	};

	const Ball = {
		x: Math.random() * (canvas.width / 5) * 5,
		y: 0,
		vertical: 5,
		horizontal: 5,
		disabled: false,
		move: function() {
			this.x += this.horizontal;
			this.y += this.vertical;
		},
		make: function() {
			if (!this.disabled) {
				Dot(this.x, this.y, 'gold');
			}
		},
		barStrike: function() {
			if (
				(canvas.height - Scale * 8 <= Ball.y || canvas.height - Scale * 7) <= Ball.y &&
				Bar <= Ball.x &&
				Bar + Scale * Scale > Ball.x
			) {
				btn.click();
				this.vertical = -this.vertical;
				Score = Score + ScoreJump;
				ScoreJump++;
				console.log('Score: ', Score);
			} else if (canvas.height - Scale <= Ball.y) {
				// this.vertical = -this.vertical;
				this.disabled = true;
				start = false;
			}
			if (canvas.width - Scale * 2 <= Ball.x) {
				this.horizontal = -this.horizontal;
			}
			if (Ball.x < 0) {
				this.horizontal = -this.horizontal;
			}
			if (Ball.y < 0) {
				this.vertical = -this.vertical;
			}
		}
	};

	const Menu = () => {
		ctx.fillStyle = 'white';
		ctx.font = '30px Arial';
		ctx.textAlign = 'center';
		ctx.fillText('Main Menu', canvas.width * 0.5, canvas.height * 0.5 - 40);
		ctx.fillText('Press A to Play Game', canvas.width * 0.5, canvas.height * 0.5);
		ctx.fillText(`Last Score: ${Score}`, canvas.width * 0.5, canvas.height * 0.5 + 50);
	};

	const Dot = (x, y, color = 'white') => {
		// ctx.fillStyle = color;
		// ctx.fillRect(x, y, Scale, Scale); // fill in the pixel at (10,10)
		// ctx.fill();
		ctx.drawImage(ballImage, x, y, Scale * 2, Scale * 2);
	};

	const Dash = (x, y, color = 'white') => {
		// ctx.fillStyle = color;
		// ctx.fillRect(x, y, Scale * Scale, Scale); // fill in the pixel at (10,10)
		// ctx.fill();
		ctx.drawImage(barImage, x, y, Scale * Scale, Scale * 8);
	};

	const Background = () => {
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	const Run = () => {
		// console.log('Running');
		Background();
		if (start) {
			Ball.barStrike();
			Ball.move();
			Ball.make();
			Dash(Bar, canvas.height - Scale * 7, 'gold');
		} else {
			Menu();
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
