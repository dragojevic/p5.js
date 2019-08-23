//var x;
//var y;
var pos;
var prev;

function setup() {
	createCanvas(400, 400);
	background(255,229, 240);;
//	x = 200;
//	y = 200;
	pos = createVector(200, 200);
	prev = pos.copy();
}

function draw() {
	stroke(0);
	strokeWeight(2);
	var myVar = 'Hi';
	//point(x, y);
	//point(pos.x, pos.y);

	line(pos.x, pos.y, prev.x, prev.y);
	prev.set(pos);
	
	var r = floor(random(4)); /// r is 0, 1,2 or 3;
	var step = createVector(0,0);
	switch (r) {
		case 0:
			step.x =step.x + 1;
			break;
		case 1:
			step.x =step.x - 1;
			break;
		case 2:
			step.y = step.y + 1;
			break;
		case 3:
			step.y = step.y - 1;
			break;
	} 

	//var step = p5.Vector.random2D();
	step.mult(15);
//	pos = pos + step;
	pos.add(step);
}