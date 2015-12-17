
var font;

var message =  "dream";
var message1 = "friends";
var message2 = "parent's love";
var message3 = "End...";

//KEY CODE BOOLEANS 
var messaging = false;
var messaging2 = false;
var particleB = false;
var particleA = false;
var heartss = false;
var sadheart = false;
var theEnd = false;

var fontsize = 30;
//ANIMATION VARIABLES 
var texting; 
var response; 
var response2;
var books; 
var bookfull;
//IMAGE VARIABLES 
var musicImg2;
var musicImg;
var hu;
var music;
var heart;
var bHeart;

//VARIABLES TO MOVE HEARTS UP AND DOWN THE SCREEN 
var bheartPos = 0;
var heartPos = 500;
var heartSpeed = 1.6;

//PARTICLE VARIABLE 
var system;
//var clock;


function preload(){
	//music = loadSound('assets/music.mp3');
	font = loadFont('font/Minimal.ttf');
	//texting = loadAnimation('texting/1.png', 'texting/20.png');
	//ANIMATION LOADING
	texting = loadAnimation('texting/1.png','texting/2.png','texting/3.png',
		'texting/4.png','texting/5.png','texting/6.png',
		'texting/7.png','texting/8.png','texting/9.png',
		'texting/10.png','texting/11.png','texting/12.png',
		'texting/13.png','texting/14.png','texting/15png',
		'texting/16.png','texting/17.png','texting/18.png',
		'texting/19.png','texting/20.png');
	response = loadAnimation('response/1a.png','response/2a.png','response/3a.png',
							'response/4a.png','response/5a.png','response/6a.png','response/7a.png','response/8a.png');
	response2 = loadAnimation('response2/1b.png','response2/2b.png','response2/3b.png','response2/4b.png','response2/5b.png','response2/6b.png','response2/7b.png','response2/8b.png','response2/9b.png','response2/10b.png','response2/11b.png','response2/12b.png','response2/13b.png','response2/14b.png','response2/15b.png','response2/16b.png','response2/17b.png');
	books = loadAnimation('books/a.png','books/b.png','books/c.png');
	book2 = loadAnimation('books/a.png','books/b.png','books/c.png','books/d.png',
		'books/e.png');
	bookfull = loadAnimation('books/a.png','books/b.png','books/c.png','books/d.png',
		'books/e.png','books/f.png','books/g.png','books/h.png');
	//IMAGE LOADING
	heart = loadImage('assets/heartr.png');
	bHeart = loadImage('assets/bheart.png');
	musicImg2 = loadImage("assets/music2.png");
	musicImg = loadImage("assets/note2.png");
	flatline = loadImage("assets/heartbeat.jpg");	
	//PARENT LOAD
	pMess = "I'M PROUD OF YOU";
	pMessB = "YOU'RE A DISAPPOINTMENT";
	//INTRO PAGE
	introControl = " 1. CONTROL \n 2. ALT \n 3. UP ARROW \n 4. DOWN ARROW \n 5. LEFT ARROW \n 6. RIGHT ARROW \n 7. ENTER";
	system = new MSystem(createVector(width/2,400));


}

function setup(){
	createCanvas(900,700);

	textFont(font,fontsize);
	//music.play();
	

}

function draw(){

//	INTRODUCTION PAGE 
fill(255,10,145);
textFont(font,60);
text("PLEASE PRESS IN THIS ORDER:", 100, 50);
fill(12,234,123);
text(introControl, 20,150);




	//DREAM IS ON
	if(particleB == true){
		  background(255);
		  system.addParticle();
 		  system.run();
 		  image(musicImg2,0,90);
 		  fill(255,221,13);
		  ellipse(100,100,70,70);
		  fill(255,221,13);
		  ellipse(300,200,50,50);
		  fill(255,221,13);
 		  ellipse(500,100,80,80);
 		  fill(255,221,13);
 		  ellipse(700,100,90,90);
 		  //texts above the lights
 		  textFont(font,fontsize);
 		  fill(0);
 		  text(message, 100,80);
 		  text(message1, 300,180);
 		  text(message2, 500,80);
 		  text(message3, 700,80);
 		//  music.play();
	}
	//DREAM IS OFF
	if(particleA == true){
		background(136,138,134);
		fill(0);
		ellipse(100,100,70,70);
		fill(255,221,13);
		ellipse(300,200,50,50);
		fill(255,221,13);
 		ellipse(500,100,80,80);
 		fill(255,221,13);
 		ellipse(700,100,90,90);
 		var x = width/2;
		var y = height/2;
		x+= random(-5,7);
		y+= random(-5,7);
 		image(musicImg,x,y);
 		fill(0);
 	 	text(message1, 300,180);
 		text(message2, 500,80);
 		text(message3, 700,80);
  		frameRate(10);
 		animation(books, 550,height/2);

	}
	//SOCIAL IFE IS ON
	if(messaging == true){
			background(136,138,134);
			fill(0);
			ellipse(100,100,70,70);
			fill(255,221,13);
			ellipse(300,200,50,50);
			fill(255,221,13);
 			ellipse(500,100,80,80);
 			fill(255,221,13);
 			ellipse(700,100,90,90);
 			
			animation(texting, 300,500);
			animation(response, 600,500);
			fill(0);
 	 		text(message1, 300,180);
 			text(message2, 500,80);
 			text(message3, 700,80);
	}
	//SOCIAL LIFE IS OFF
	if(messaging2 == true){
			background(103,105,102);
			fill(0);
			ellipse(100,100,70,70);
			fill(0);
			ellipse(300,200,50,50);
			fill(255,221,13);
 			ellipse(500,100,80,80);
 			fill(255,221,13);
 			ellipse(700,100,90,90);
			animation(texting, 300,500);
			animation(response2, 600,500);
			fill(0);
 			text(message2, 500,80);
 			text(message3, 700,80);
 		 	frameRate(10);
 			animation(book2, 550,height/2);
	}
	//PARENT LIGHT IS ON
	if(heartss == true){
		background(103,105,102);
		fill(0);
		ellipse(100,100,70,70);
		fill(0);
		ellipse(300,200,50,50);
		fill(255,221,13);
 		ellipse(500,100,80,80);
 		fill(255,221,13);
 		ellipse(700,100,90,90);
		heartPos -= heartSpeed;
		image(heart,240,heartPos);
		fill(0);
		stroke(40,40,255);
		textFont(font,40);
		text(pMess,width/2,heartPos);
			fill(0);
 			text(message2, 500,80);
 			text(message3, 700,80);
	}
	//PARENT LIGHT IS OFF
	if(sadheart == true){
		background(75,76,74);
		fill(0);
	    ellipse(100,100,70,70);
		fill(0);
		ellipse(300,200,50,50);
		fill(0);
 		ellipse(500,100,80,80);
 		fill(255,221,13);
 		ellipse(700,100,90,90);
		bheartPos += heartSpeed;
		image(bHeart,240,bheartPos);
		fill(255);
		stroke(255,40,255);
		textFont(font,40);
		text(pMessB,width/2,bheartPos);
		fill(0);
 		text(message3, 700,80);
 		frameRate(10);
 		animation(bookfull, 550,height/2);
	}
	//END LIGHT IS OFF
	if(theEnd == true){
		background(0);
		fill(255);
		text("good bye.", width/2, 100);
		image(flatline,0, 300);
		/*if(music.isPlaying){
			music.stop();
		}
		*/
	}
	}
//KEY CODES TO GO THROUGH THE CODE 
function keyPressed(){
	//DREAM SECTION CONTROLS 
	if(keyCode == CONTROL){
			 particleB = true;

	}
	if(keyCode == ALT){
			particleA = true;
	}
	//SOCIAL LIFE CONTROLS 
	if(keyCode == UP_ARROW){
			messaging = true;
	}
	if(keyCode == DOWN_ARROW){
			messaging2 = true;
	}
	//PARENT CONTROLS
	if(keyCode == LEFT_ARROW){
			heartss = true;
	}
	if(keyCode == RIGHT_ARROW){
			sadheart = true;
	}
	//THE END CONTROL
	if(keyCode == ENTER){
			theEnd = true;
	}
}
//MUSIC NOTES PARTICLE
var Note = function(position) {
  this.acceleration = createVector(0, 0.01);
  this.velocity = createVector(random(-2, 3), random(-2, 3));
  this.position = position.copy();
};
//official run
Note.prototype.run = function() {
  this.update();
  this.display();
};

// update position
Note.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
};

//  display
Note.prototype.display = function() {

  image(musicImg, this.position.x, this.position.y);
};

var MSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

MSystem.prototype.addParticle = function() {
  this.particles.push(new Note(this.origin));
};

MSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();

  }
};