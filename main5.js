img = "";
function preload(){
  img = loadImage("basket.jpg");
}
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}
function draw() {
  image(img, 0, 0, 640, 420);
  fill("#ffff00");
  text("Bowl", 120, 315);
  noFill();
  stroke("#ffff00");
  rect(110, 300, 430, 115 );

  fill("#ffff00");
  text("Banana", 255, 20);
  noFill();
  stroke("#ffff00");
  rect(245, 5, 230, 155 );

  fill("#ffff00");
  text("Pineapple", 320, 130);
  noFill();
  stroke("#ffff00");
  rect(315, 110, 220, 185 );
}