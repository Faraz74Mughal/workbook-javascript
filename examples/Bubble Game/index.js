// Canvas Setup
const canvas = document.getElementById('myCanvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
ctx.font = '50px Georgia';

// Mouse Interactivity
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	click: false
};
canvas.addEventListener('mousedown', function(event) {
	mouse.click = true;
	mouse.x = event.x - canvasPosition.left;
	mouse.y = event.y - canvasPosition.top;
});
canvas.addEventListener('mouseup', function(event) {
	mouse.click = false;
});

// Player
class Player {
	constructor() {
		this.x = canvas.width;
		this.y = canvas.height / 2;
		this.radius = 50;
		this.angle = 0;
		this.frameX = 0;
		this.frameY = 0;
		this.frame = 0;
		this.spriteWidth = 498;
		this.spriteHeight = 327;
	}
	update() {
		const dx = this.x - mouse.x;
		const dy = this.y - mouse.y;
		if (mouse.x != this.x) {
			this.x -= dx / 30;
		}
		if (mouse.y != this.y) {
			this.y -= dy / 30;
		}
	}
	draw() {
		if (mouse.click) {
			ctx.lineWidth = 0.2;
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(mouse.x, mouse.y);
			ctx.stroke();
		}
	}
}

// Bubbles
// Animation Loop
