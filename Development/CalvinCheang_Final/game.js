var bool = false;				//initial value set to false because game hasn't started
var part;
var x = 200;
var y = 600;
var guy;
var boss;
var locate, maxSpeed, playerSpeed;
var bullets;
var mouse;
var bullet;
var pos;
var health;
var hp = 400;
var lights;
var count = 0;
var bull;
var circle, player;
var bulletImage;
var ammo;
var checkpoints = [];

function setup(){
	createCanvas(400,700);
	bullet = new Bullet(createVector(100,100), createVector(width/2, height/2));
	part = new ParticleSystem(createVector(width/2,-50));
	guy = new Player();
	boss = new Enemy();
	pos = createVector(width/2, height/2);
	maxSpeed = 3.0;
	playerSpeed = createVector(0.01, 0.1);
	mouse = createVector(mouseX, mouseY);
	health = new Healthbar();
	//a_health = new Lives();
	bullets = new Group();			// group for the bullets
	lights = new Group();
	for(var i=0;i<10;i++){
		createObstacle();	
	}
			


	// for(var i = 0; i<8; i++) {
	//   var ang = random(360);
	//   var px = width/2 + 1000 * cos(radians(ang));
	//   var py = height/2+ 1000 * sin(radians(ang));
	//   createAsteroid(3, px, py);
 //  }

	// circle = createSprite(200,500);
	// circle.addImage(loadImage("assets/chiyo.jpg"));

	bulletImage = loadImage("assets/ally bullet.png");

	player = createSprite(100,100);
	player.addImage(loadImage("assets/player.png"));

	boss = createSprite(width/2, height/6);
	boss.addImage(loadImage("assets/boss.png"));

	



}

function draw(){
	background(0);
	title();
	if(bool == true){			//if "Play" has been clicked then game will start
		game();

	}
	
	
	//console.log("Start: " + bool);			//logging the boolean
	//console.log(mouseIsPressed);
	//console.log(keyIsPressed);


}

function mouseClicked(){
	if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){	//if Play is clicked set bool to true
		bool = true;
	}
	count++;

}

// function keyPressed(){
// 	if(keyCode === LEFT_ARROW){
// 		playerSpeed.x = -maxSpeed;
// 	}
// 	if(keyCode === UP_ARROW){
// 		playerSpeed.y = -maxSpeed;
// 	}
// 	if(keyCode === RIGHT_ARROW){
// 		playerSpeed.x = maxSpeed;
// 	}
// 	if(keyCode === DOWN_ARROW){
// 		playerSpeed.y = maxSpeed;
// 	}
// }

// function keyReleased(){
// 	if(keyCode == UP_ARROW || keyCode == DOWN_ARROW){
// 		playerSpeed.y = 0;
// 	}
// 	if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW){
// 		playerSpeed.x = 0;
// 	}
// }

function title(){
	background(255,127,0);
	fill(255);
	start();
	if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){	//hover effect on play
		fill(0);
		start();
		
	}

}

function start(){
	//rect(175,325,50,50);
	textSize(30);
	text("Play", 175, 375);
}


function game(){
	noCursor();
	background(0,127,255);

	player.position.x = mouseX;
	player.position.y = mouseY;

	pos.add(playerSpeed);
	//confine();
	fill(255,0,0);
	//var player = ellipse(mouseX,mouseY,20,20);
	fill(0,255,0);
	//var boss = ellipse(200,100,20,20);
	//part.addParticle();
	//part.run();
	// guy.display();
	// guy.update();
	//boss.display();
	health.display();
	//createObstacle;
	//a_health.display();
	victory();
 	lights.overlap(bullets, bossHit);


	if(keyDown('x') && frameCount%5==0){											//keyWentDown --> press key once; keyDown --> hold key
		var ammo = createSprite(player.position.x, player.position.y - 20);	//create bullet at player location
		ammo.addImage(bulletImage);				
		ammo.setSpeed(10+player.getSpeed(), 270);						//setspeed of bullet
		ammo.life = 30;												
		bullets.add(ammo);											//add more bullets to group



	}

	// for(var i = 0; i < 10; i++){
	// 	checkpoints.push(bulletImage);
	// }
	// if(mouseX > 300){
	// 	hp-=5;
	// 	if(hp<0){
	// 		hp=0;
	// 	}
	// }




	// if(box.overlap(circle))
	// 	lose();
		
	// function lose(){
	// 	fill(0,0,0,200);
	// 	rect(0,0,width, height);
	// 	fill(255);
	// 	textSize(30);
	// 	text("DEFEAT", 130, 300);
	// }
		
	
	
	// console.log(count);
	// switch(count){
	// 	case 1: 
	// 		fill(255);
	// 		ellipse(100,200, 10, 10);
	// 		break;
	// 	case 2:
	// 		fill(255);
	// 		ellipse(300,400, 10, 10);
	// 		break;
	// }
	// if (frameCount%5==0 && mouseIsPressed) {
	// 	console.log(mouseIsPressed);
 //    	var dir = p5.Vector.sub(mouse, pos);   //
 //    	dir.normalize();//
 //    	dir.mult(maxSpeed*3);
 //    	var b = new Bullet(pos, dir);
 //    	bullets.push(b);

 //    	for (var i = 0; i < bullets.length; i++) {
 //    		b.update();
 //    		b.display();

 //  		}
    
 //  }
 
  drawSprites();

}

function Healthbar(){

}

Healthbar.prototype.display = function(){
	fill(0,204,0);

	console.log("HP: " + hp);
	rect(0,0,hp,20);
	if(mouseIsPressed){
		hp-=5;
		if(hp<0){
			hp=0;
		}
	}
}

// function confine(){
// 	if(pos.y > height){
// 		pos.y = height;
// 	}else if(pos.y < 0){
// 		pos.y = 0;
// 	}else if(pos.x > width){
// 		pos.x = width;
// 	}else if(pos.x < 0){
// 		pos.x = 0;
// 	}
// }

// function Lives(){

// }

// Lives.prototype.display = function(){
// 	var hearts = [5];

// 	for(var i = 0; i < hearts.length; i++){
// 		fill(255,100,50);
// 		ellipse(10, 690, 10, 10);
// 	}
// }

function victory(){
	if(hp==0){
		fill(0,0,0,200);
		rect(0,0,width,height);
		fill(255);
		textSize(30);
		text("VICTORY", 130, 300);

	}
}

function createObstacle(type) {
	for(var i = 0; i < 10; i++){
  var a = createSprite(width/2, height/6);
  var img  = loadImage("assets/boss.png");
  a.addImage(img);
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = .5;
  a.debug = true;
  a.type = type;
  
  if(type == 2)
    a.scale = .6;
  if(type == 1)
    a.scale = .3;
  
  a.mass = 2+a.scale;
  a.setCollider("circle", 0, 0, 50);
  lights.add(a);
  return a;
}
}

function bossHit(asteroid, ammo) {
//boss.scale = .9;

for(var i=0; i<10; i++) {
  var p = createSprite(ammo.position.x, ammo.position.y);
  p.addImage(loadImage("assets/ally bullet.png"));
  p.setSpeed(random(3,5), random(360));
  p.friction = 0.95;
  p.life = 15;
  }

ammo.remove();
asteroid.remove();
hp-=5;
}

// function gameOver(){
// 	if(part.)
// }

