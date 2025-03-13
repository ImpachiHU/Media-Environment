var bill
var perc


function setup() {
  createCanvas(800, 500);
  
bill = createInput("Enter bill amount")
bill.position(100, 100)
bill.size(150, 50)
  
  //basic button
button = createButton('Calculate')
button.position(100, 200)
button.size()
  //when pressed, run a function
button.mousePressed(function(){tipCalc()});
  
  //basic button
button = createButton('Clear')
button.position(100, 250)
button.size()
  //when pressed, run a function
button.mousePressed(function(){reset()});  

perc = createInput("Enter tip amount")
perc.position(300, 100)
perc.size(150, 50)
  
}

function tipCalc(){
  tipAmt = bill.value() * perc.value() * 0.01
  textSize(24)
  text(tipAmt, 500, 100)
}

function reset(){
  clear()
}