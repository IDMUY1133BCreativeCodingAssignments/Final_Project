//The Nature of Code by Daniel Shiffman - http://natureofcode.com
//Ok I'm getting the animations done first since math scares me for this, any tips for the upcoming math-based code?
//on line 70 is my primary problem with the boss health
var hearticon; //heart
var skullicon; //skull
var battlebackground; //trippy background
var sfearstart; //the first stage of the boss
var sfearpissed; //the 2nd phase of the boss
var bosstheme; //unused other music
var sfearx = 300; //boss's x position
var sfeary = 150; //boss's y position
var floatlimit = 270; // what keeps the boss moving up and down
var speed = 1; //boss's vertical speed
var speed2 = 15; //boss's other vertical speed
var pixel; //pixel font
var bosshploss = 0; //gray "health loss" bar
var bhealth = "10/10"; //numerical boss hp value
var yourhp = "10/10"; //numerical hero hp value
var opening = "SFEAR attacks!"; //first text before battle
var pressthistofight = "Press 'z' to battle!" //instructions to start battle text
var fight = "FIGHT"; //access to fight command text
var magic = "MAGIC"; //access to magic command text
var item = "ITEM"; //access to items text
var position; //horizontal positioning
var velocity; //horizontal speed
var acceleration; //what keeps him moving side to side consistently
var theme2; //other unused theme
var asgore1; //current boss theme
var asgore2; //2nd phase current boss theme
var battle = false; //battle start detector boolean
var backdrop = 255; //background variable
var fightx; //distance from FIGHT needed to click to activate
var magicx; //distance from MAGIC needed to click to activate
var itemx; //distance from ITEM needed to click to activate
var fightcolor = 255; //text color
var magiccolor = 255; //text color
var itemcolor = 255; //text color
var fightdetector1 = false;
var fightdetector2 = false;

function preload(){
  hearticon = loadImage('data/heart.png');
  skullicon = loadImage('data/pixelskull.png');
  battlebackground = loadImage('data/Sfearbattle.png');
  sfearstart = loadAnimation("data/Sfear0001.png"); //yes the boss monster is named "Sfear", genius right?
  bosstheme = loadSound('data/toby fox - UNDERTALE Soundtrack - 79 Your Best Nightmare.mp3');
  pixel = loadFont('data/pixel.otf');
  theme2 = loadSound('data/toby fox - UNDERTALE Soundtrack - 80 Finale.mp3');
  asgore1 = loadSound('data/toby fox - UNDERTALE Soundtrack - 76 Bergentrückung.mp3');
  asgore2 = loadSound('data/toby fox - UNDERTALE Soundtrack - 77 ASGORE.mp3');
  sfearpissed = loadAnimation('data/Sfear0001.png', 'data/Sfear0010.png');
}

function setup(){ //setup is apparently where music comes from
  createCanvas(800,600);
  frameRate(60);
  smooth();
  keyTyped();
  music();
  position = createVector(-100, 0);
  velocity = createVector(1, 0);
  acceleration = createVector(1, 0);
}

function draw(){
  background(battlebackground);
  fightoption();
  allthestuffsodrawcanlookniceandclean();
  if(fightdetector1 = true){
  	if(mouseIsPressed){
  		bhealth = "8/10"; //I have a problem here, when I click the health just skips to 8/10 instead of going to 9/10 first.
  		bosshploss = 50; // (read above first) I assume that when mouse is pressed, it simultaneously triggers the 9 and 8hp. Any tips for this problem?
  		fightdetector2 = true;
  	}//mouseIsPressed
  }//fightdetector1 is true
   if(fightdetector2 = true){
  	if(mouseIsPressed){
      fightcolor = 255;
  		bhealth = "7/10";
  		bosshploss = 75;
  		sfearstart = sfearpissed;
  		sfearpissed.looping = false;
  		//if(sfearpissed.getFrame() == sfearpissed.getLastFrame()){
		//sfearpissed.stop();
		//}//animation stop
  	}//mouseIsPressed
  }//fightdetector1 is true
}

function allthestuffsodrawcanlookniceandclean(){
  boss();
  bossmoving();
  topbox();
  bottombox();
  herohealth();
  bosshp();
  icons();
  allthetext();
}

function fightoption(){
  fill(255, 0);
  fightx = dist(mouseX, mouseY, 205, 85);
  if(mouseIsPressed){
  	if(fightx < 110){
  	fightcolor = 100;
  	fightdetector1 = true;
  	bosshploss = 25; //"lower" the boss's visual health
	bhealth = "9/10"; //lower the boss's numerical health
  	} //FIGHT input on menu
  }//if the mouse is pressed
}//fightoption

function bossmoving(){
  acceleration.add(0.2);
  velocity.add(acceleration);
  position.add(velocity);
  acceleration.mult(0);
      if (position.x > 530) { //so Sfear stays near the middle area of the screen
      position.x = 530;
      velocity.x *= -1;  // moves left!
    } else if (position.x < 170) {
      velocity.x *= -1; //moves right!
      constrain(velocity, 0, 5);
      position.x = 170;
    }
}

function music(){ //Look up Undertale, it has awesome music! I'll probably have this change to another song after the boss is low on HP.
	asgore1.setVolume(0.2);
	asgore1.play();
	asgore1.loop();
}//music

function keyTyped(){ 
	if(key == 'm' || key == 'M'){//if for some weird reason you hate awesome music you can click this.
		asgore1.stop();
		asgore2.stop();
	}//press "m" to mute the music
	if(key == 'z' || key == 'Z'){//starts the fight
		opening = ' ';
		pressthistofight = ' ';
		asgore1.stop();
		asgore2.setVolume(0.2);
		asgore2.play();
		asgore2.loop();
		backdrop = battlebackground;
		battle = true;
		}//if "Z" is pressed, the fight begins!
}//keyTyped

function topbox(){
  fill(0);
  strokeWeight(3);
  stroke(200);
  rect(50, 25, 700, 125);
  noFill();
}

function bottombox(){//I might change the stroke color of the boxes if the hero is at low HP
  fill(0);
  strokeWeight(3);
  stroke(200);  
  rect(50, 425, 700, 150);
  noFill();
}

function herohealth(){//same as bosshp conceptually
  fill(255, 0, 0);
  noStroke();
  rect(125, 475, 350, 40);
  noFill();
}

function bosshp(){ //I'll probably make a black rectangle to cover up the red one for decreasing HP, no big deal here.
  fill(255, 0, 0);
  strokeWeight(2);
  stroke(0);
  rect(420, 380, 240, 30);
  fill(100);
  rect(420, 380, bosshploss, 30);
  //bosshploss = bosshploss + 10;
  if(bosshploss >= 250){
  	bosshploss = bosshploss - 10;
  }
  noFill();	
  noStroke();
}

function icons(){ //lol these don't change at all.
	image(hearticon, -310, 235);
	image(skullicon, 590, 280);
}

function boss(){ //Ok so I spent forever trying to get him to float, now I can probably do the same for horizontal movement.
	animation(sfearstart, position.x, sfeary);
	 if(sfeary <= floatlimit){ //these 2 if statements move Sfear up and down
			sfeary += speed;
		}//if
	if(sfeary >= floatlimit){
			sfeary -= speed2;
		}//if
}//boss

function allthetext(){ //So this is where all the text-based code will occur, including the letter-by-letter formation of the code and the number values.
	fill(255);
	textFont(pixel, 20);
	text(pressthistofight, 100, 120);
	textFont(pixel, 30);
	text(opening, 100, 80);
	if(battle == true){
		textFont(pixel, 30);
	fill(fightcolor);
		text(fight, 150, 90);
	fill(magiccolor);
		text(magic, 350, 90);
	fill(itemcolor);
		text(item, 550, 90);
	}
	text(yourhp, 120, 463);
	text(bhealth, 300, 405); //this is what it'll say for the boss's hp, it will be similar for the hero. How would I get the numbers to decrease by "hit", as in how would I change the numbers in text.
}

//use this for animation reference later on
//  if(explode.getFrame()==explode.getLastFrame())
//  explode.stop();

  //pos.add(bossspeed);
  //pos.x++;
  //if(pos.x > (windowWidth)){
  	//bossspeed.x = bossspeed.x * -1;
  	//pos.x = 0;
  //}
  //bossspeed.x = movingboss;
	/*if(pos.x >= 400){
		bossspeed.x = bossspeed.x - movingboss;
	}
	//if(pos.x > 401){
	//	pos.x = 400;
	//}
	if(pos.x <= 200){
		bossspeed.x = bossspeed + movingboss;
	}
	//var pos = constrain(pos.x, 200, 400);
	*/
  	//pos = createVector(300, 150);
  	//movingboss = 1.0;
  	//bossspeed = createVector();

/*var rust;
var script;
var font1;
var myString;
var x = 0;
var framecount = 0;
function preload(){
	rust = loadFont('data/NexaRustHandmade.otf');
	script = loadFont("data/NexaRustScriptL.otf");
	font1 = loadFont("data/font1.otf");
}
function setup(){
	frameRate(60);
	createCanvas(800, 800);	
	myString = "Messages from a far, coming to you tonight in your home";
}
function draw(){
	background(255);
	if(framecount<30){
		fill(0);
		textFont(rust, 48);
	}
	else {
		fill(40, 189, 175);
		noStroke();
		textFont(script, 14);
	}
	text("Once upon a time, far far away...", 200, 200);
	noFill();
	stroke(40, 189, 175);
	strokeWeight(2);  //.textSize(52);
	textFont(font1, 82);
	text("One potato, two potato...", 150, 600);
	//text(myString, x, 400);
	fill(0);
	textFont(script, 25);
	text("itty bitty spider", 50, 100);
	textFont(rust, 36);
	fill(50, 200, 5);
	text(myString, x, 300);
	x = x - 5;
	if( x < -myString.length ){  // 1200
		x = width;
	}
	//console.log(x);
	framecount = (framecount+1) % 60
}*/