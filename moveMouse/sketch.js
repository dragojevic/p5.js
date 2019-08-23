let oldX, oldY;

function setup() {
	createCanvas(500, 500);
	background(255, 0, 130);
	//noLoop();
}


function draw() {
	if ( oldX != mouseX || oldY != mouseY){
		fill(random(255),0,255);
	}

		noStroke();
	ellipse(mouseX, mouseY, 100, 100);
	
	ellipse(mouseY, mouseX, 100, 100);

	oldX = mouseX;
	oldY = mouseY;
}