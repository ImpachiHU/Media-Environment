  let  clickCount = 0

function setup() {
  createCanvas(800, 600);
  
  //setup idk button
  let idkButton;
  idkButton = createButton('IDK');
  idkButton.size(100, 50);
  idkButton.position(width/2, height/2);
  idkButton.mousePressed(mouseClicked);

  //setup duzz button
  let duzzButton;
  duzzButton = createButton('Are we deaduzz?');
  duzzButton.size(100, 50);
  duzzButton.position(275, 300);
  duzzButton.mousePressed(mouseClicked);
  
  //setup indus button
  let indusButton;
  indusButton = createButton('The Industrial Revolution...');
  indusButton.size(100, 50);
  indusButton.position(275, 400);
  indusButton.mousePressed(mouseClicked);

  
  //setup perch button
  let perchButton;
  perchButton = createButton('Perchance click elsewhere?');
  perchButton.size(100, 50);
  perchButton.position(400, 400);
  perchButton.mousePressed(mouseClicked);

  //setup idk button
  let yeetButton;
  yeetButton = createButton('Yeet');
  yeetButton.size(100, 50);
  yeetButton.position(150, 300);
  yeetButton.mousePressed(mouseClicked);

  //setup duzz button
  let gamButton;
  gamButton = createButton('Gambling!');
  gamButton.size(100, 50);
  gamButton.position(525, 300);
  gamButton.mousePressed(mouseClicked);
  
  //setup indus button
  let momButton;
  momButton = createButton('Your mom');
  momButton.size(100, 50);
  momButton.position(150, 400);
  momButton.mousePressed(mouseClicked);

  
  //setup perch button
  let nfsButton;
  nfsButton = createButton('NFS Unbound is a good game');
  nfsButton.size(100, 50);
  nfsButton.position(525, 400);
  nfsButton.mousePressed(mouseClicked);

}

function draw() {
  background(220);
  text('What am I thinking about?', 400, 200);
  textAlign(CENTER, CENTER);
  textSize(32)
  
  //Click Count
  text(clickCount, 150, 550);
  
   push()
  if(mouseIsPressed){
    text('LOL Wrong', 400, 100);
    textAlign(CENTER, CENTER);
    textSize(48);
  pop()
  }
}

function mouseClicked(){
  clickCount++;
}