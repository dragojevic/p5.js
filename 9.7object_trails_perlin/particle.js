
function Particle(x, y) {
	this.x = x;
	this.y = y;
	
	this.x_off1 = 0;
	this.x_off2 = 123432;

	this.history = [];

	this.update = function () {
//		this.x += random(-10, 10);
	//	this.y += random(-10, 10);
		this.x = map(noise(this.x_off1), 0, 1, 0, width);
		this.y = map(noise(this.x_off2), 0, 1, 0, height);


		var v = createVector(this.x, this.y);
		this.history.push(v);
		//	console.log( this.hist.length);

		if (this.history.length > 40 ) {
			this.history.splice(0,1);
		}

		this.x_off1 += 0.012;
  		this.x_off2 += 0.012;
	}

	this.show = function () {
		stroke(0);
		fill(0, 150);
		ellipse(this.x, this.y, 50, 50);


		for (var i = 0; i < this.history.length; i++) {
			var pos = this.history[i];
		
			var r = i; //i; // 24;

			ellipse(pos.x, pos.y, r, r);
		}
	}

}