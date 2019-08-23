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
	rotate(angle);
	fill(255, 100, 50);
	rect(0, 0, 100, 50);
	pop();

	for (let i = 0; i < 5; i++) {
		push();
		fill(55, 100, 50);
		translate(width / 2 + 50 * i, height / 3);
		rotate(-0.5 * angle);
		rect(0, 0, 100, 50);
		pop();
	}

	angle += 4;
}