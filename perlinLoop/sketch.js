let noiseMax = 0.4;
let phase = 0;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(0, 10, 5, 0.1);
}

function draw() {

  background(0);
  translate(width/2, height/2);
  stroke(255);

  noFill();
  
  let t = 0;
  beginShape();

  let noiseMax = slider.value();

  for (let a = 0; a < TWO_PI; a+=0.1) {
  /* 
    xoff and yoff go from 0 to 2
  let xoff = cos(a) +1;
    let yoff = sin(a) +1; */
    /// same thing using mape
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    
    let r = map( noise(xoff, yoff), 0, 1, 100, 200);
    let x = r*cos(a);
    let y = r*sin(a);

    vertex(x, y);
  }

  endShape(CLOSE);
//  noLoop();
  phase+=0.01;
}
