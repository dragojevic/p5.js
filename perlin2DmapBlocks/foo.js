
var inc = 0.01;
let scl = 3;
let cols, rows;

function setup() {
  createCanvas(1000, 1000);

  cols = floor(width / scl);
  rows = floor(height / scl);

  console.log(cols);
  console.log(rows);
  
  pixelDensity(1);

  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {

      var r = noise(xoff, yoff) * 255;
      //var r = noise(x*0.01, y*0.01);

      noStroke();
      //fill(r);
     
      //Draw grass
      if (r >= 100) {
        fill(0, r, 0);
      }
      //Draw sand
      else if (r < 100 && r > 75) {
        fill(0, r, 40);
      }
      //Draw water
      else if (r <= 75) {
        fill(0, 0, r);
      } 
    
      rect(x * scl, y * scl, scl, scl);

      xoff += inc;
    }
    yoff += inc;
  }
//    noLoop();

}

