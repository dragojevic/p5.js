var x_off1 = 0;
var x_off2 = 123432;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  background(20, 40, 222);

  stroke(255);

  var x = map(noise(x_off1), 0, 1, 0, width);
  var y = map(noise(x_off2), 0, 1, 0, height);

  fill(54, 45, 145, 150);
  ellipse(x,y, 64, 64);

  x_off1 += 0.02;
  x_off2 += 0.02;
}
