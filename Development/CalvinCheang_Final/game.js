var bool = false;				//initial value set to false because game hasn't started
var part;
var x = 200;
var y = 600;
var guy;
var boss;
var locate, maxSpeed, playerSpeed;

function setup(){
	createCanvas(400,700);
	part = new ParticleSystem(createVector(width/2,height/6));
	guy = new Player();
	boss = new Enemy();
	locate = createVector(width/2, height/2);
	maxSpeed = 3.0;
	playerSpeed = createVector();
}

function draw(){
	background(0);
	title();
	if(bool == true){			//if "Play" has been clicked then game will start
		game();
	}
	
	
	console.log(bool);			//logging the boolean


}

function mouseClicked(){
	if(mouseX < 225 && mouseX > 175 && mouseY < 375 && mouseY > 325){	//if Play is clicked set bool to true
		bool = true;
	}
}

function keyPressed(){
	if(key == "a" || "A"){
			playerSpeed.x = -maxSpeed;
		}
		if(key == "w" || "W"){
			playerSpeed.y = -maxSpeed;
		}
		if(key == "d" || "D"){
			playerSpeed.x = maxSpeed;
		}
		if(key == "s" || "S"){
			playerSpeed.y = maxSpeed;
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
	fill(255,0,0);
	ellipse(location.x,location.y,20,20);
	//guy.display();
	//guy.update();
	boss.display();
	part.addParticle();
	part.run();
}

