// four mirrors
let video;
let v_x = 320;
let v_y = 240;

function setup() {
  createCanvas(2*v_x, 2*v_y); //canvas
  background(51);
 
  video = createCapture(VIDEO); //camera / video
  video.size(v_x, v_y);
  video.hide(); //hides video 
}
 
function draw() { 
  image(video, 0, 0, v_x, v_y); // 1) original unaltered video
                                //    top left

  push();                       // 2)
  translate(2*v_x,0);           // move to the right
  scale(-1.0,1.0);              // and rotate around the y-axis
  image(video, 0, 0, v_x, v_y); 
  pop(); 

  push();                       // 3)
  translate(0 ,2*v_y);          // move down 
  scale(1.0, -1.0);             // and rotate around the x-axis
  image(video, 0, 0, v_x, v_y); 
  pop();

  push();                       // 4)
  translate(2*v_x, 2*v_y);      // move down and to the right 
  scale(-1.0, -1.0);            // and rotate around the x and y-axixssss
  image(video, 0, 0, v_x, v_y); 
  pop(); 
}