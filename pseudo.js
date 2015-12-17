var number=1;//number that switches 
var count=1;
var choicemom=1;//number that switches between family
//var state = false;
//var state2 = false;

function preload(){
house=loadImage("house.jpg");
house2=loadImage("house2.jpg");

}

function setup(){
	createCanvas(800,600);

}

function draw(){
   // image(house);
   // if(state=true){
 //door();
 //enterhouse();
 //   }
chooseScene();
    
    if(state==true && mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317 && mouseIsPressed){
		//background(127, 5, 200);
		// depending on the situation, you may want another variable to keep
		// track of state changes
		lastState = state;  // making lastState = true
		state = false;  // flip state

    }

    
    
    //background(255);
    //fill(0);
    //ellipse(50,50,50,50);
        console.log(state);
    }
    
//}

function chooseScene{ //pick which scene 
switch (number){

case 1: 
door();
enterhouse()
break;

case 2:
door();
family();
break;

}
}


function enterhouse(){
switch(count){

    case 1:
        background(255);
        image(house2);
        break;
    case 2:
        background(255);
        image(house);
        break;
    case 3:
        background(0);
      //number=2;
        break;
   
}

}


function family(){
    switch(count){
        case 1: 
            background(255);
            textSize(32);
              fill(0);
            text("will", 50,50);
            break;
        case 2:
             background(255);
             textSize(32);
              fill(0);
            text("this", 50,50);
            break;
        /*case 3:
             textSize(32);
            fill(0);
               text("work", 50,50);
            break;*/
        case 3: 
             background(255);
            count=1;
             number=1;
        
            break;
        
    }
    

//}

function door(){
    if(mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317){
	count=1;
	state=true;
        //  console.log("1");
      
    }
    else{
    count=2;
      	state=true;
       // console.log("2");
     
    }
    if(state=true && mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317 && mouseIsPressed){
    count=3;
    //    number=2;
      state=false;
    }
    

}


function changeFamily(){
if(keyIsPressed===true){
choicemom++;
state2=true;
}


}
        
       