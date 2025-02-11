  if (mouseIsPressed === true)
  {toggle = !toggle}
  
  if (toggle === true)
    {background (1, 186, 240)}
  else 
    {background (250, 150, 150)}
  
  background(220);
  
  function setup() {
  createCanvas(800, 300);
  background (1, 186, 240);
}

function draw() {

  
  //declare variables
  var x = mouseX;
  var y = mouseY;
  var size = 20;
  
  //circle
  fill (237, 34, 93, 50);
  noStroke ();
  ellipse (x, y, size, size);
}