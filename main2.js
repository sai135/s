img = "";
function preload(){
  img = loadImage("tvac.jpg");
}
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}
function draw() {
  image(img, 0, 0, 640, 420);
  fill("#1d821a");
  text("TV", 250, 200);
  noFill();
  stroke("#1d821a");
  rect(250, 180, 260, 150 );
  fill("#1d821a");
  text("AC", 250, 20);
  noFill();
  stroke("#1d821a");
  rect(250, 5, 270, 120 );
}