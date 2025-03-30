var sizes = [];

function setup() {
  createCanvas(800, 300);
  frameRate(4);
  for(var i = 0; i < 100; i = i + 1){
    sizes.push(random(5, 300));
  }
}

function draw() {
  background(220);
  noFill();
  strokeWeight(2);
  
  for(var i = 0; i < sizes.length; i = i + 1) {
      circle(width/2, height/2, sizes[i]) 
  }

}