function setup(){
createCanvas(800,600);
}

function draw(){
background(255);
   whichOne();
    
}

function whichOne(){
	switch(door){
		case 1:
			background(255,0,0);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
		case 2:
			background(255);
			break;
    }

function mousePressed(){
 if(mouseX<width/2){
    door=1
    }
    else{
    door=2
    }
    
}