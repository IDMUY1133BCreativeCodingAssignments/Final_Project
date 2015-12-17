var door=0;
var state=false;

function preload(){
house= loadImage('house.jpg');
    house2=loadImage('house2.jpg');

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
    if(state==true && mouseX > width/2){
		background(127, 5, 200);
		// depending on the situation, you may want another variable to keep
		// track of state changes
		//lastState = state;  // making lastState = true
		state = false;  // flip state
	}
}

function whichOne(){
	switch(door){
		case 1:
			background(0);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
		case 2:
			background(255);
			break;
    }

function mousePressed(){
 if(mouseX<width/2){
   door++;
     state=true;
 }
}