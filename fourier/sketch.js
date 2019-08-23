let time = 0;
let wave = [];

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(20, 200, 30);

	translate(150, 150);

	let radius = 100;

	stroke(255);
	noFill();
	strokeWeight(3);
	ellipse(0, 0, 2*radius);

	strokeWeight(4);
	let x = radius * cos(time);
	let y = radius * sin(time);

	wave.unshift(y);

	line(0, 0, x, y);
	ellipse(x, y, 8);

	translate(150, 0);

	line(x - 150, y, 0, wave[0]);

	beginShape();
	noFill();
	for (j = 0; j < wave.length; j++) {
		vertex(j, wave[j]);
	}
	endShape();


	time += 0.05;

	//console.log( wave.length );
	if (wave.length > 500) {
//		print("wave size beigger than 500");
		wave.pop();
	}
}