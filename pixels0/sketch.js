var video;

function setup() {
	createCanvas(640, 480);

	pixelDensity(1);
	video = createCapture(VIDEO);
	 //video.hide();
}

function draw() {
	background(51);
	
	video.loadPixels();
	loadPixels();

	
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var index = (x + y*width)* 4;

			var r = video.pixels[index + 0];
			var g = video.pixels[index + 1];
			var b = video.pixels[index + 2];

			var grey= (r + g + b)/3;
	
			pixels[index + 0] = grey;
			pixels[index + 1] = grey;
			pixels[index + 2] = grey;
			pixels[index + 3] = 255;
		}
	}
	updatePixels();
	scale(1.5);
}