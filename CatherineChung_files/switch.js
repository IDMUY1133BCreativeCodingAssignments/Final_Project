var count = 0;
var state = false;

var text;
var response;
var musicImg2; 

function preload(){
	font = loadFont('font/Minimal.ttf');
	//dream
	musicImg = loadImage("assets/note2.png");
	musicImg2 = loadImage("assets/music2.png");

	text = loadAnimation('texting/1.png','texting/20.png');
	response = loadAnimation('response/1a.png','response/2a.png','response/3a.png','response/4a.png','response/5a.png','response/6a.png','response/7a.png','response/8a.png');
}

function setup(){
	createCanvas(800,600);

}

function draw(){
	//var answer = whichOne();
	//console.log(answer);
	whichOne();
	console.log(count);

	if(state==true && mouseX > width/2){
		background(127, 5, 200);
		// depending on the situation, you may want another variable to keep
		// track of state changes
		//lastState = state;  // making lastState = true
		state = false;  // flip state
	}
	console.log(state);


}

function whichOne(){
	switch(count){
		case 1:
			//background(127);
			fill(255,221,13);
			ellipse(100,100,90,90);

			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
		case 2:
			//background(255, 0, 0);
			image(musicImg2,30,30);

			break;
		case 3:
			background(0, 255, 0);
			break;
		case 4:
			background(255);
			count = 0;
			break;
	}


}

function mousePressed(){
	count++;
	state = true;
}

