// Flag of Denmark

var canW = 370 //canvas width
var canH = 240 //canvas height

function setup() {
  createCanvas(canW, canH);
  background(200, 16, 46);
}

function draw() {
  var Xpos = canW*14/37
  stroke(255, 255, 255)
  strokeWeight(canW*4/37)
  line(0, canH/2, canW, canH/2)
  line(Xpos, 0, Xpos, canH)
}

// Flag of Congo

var canW = 300 //canvas width
var canH = 200 //canvas height

function setup() {
  createCanvas(canW, canH);
  background(251, 244, 74);
}

function draw() {
  noStroke()
  fill(0, 149, 67)
  triangle(0, 0, canW*(2/3), 0, 0, canH)
  fill(220, 36, 21)
  triangle(canW, 0, canW, canH, canW*(1/3), canH)
}
