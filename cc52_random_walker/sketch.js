var x;
var y;

function setup() {
	createCanvas(400, 400);

	x = 200;
	y = 200;
}

function draw() {
	background(51);
	stroke(255);
	strokeWeight(2);
	point(x, y);

	var r = floor(random(4)); /// r is 0, 1,2 or 3;

	switch (r) {
		case 0:
			x = x + 1;
			break;
		case 1:
			x = x - 1;
			break;
		case 2:
			y = y + 1;
			break;
		case 3:
			y = y - 1;
			break;
	}
}