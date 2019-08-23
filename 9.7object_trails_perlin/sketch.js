var particles = []; 

function setup() {
	createCanvas(600, 600);
}

function mousePressed() {
	particles.push(new Particle(mouseX, mouseY));
	console.log('clicked');

	console.log(particles.length);
}

function draw() {
	background( 200);
	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].show();
	}
}