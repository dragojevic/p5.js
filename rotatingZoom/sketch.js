let angle;

function setup() {
	angle = 0;
	createCanvas(600, 400);
	angleMode(DEGREES);
	rectMode(CENTER);
}

function draw() {
	background(0);

	push();
		translate(200, 200);
		scale(mouseX/100);
		rotate(angle);
		stroke(255);
		fill(20, 100, 50);
		rect(0, 0, 100, 50);
	pop();

	angle += 4;
}