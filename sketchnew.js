var count = 0;
var state = false;

function preload(){

}

function setup(){
    	createCanvas(800,600);

}

function draw(){
    background(255);
    /*
whichOne();
    	if(state==true && mouseX > width/2){
		background(127, 5, 200);
            fill(255,0,0);
            rect(400,400,20,20);
		// depending on the situation, you may want another variable to keep
		// track of state changes
		//lastState = state;  // making lastState = true
		state = false;  // flip state
	}
    */
    fill(0);
    ellipse(50,50,50,50);
}

function whichOne(){
    switch(count){
		case 1:
			background(127);
            fill(0)
            ellipse(50,50,50,50);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
		case 2:
			background(255, 0, 0);
              fill(0)
            ellipse(250,50,250,50);
			break;
		case 3:
			background(0, 255, 0);
              fill(0)
            rect(50,50,50,50);
			break;
		case 4:
			background(255);
                fill(0)
            rect(250,50,250,50);
			count = 0;
			break;


}

function keyPressed(){
count++
state=true;

}