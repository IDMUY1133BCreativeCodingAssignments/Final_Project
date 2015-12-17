var bullets;
var enemies;
var player;
var bulletImage;
var MARGIN = 40;
var bool = false;
var dead = false;
var again = false;

function setup() {
createCanvas(400,700);

bulletImage = loadImage("assets/ally bullet.png");
playerImage = loadImage("assets/player.png");
bossImage = loadImage("assets/boss.png");

player = createSprite(width/2, height/2);
player.maxSpeed = 6;
player.friction = .98;
player.setCollider("circle", 0,0, 5);
//player.debug = true;
player.rotation = 270;

player.addImage("normal", playerImage);

enemies = new Group();
bullets = new Group();

for(var i = 0; i<10; i++) {
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createEnemy(1, px, py);
  }
}

function draw(){
  background(0);
  title();
  if(bool == true){     //if "Play" has been clicked then game will start
    game();

  }
  if(dead == true){
    gameOver();
  }
  if(again == true){
    location.reload();
  }
  if(enemies.length < 1){
    //victory();
  }
  
  //console.log("Start: " + bool);      //logging the boolean
  //console.log(mouseIsPressed);
  //console.log(keyIsPressed);


}

function mouseClicked(){
  if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){ //if Play is clicked set bool to true
    bool = true;
  }
  if(mouseX > 175 && mouseX < 250 && mouseY > 330 && mouseY < 350){
    again = true;
  }

}
function game() {
  background(0,127,255);
  
  

  player.position.x = mouseX;
  player.position.y = mouseY;
  
  for(var i=0; i<enemies.length; i++) {
  var e = enemies[i];
  if(e.position.x<-MARGIN) e.position.x = width+MARGIN;
  if(e.position.x>width+MARGIN) e.position.x = -MARGIN;
  if(e.position.y<-MARGIN) e.position.y = height+MARGIN;
  if(e.position.y>height+MARGIN) e.position.y = -MARGIN;
  }
  
  enemies.overlap(bullets, enemyHit);
  
  player.overlap(enemies);

  if(player.overlap(enemies)){
    console.log("dead: " + dead);
    dead = true;
  }
  
  if(keyDown(LEFT_ARROW))
    player.rotation -= 4;
  if(keyDown(RIGHT_ARROW))
    player.rotation += 4;
  if(keyDown(UP_ARROW))
    player.addSpeed(.2, player.rotation);
  else
    player.changeAnimation("normal");
    
  if(keyDown("x") && frameCount%5==0)
    {
    var bullet = createSprite(player.position.x, player.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10+player.getSpeed(), player.rotation);
    bullet.life = 100;
    bullets.add(bullet);
    }
  
  drawSprites();
  
}

function title(){
  background(255,127,0);
  fill(255);
  start();
  if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){ //hover effect on play
    fill(0);
    start();
    
  }

}

function start(){
  //rect(175,325,50,50);
  textSize(30);
  text("Play", 175, 375);
}

function victory(){
  //if(hp==0){
    fill(0,0,0,200);
    rect(0,0,width,height);
    fill(255);
    textSize(30);
    text("VICTORY", 130, 300);

  //}
}

function gameOver(){
  // fill(0,0,0,200);
  // rect(0,0,400,700);
  background(0,0,0,200);
  fill(255);
  textSize(30);
  text("Game Over", 130, 300);
  textSize(20);
  text("Try Again", 170, 350);
  if(mouseX > 175 && mouseX < 250 && mouseY > 330 && mouseY < 350){
    fill(255,0,0);
    text("Try Again", 170, 350);
  }
}


function createEnemy(type, x, y) {
  var e = createSprite(x, y);
  var img  = loadImage("assets/boss.png");
  e.addImage(img);
  e.setSpeed(2.5-(type/2), random(360));
  e.rotationSpeed = .5;
  //a.debug = true;
  e.type = type;
  
  // if(type == 1)
  //   a.scale = .5;
  
  e.mass = e.scale;
  e.setCollider("circle", 0, 0, 10);
  enemies.add(e);
  return e;
}

function enemyHit(enemy, bullet) {
var newType = enemy.type-1;

bullet.remove();
enemy.remove();
}