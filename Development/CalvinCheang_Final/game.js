var bool = false;				//initial value set to false because game hasn't started
var part;
var x = 200;
var y = 600;
var guy;
var boss;
var locate, maxSpeed, playerSpeed;
var bullets = [];
var mouse;
var bullet;
var pos;


function setup(){
	createCanvas(400,700);
	bullet = new Bullet(createVector(100,100), createVector(width/2, height/2));
	part = new ParticleSystem(createVector(width/2,height/6));
	guy = new Player();
	boss = new Enemy();
	pos = createVector(width/2, height/2);
	maxSpeed = 3.0;
	playerSpeed = createVector();
	mouse = createVector(mouseX, mouseY);

}

function draw(){
	background(0);
	title();
	if(bool == true){			//if "Play" has been clicked then game will start
		game();

	}
	
	
	console.log("Start: " + bool);			//logging the boolean
	//console.log(mouseIsPressed);
	//console.log(keyIsPressed);


}

function mouseClicked(){
	if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){	//if Play is clicked set bool to true
		bool = true;
	}

}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		playerSpeed.x = -maxSpeed;
	}
	if(keyCode === UP_ARROW){
		playerSpeed.y = -maxSpeed;
	}
	if(keyCode === RIGHT_ARROW){
		playerSpeed.x = maxSpeed;
	}
	if(keyCode === DOWN_ARROW){
		playerSpeed.y = maxSpeed;
	}
}

function keyReleased(){
	if(keyCode == UP_ARROW || keyCode == DOWN_ARROW){
		playerSpeed.y = 0;
	}
	if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW){
		playerSpeed.x = 0;
	}
}

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
	background(0,127,255);
	pos.add(playerSpeed);
	fill(255,0,0);
	ellipse(pos.x,pos.y,20,20);
	// guy.display();
	// guy.update();
	boss.display();

	if (mouseIsPressed) {
	console.log(mouseIsPressed);
    var dir = createVector().sub(mouse, pos);
    dir.normalize();
    dir.mult(maxSpeed*3);
    var b = new Bullet(pos, dir);
    bullets.push(b);

    for (var i = 0; i < bullets.length; i++) {
    b.update();
    b.display();


  	}
    
  }
 
  
	// part.addParticle();
	// part.run();
}

