var x = 0.01;
var y = 0;
var z = 0;

var a = 10;
var b = 28;
var c = 8.0 / 3.0;

function setup() {
	createCanvas(600, 400);
	background(0);
}

function draw() {
	var dt = 0.01;
	var dx = (a * (y - x)) * dt;
	var dy = (x * (b - z) - y) * dt;
	var dz = (x * y - c * z) * dt;
	x = x + dx;
	y = y + dy;
	z = z + dz;

	translate(width / 2, height / 2);


	stroke(255);
	point(x, y);

	print(x, y, z);
}