var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  background(20, 40, 222);

  fill(54, 45, 145, 150);
  ellipse(x,y, 64, 64);


  stroke(255);
  noFill();
  beginShape();

  var xoff = start;

  for (var x = 0; x < width; x++ ) {
    stroke(255);

    //var y = random(height);
    var y = height*noise(xoff);
    //var y = height*sin(xoff)/2 + height/2;
    //var y = noise(xoff)*100 + height*sin(xoff)/2 + height/2;
   
   // var n = map(noise(xoff), 0, 1, -50, 50);
   // var s = map(sin(xoff), -1, 1,0, height );
    //y = n + s;
    
    vertex(x, y);
    xoff += inc; //0.01; //inc;
  }

  endShape();
  
  start+=inc;
 
  //noLoop();
}
