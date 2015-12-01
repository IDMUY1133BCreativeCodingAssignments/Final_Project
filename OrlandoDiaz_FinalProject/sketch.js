var hearticon;
var skullicon;

function preload(){
  hearticon = loadImage('data/heart.png');
  skullicon = loadImage('data/pixelskull.png');

}

function setup(){
  createCanvas(800,600);
  smooth();
}

function draw(){
  background(255);

  boss();
  topbox();
  bottombox();
  herohealth();
  bosshp();
  icons();

}

function topbox(){
  fill(0);
  strokeWeight(3);
  stroke(200);
  rect(50, 25, 700, 125);
  noFill();
}

function bottombox(){
  fill(0);
  strokeWeight(3);
  stroke(200);  
  rect(50, 425, 700, 150);
  noFill();
}

function herohealth(){
  fill(255, 0, 0);
  noStroke();
  rect(125, 475, 350, 40);
  noFill();
}

function bosshp(){
  fill(255, 0, 0);
  strokeWeight(2);
  stroke(0);
  rect(520, 380, 225, 30);
  noFill();	
  noStroke();
}

function icons(){
	image(hearticon, -310, 235);
	image(skullicon, 350, 280);
}

function boss(){
  fill(0);
  ellipse(400,275,200,200);
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