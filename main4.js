img = "";
function preload(){
  img = loadImage("bottles.jpg");
}
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}
function draw() {
  image(img, 0, 0, 640, 420);
  fill("#d115be");
  text("Bottle", 15, 15);
  noFill();
  stroke("#d115be");
  rect(10, 3, 80, 410 );

  fill("#d115be");
  text("Bottle", 120, 15);
  noFill();
  stroke("#d115be");
  rect(115, 3, 80, 410 );

  fill("#d115be");
  text("Bottle", 230, 15);
  noFill();
  stroke("#d115be");
  rect(225, 3, 80, 410 );

  fill("#d115be");
  text("Bottle", 340, 15);
  noFill();
  stroke("#d115be");
  rect(335, 3, 80, 410 );

  fill("#d115be");
  text("Bottle", 450, 15);
  noFill();
  stroke("#d115be");
  rect(445, 3, 80, 410 );

  fill("#d115be");
  text("Bottle", 560, 15);
  noFill();
  stroke("#d115be");
  rect(555, 3, 80, 410 );
}