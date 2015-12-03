PImage ship;

void setup() {
  size(800, 800);
  ship = loadImage("Ship1.png");
}




void draw() {
  background(255);
  image(ship, mouseX, mouseY);
}