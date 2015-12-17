var font;
var count =0;


var state = false;
var message =  "dream";
var message1 = "social life";
var message2 = "parent's love";
var message3 = "inspiration";

//dream
var musicNotes; 
var musicImg;
var musicImg2; 
var music; 
//social life
var text; 
var response; 
var response2;
//parents love
var heart; 


function preload(){
	font = loadFont('font/Minimal.ttf');
	//dream
	musicImg = loadImage("assets/note2.png");
	musicImg2 = loadImage("assets/music2.png");
	//music = loadSound("assets/music.mp3");
	//social life
	//text = loadAnimation('texting/1.png','texting/20.png');
	//response = loadAnimation('response/1a.png','response/2a.png','response/3a.png','response/4a.png','response/5a.png','response/6a.png','response/7a.png','response/8a.png');
	//response2 = loadAnimation('response2/1b.png','response2/17b.png');
}

function setup(){
	createCanvas(900, 900);
	//musicNotes = new MusicNSystem(createVector(width/2,400));
	//console.log("case 1");
			
}


function draw(){
	change();
	console.log(count);
	if(state == true && mouseX > width/2){
		background(127, 5, 200);
		state = false;
	}
	
console.log(state);
}


function change(){
	switch(count){

		case 1: //dream
					background(127);

			//background(0);
			///image(musicImg2,0,0);
			//fill(255,221,13);
			//ellipse(100,100,90,90);
			//music.play();
			break;
		//dream OFF 
		/*
		case 2: 
			background(136,138,134);
			fill(136,138,134);
			ellipse(100,100,90,90);
			music.stop();
			break; 
		//social life ON
		case 3: 
			fill(255,221,13);
			ellipse(300,200,90,90);
			background(136,138,134);
			animation(text,200,500);
			break;
		case 4:
			backgrouond(136,138,134);
			animation(response,500,500);
			break;
		//social life OFF
		case 5: 
			background(103,105,102);
			fill(103,105,102);
			ellipse(300,200,90,90);
			animation(text,200,500);
			break;
		case 6:
			background(103,105,102);
			fill(103,105,102);
			ellipse(300,200,90,90);
			animation(response2,500,500);
			break;
		//Parents' love ON
		case 7:
			background(103,105,102);
			fill(255,221,13);
			ellipse(500,100,90,90);
			textFont(font, 100)
			text("We're so proud of You",width/2,height/2);
			console.log("parent");
			break;
		*/

	}
}

function mousePressed(){
	count++; 
	state = true; 
}
