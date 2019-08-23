console.log(ml5.version);

let soundCl;

function preload() {
	let options = {
		probabilityThreshold: 0.95
	};


	soundCl = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup() {
	createCanvas(300, 300);
	soundCl.classify(gotResults);
}

function draw() {
	background(50, 212, 10);
}

function gotResults(error, results) {
	if (error) {
		console.log('something went funny');;
		console.error(error);;
	}

	console.log(results);
}