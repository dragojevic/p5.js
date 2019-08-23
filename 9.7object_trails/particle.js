function Particle(x, y) {
	this.x = x;
	this.y = y;

	this.history = [];

	this.update = function () {
		this.x += random(-10, 10);
		this.y += random(-10, 10);

		var v = createVector(this.x, this.y);
		this.history.push(v);
		//	console.log( this.hist.length);

		if (this.history.length > 22 ) {
			this.history.splice(0,1);
		}
	}

	this.show = function () {
		stroke(0);
		fill(0, 150);
		ellipse(this.x, this.y, 24, 24);

		console.log(this.history.length);
		console.log('before loop');

		for (var i = 0; i < this.history.length; i++) {
			var pos = this.history[i];
			
			ellipse(pos.x, pos.y, 5, 5);
		}
	}

	this.f = function(r) {
		return 2; 
	}
}