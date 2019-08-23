var x = 0;
var y = 0;
var targetX = 500;
var targetY = 200;

function setup() {
  createCanvas(600, 400);
}

function mouseMoved() {
  targetX = mouseX;
  targetY = mouseY;
}

function draw() {
  //x = targetX-40;
  x = lerp(x, targetX, 0.01);
  y = lerp(y, targetY, 0.01);


  background(20, 40, 222);

  stroke(255);

  fill(54, 45, 145, 150);
  ellipse(targetX, targetY, 64, 64);


  fill(220, 45, 45, 150);
  ellipse(x, y, 64, 64);
}
