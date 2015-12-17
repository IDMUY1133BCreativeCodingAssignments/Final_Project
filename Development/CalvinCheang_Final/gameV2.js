/*
Here are the sources I used:
http://p5play.molleindustria.org/docs/index.html
http://studio.processingtogether.com/sp/pad/export/ro.91kLmk61vAOZp/latest
http://p5play.molleindustria.org/examples/index.html?fileName=asteroids.js
*/



var bullets;
var enemies;
var player;
var bulletImage;
var bool = false;
var dead = false;
var again = false;
var ezmode = false;
var win = false;
var hp=400;
var health;
var ez = 100;
var ezboss = 5;

function setup() {
createCanvas(400,700);

health = new Healthbar();
bulletImage = loadImage("assets/ally bullet.png");    
playerImage = loadImage("assets/player.png");
bossImage = loadImage("assets/boss.png");

player = createSprite(width/2, height/2);
player.maxSpeed = 6;
player.setCollider("circle", 0,0, 5);           //sets the player's hitbox region
//player.debug = true;
player.rotation = 270;

player.addImage("normal", playerImage);         //required for player to display properly

boss = createSprite(width/2, height/6);         //creates giant boss 
boss.addImage(bossImage);
boss.setCollider("circle", 0,0,10);             //needs big hitbox because bullets don't seem to hit all the time
boss.scale = 4;
//boss.debug = true;

enemies = new Group();        //groups are like arrays
bullets = new Group();

for(var i = 0; i<ez; i++) {        //creates number of little monsters that float around
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
  if(dead == true){     //if player has died gameOver will display
    gameOver();
  }
  if(again == true){    //if "Try again" has been clicked browser will refresh
    location.reload();  //refreshing prevents lag
  }
  if(enemies.length < 1){   //if there are no more enemies ensue boss battle
    bossFight();
  }

  if(win == true){    //if the boss has been defeated victory will display
    victory();
  }
  
  //console.log(enemies.length);          //logging how many floating monsters are left
  //console.log("Start: " + bool);      //logging the boolean
  //console.log(mouseIsPressed);
  //console.log(keyIsPressed);
  //console.log(floor(frameRate()));

}

function mouseClicked(){
  if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){ //if Play is clicked set bool to true
    bool = true;
  }
  if(mouseX > 175 && mouseX < 250 && mouseY > 330 && mouseY < 350){ //if Try again is clicked set bool to true
    again = true;
  }

}
function game() {
  background(0,127,255);
  noCursor();
  

  player.position.x = mouseX;   //player uses mouse to control
  player.position.y = mouseY;
  
  for(var i=0; i<enemies.length; i++) {
  var e = enemies[i];                                       //transfer group to array
  if(e.position.x<0) e.position.x = width;     //allows floating monsters to travel all over
  if(e.position.x>width) e.position.x = 0;     //prevents buildup along sides
  if(e.position.y<0) e.position.y = height;
  if(e.position.y>height) e.position.y = 0;
  }
  
  enemies.overlap(bullets, enemyHit);     //allows enemies to be hit
  
  player.overlap(enemies);                

  if(player.overlap(enemies)){            //if player touches an enemy game is over
    console.log("dead: " + dead);
    dead = true;
  }

    player.changeAnimation("normal");     //this needs to be here for player to show up
    
  if(keyDown("f") && frameCount%5==0)     //fire button
    {
    var bullet = createSprite(player.position.x, player.position.y);    //creates bullet at the player
    bullet.addImage(bulletImage);                           
    bullet.setSpeed(10+player.getSpeed(), player.rotation);             //setspeed of bullet
    bullet.life = 100;                                                  //lifespan of bullet; it goes offscreen anyway
    bullets.add(bullet);                                                //add the bullets into an array
    }
  
  drawSprites();    //this needs to be here to have the sprites show up

  health.display();   //health bar 
  
}

function title(){         //orange title screen 
  background(255,127,0);
  fill(255);
  start();
  if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){ //hover effect on play
    textAlign(CENTER);
    fill(0);
    text("Play", width/2, 375);
    
  }

}

function start(){       //Play button
  //rect(175,325,50,50);
  textAlign(CENTER);
  textSize(30);
  text("Press F to fire", width/2, 300);
  text("Play", width/2, 375);
}

function bossFight(){   //boss fight sequence
  boss.overlap(bullets, bossHit);     //allows boss to be hit
  fill(255);
  textSize(20);
  //text(hp, 20,18);
   if(player.overlap(boss)){            //if player touches boss game is over
    console.log("dead: " + dead);
    dead = true;
  }
  
}

function victory(){   //victory screen
  //if(hp==0){
    background(0,0,0,200);
    cursor(ARROW);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("VICTORY", width/2, 300);
    textSize(20);
    text("Try Again", width/2, 350);
    if(mouseX > 160 && mouseX < 250 && mouseY > 330 && mouseY < 350){
    fill(255,0,0);
    text("Try Again", width/2, 350);
  }

  //}
}

function gameOver(){    //game over screen
  // fill(0,0,0,200);
  // rect(0,0,400,700);
  background(0,0,0,200);
  cursor(ARROW);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("Game Over", width/2, 300);
  textSize(20);
  text("Try Again", width/2, 350);
  if(mouseX > 160 && mouseX < 250 && mouseY > 330 && mouseY < 350){
    fill(255,0,0);
    text("Try Again", width/2, 350);
  }
}

function Healthbar(){   //health bar class. doesn't have any properties 

}

Healthbar.prototype.display = function(){   //but it has a display function
  fill(0,204,0);

  console.log("HP: " + hp);   
  rect(0,0,hp,20);
  
}

function createEnemy(type, x, y) {      //creates a floating monster
  var e = createSprite(x, y);
  var img  = loadImage("assets/boss.png");
  e.addImage(img);
  e.setSpeed(2.5-(type/2), random(360));    //allows it to float
  e.rotationSpeed = .5;     //allows it to rotate
  //e.debug = true;
  e.type = type;          //type seems to allow for stages of sprites
  
  e.mass = e.scale;     //idk what this does
  e.setCollider("circle", 0, 0, 10);    //sets hitboxes for floating monsters
  enemies.add(e);     //pushes monsters into group
  return e;
}

function enemyHit(enemy, bullet) {    //allows floating monsters to be hit
var newType = enemy.type-1;

bullet.remove();
enemy.remove();
}

function bossHit(boss, bullet){     //allows boss to be hit
  fill(255);
  bullet.remove();
  hp-=ezboss;
  if(hp<0){
    hp=0;
    boss.remove();
    win = true;
  }
}