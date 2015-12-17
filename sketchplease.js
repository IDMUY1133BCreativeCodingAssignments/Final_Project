var door;
var state=false;

function preload(){
house= loadImage('house.jpg');
    house2=loadImage('house2.jpg');
    /*dadblink=loadAnimation("Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","dad2a.png","dad3a.png","dad4a.png");*/
    
    /*momblink=loadAnimation("mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom2.png","mom3.png","mom2.png");*/
}

function setup(){
createCanvas(800,600);
}

function draw(){
background(255);
    //fill(0);
    //rect(50,50,50,50);
    
    //animation(momblink,width/2,height/2);
   whichOne();
    if(state==true){
		image(house2);
		// depending on the situation, you may want another variable to keep
		// track of state changes
		//lastState = state;  // making lastState = true
		state = false;  // flip state
	}
}

function whichOne(){
	switch(door){
		case 1:
			image(house2);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
		case 2:
			image(house);
			break;

function mousePressed(){
 if(mouseX<width/2){
    door=1
    }
    else{
    door=2
    }
    
    state=true;
}