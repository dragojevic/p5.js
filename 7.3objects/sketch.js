var bubble = {
	x: 200,
	y: 300,

	display: function() {
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	},
	move: function() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background( 100, 100, 80);
	bubble.move();
	bubble.display();
}