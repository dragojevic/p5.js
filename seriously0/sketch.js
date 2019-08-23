
var video;
var slider;

function setup() {
	canvas = createCanvas(600, 480, WEBGL);
	canvas.id('p5canvas');
	
	video = createCapture(VIDEO);
	video.size(640, 480);
	video.hide();

	video.id('p5video');

	slider = createSlider(0, 1, 0.5, 0,01);
	slider.id('blur-slider');

	var	seriously = new Seriously();

	var src = seriously.source('#p5video');
	var target = seriously.target('#p5canvas');

	var blur = seriously.effect('blur');
	blur.amount = '#blur-slider';

	blur.source = src;
	target.source = blur;


	
	seriously.go();	
}

function draw(){
	//image ( video, 0, 0);
} 