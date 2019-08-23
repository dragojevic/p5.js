

var vScale = 32; // 16; //16; //16;
var video;

function setup() {
	createCanvas(640, 480);

	pixelDensity(1);
	video = createCapture(VIDEO);
	video.hide();
	video.size(width/vScale, height/vScale);
}

function draw() {
//	background(51);
	noStroke();	
	video.loadPixels();

	for (var y = 0; y < video.height; y++) {
		for (var x = 0; x < video.width; x++) {
			var index = (x + y*video.width)* 4;

			var r = video.pixels[index + 0];
			var g = video.pixels[index + 1];
			var b = video.pixels[index + 2];

			var grey= (r + g + b)/3;
			
			fill(grey);
//			fill(r,g,b);	
			noStroke();
			rect(x*vScale,y*vScale, vScale, vScale);
		}
	}

}