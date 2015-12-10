//Ok I'm getting the animations done first since math scares me for this, any tips for the upcoming math-based code?
var hearticon;
var skullicon;
var sfearstart;
var bosstheme;
var sfearx = 300;
var sfeary = 150;
var floatlimit = 170;
var speed = 1;
var speed2 = 15;
var pixel;

function preload(){
  hearticon = loadImage('data/heart.png');
  skullicon = loadImage('data/pixelskull.png');
  sfearstart = loadImage('data/Sfear0001.png'); //yes the boss monster is named "Sfear", genius right?
  bosstheme = loadSound('data/toby fox - UNDERTALE Soundtrack - 87 Hopes and Dreams.mp3');
  pixel = loadFont('data/pixel.otf');
}

function setup(){ //setup is apparently where music comes from
  createCanvas(800,600);
  frameRate(60);
  smooth();
  music();
}

function draw(){
  background(255);
  allthestuffsodrawcanlookniceandclean();
}

function allthestuffsodrawcanlookniceandclean(){
  boss();
  topbox();
  bottombox();
  herohealth();
  bosshp();
  icons();
  keyTyped();
  allthetext();
}

function music(){ //Look up Undertale, it has awesome music! I'll probably have this change to another song after the boss is low on HP.
	bosstheme.setVolume(0.1);
	bosstheme.play();
	bosstheme.loop();
}

function keyTyped(){ //if for some weird reason you have awesome music by toby fox you can click this.
	if(key == 'm' || key == 'M'){
		bosstheme.stop();
	}
}

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
  rect(420, 380, 250, 30);
  noFill();	
  noStroke();
}

function icons(){ //lol these don't change at all.
	image(hearticon, -310, 235);
	image(skullicon, 590, 280);
}

function boss(){ //Ok so I spent forever trying to get him to float, now I can probably do the same for horizontal movement.
	image(sfearstart, sfearx, sfeary);
	 if(sfeary <= floatlimit){
			sfeary += speed;
		}
	if(sfeary >= floatlimit){
			sfeary -= speed2;
		}
		//else{
		//	sfeary = floatdown;
		//}
		//if(sfeary <= 130){
		//	sfeary = sfeary + 1;
		//}
}

function allthetext(){ //So this is where all the text-based code will occur, including the letter-by-letter formation of the code and the number values.
	fill(255);
	textFont(pixel, 30);
	text("SFEAR attacks!", 100, 80);
	//text("40/40") this is what it'll say for the boss's hp, it will be similar for the hero. How would I get the numbers to decrease by "hit", as in how would I change the numbers in text.
}













/*
var rust;
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
}
*/