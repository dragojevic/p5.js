function Bubble() {
	this.x = random(0, width);
	this.y = random(0, height);

	this.display = function() {
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	},
	
	this.move = function() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}
}
