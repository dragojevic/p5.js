// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/ikwNrFvnL3g

var inc = 0.01;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
}

function draw() {
  var yoff = 0;
  loadPixels();
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      //var r = noise(x*0.01, y*0.01);

      
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
//    noLoop();

}