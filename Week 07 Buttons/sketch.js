bgColor = 220;
var sizeX = 30;
var sizeY = 30

function setup() {
  createCanvas(500, 400);
  background(bgColor);
  
  //setup red button
  let redButton;
  redButton = createButton('Red');
  redButton.size(100, 50);
  redButton.position(10, 10);
  redButton.style('background: red');
  redButton.mousePressed(changeRed);

  //setup blue button
  let blueButton;
  blueButton = createButton('Blue');
  blueButton.size(100, 50);
  blueButton.position(10, 70);
  blueButton.style('background: blue');
  blueButton.mousePressed(changeBlue);
  
  //setup eraser
  let clearButton;
  clearButton = createButton('Erase');
  clearButton.size(100, 50);
  clearButton.position(10, 130);
  clearButton.style('background: white');
  clearButton.mousePressed(changeClear);


  //setup reset
  let resetButton;
  resetButton = createButton('Reset');
  resetButton.size(100, 50);
  resetButton.position(10, 190);
  resetButton.style('background: bgColor');
  resetButton.mousePressed(changeReset);
  
  //setup reset
  let smallButton;
  smallButton = createButton('Small');
  smallButton.size(100, 50);
  smallButton.position(10, 250);
  smallButton.style('background: bgColor');
  smallButton.mousePressed(sizeSmall);
  
  //setup reset
  let bigButton;
  bigButton = createButton('Big');
  bigButton.size(100, 50);
  bigButton.position(10, 310);
  bigButton.style('background: bgColor');
  bigButton.mousePressed(sizeBig);
  
}

function changeRed(){
  fill('Red')
}

function changeBlue(){
  fill('Blue')
}

function changeClear(){
  fill(bgColor)
}

function changeReset(){
  background(bgColor)
}

function sizeSmall(){
  sizeX = 10;
  sizeY = 10
}

function sizeBig(){
  sizeX = 100;
  sizeY = 100
}

function draw() {
  noStroke();
  if (mouseIsPressed){
  ellipse(mouseX, mouseY, sizeX, sizeY)
}
}