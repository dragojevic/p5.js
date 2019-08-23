let spacing;
let x, y;

function setup() {
	createCanvas(400, 400);
	spacing = 20;
	x = y = 0;
	background(30, 200, 10);
}


function draw() {
	stroke(255);

	if (random(1) < 0.7) {
		line(x, y, x+spacing, y+spacing);
	} else {
		line(x, y+spacing, x+spacing, y);
	}

	x = x + spacing;
	if (x > width) {
		x = 0;
		y = y + spacing;
	}
}