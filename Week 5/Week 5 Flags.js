let myInput
function setup() {
  createCanvas(500, 300);
  myInput = createInput("hello");
  myInput.position(0, (height-25))
}

function draw() {
  background(220);
  
  let msg = myInput.value();
  if (msg === "Congo")
  {  noStroke()
  background(251, 244, 74);
  fill(0, 149, 67);
  triangle(0, 0, width*(2/3), 0, 0, height);
  fill(220, 36, 21);
  triangle(width, 0, width, height, width*(1/3), height);
      }
  else if (msg === "Denmark")
    {
  background(200, 16, 46);
 var Xpos = width*14/37;
  stroke(255, 255, 255);
  strokeWeight(width*4/37);
  line(0, height/2, width, height/2);
  line(Xpos, 0, Xpos, height);
    }
}
