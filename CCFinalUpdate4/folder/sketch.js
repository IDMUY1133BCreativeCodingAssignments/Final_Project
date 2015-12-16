//Creating animations from sprite sheets

// this is a direct copy from the p5 page i tried to see if i could load the image in here but it didnt work
// the main document isnt in the index because i was testing it


var sprite_sheet;
var straw;
var test
function preload() {
  // specify width and height of each frame and number of frames
  sprite_sheet = loadSpriteSheet("media/spritesheet.png", 153, 208, 5);
  straw = loadAnimation(sprite_sheet);
    test =loadImage("media/spritesheet.png");
  // load the full sprite sheet for example reference only

}

function setup() {
  createCanvas(800, 225);
}

function draw() {
  clear();

  // animate the sprite sheet
  animation(straw, 100, 130);

  // show full sheet for example reference
  image(test, 200, 200);
}