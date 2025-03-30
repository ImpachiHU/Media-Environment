var words = ["I", "applied", "to", "HU", "in", "2022", "to", "be", "part", "of", "the", "ESPT", "program.", "In", "the", "summer", "of", "2024", "I", "switched", "to", "IMED.", "Now", "I", "am", "writing", "these", "three", "sentences", "as", "part", "of", "my", "school", "assignments."]

var colors = [
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89],
  [22, 64, 52],
  [128, 159, 166],
  [38, 89, 89]
];

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  frameRate(2);
}
function draw() {
  var currentIndex = (frameCount -1) % words.length;
  var currentWord = words[currentIndex];
  var currentColor = colors[currentIndex];
  background(currentColor)
  fill(255);
  textSize(45);
  text(currentWord, width/2, height/2)
}