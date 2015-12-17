var count = 1;
//var state = true;
var flip=0;
var number=1;
var choicemom=0;
function preload(){
    
    doorclose = loadSound("close_door_1.mp3");
house=loadImage("house.jpg");
    house2=loadImage("house2.jpg");
    momblink=loadAnimation("mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom2.png", "mom3.png","mom2.png");
    
    dadblink=loadAnimation("Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","dad2a.png","dad3a.png","dad4a.png","dad3a.png","dad2a.png");
    
    broblink=loadAnimation("brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother2.png","brother3.png","brother2.png");
    
    granblink=loadAnimation("gran.png","gran.png","gran.png","gran.png","gran.png","gran1.png","gran2.png","gran3.png","gran2.png");
   // mom=loadImage("mom.png");
}
function setup(){
	createCanvas(800,600);
    frameRate(800);

}

function draw(){
	//var answer = whichOne();
	//console.log(answer);
scene();
   
    //}
	console.log("this is number",number);
    console.log("this is count:",count);
     console.log("this is choicemom:",choicemom);
    /*
     if(state=true && mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317 && mouseIsPressed){
         background(127,5,200);
        //count=3;
        state=false;
    }
    */

	if(state==true && mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317 && mouseIsPressed){
		//background(127, 5, 200);
		// depending on the situation, you may want another variable to keep
		// track of state changes
		lastState = state;  // making lastState = true
		state = false;  // flip state
        
        
        
	}
    
//	console.log(state);


}
function scene(){
switch(number){
		case 1:
        door();
        enterHouse();
        break;
        
        case 2:
        changeFamily();
        fun();
       // number=0
        break;
        
  //  default: background(0);
       // break;
        
}
}


function enterHouse(){
	switch(count){
		case 1:
			background(127);
            image(house);
              textSize(32);
              fill(0);
            text("Click on the door", 450, 100);
            text("to enter.",475,130);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
		case 2:
			background(255, 0, 0);
             image(house2);
             textSize(32);
              fill(0);
            text("Click on the door", 450, 100);
            text("to enter.",475,130);
             
			break;
            
        case 3:
            background(0);
            
            //number=2;
            break;
         //default: background(0);
        
            
	
	}


}

function door(){
    if(mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317){
	count=1;
	state = true;
        //  console.log("1");
        flip=0;
    }
    else{
    count=2;
        state=true;
       // console.log("2");
        flip=0;
    }
    if( state=true&& mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317 && mouseIsPressed){
      count=0;
        number=2;
        state=false;
    }
    if(number==2){
    choicemom=1;
        doorclose.play();
        state2=true;
    }
//console.log(flip);


}
/*
function keyPressed(){
number++;
}
*/
function fun(){
switch(choicemom){
        case 1:
			background(255);
        textSize(32);
              fill(0);
            text("You are home from college", 200, 200);
        text("for your family reunion...", 220, 230);
         text("Let's see who's home!", 220, 330);
        text("Press 1 >>", 420, 580);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
	
            
        case 2:
        background(255);
        animation(momblink,width/2,350);
        textSize(32);
              fill(0);
            text("Your mom", 110, 200);
         text("Press 2 >>", 420, 580);
            
        //choicemom=1;
        //number=1;
            break;
    case 3: background(255);
        animation(dadblink,width/2,260);
        textSize(32);
              fill(0);
            text("Your dad", 110, 200);
         text("Press 3 >>", 420, 580);
        
        break;
        
         case 4: background(255);
        animation(broblink,width/2,260);
        textSize(32);
              fill(0);
            text("Your brother", 110, 200);
         text("Press 4 >>", 420, 580);
        
        break;
        
          case 5: background(255);
        animation(granblink,480,300);
        textSize(32);
              fill(0);
            text("Your grandma", 110, 200);
         text("Press 5 >>", 420, 580);
        
        break;
        
        case 6: background(255);
        
        textSize(32);
              fill(0);
            text("Right now it's 4:00.", 330, 200);
         text("The rest of your crazy family arrives at 6:00.", 150, 260);
        text("Try to escape to your room before they arrive!", 130, 290);
         text("Press Enter >>", 420, 580);
        
        break;
        
    case 7: background(255);
        choicemom=1;
        break;
      //  default: background(0);
      //  break;


}

}


 function changeFamily(){

     if(keyIsPressed && keyCode==49&& state2==true){
choicemom=2;
state2=false;
         state3=true;
  //  console.log("banana");

}
          if(keyIsPressed && keyCode==50 &&state3==true){
choicemom=3;
              state3=false;
state4=true;
   // console.log("banana");

}
     
          if(keyIsPressed && keyCode==51&&state4==true){
choicemom=4;
state4=false;
              state5=true;
   // console.log("banana");

}
     
          if(keyIsPressed && keyCode==52&&state5==true){
choicemom=5;
              state5=false;
state6=true;
             
   // console.log("banana");

}
     if(keyIsPressed && keyCode==53&&state6==true){
choicemom=6;
              state6=false;
state7=true;
             
   // console.log("banana");

}

    }
    
