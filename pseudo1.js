var number=1;
var count=2;
var choice=1;

function preload(){
house=loadImage("house.jpg");
house2=loadImage("house2.jpg");

}

function setup(){
	createCanvas(800,600);

}

function draw(){
    numb();
chooseScene();

}

function chooseScene{ //pick which scene 
switch (number){

case 1: 
door();
enterhouse()
break;

case 2:
changeFamily();
family();
break;

}
}

function numb(){
if(state1==true && mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317 && mouseIsPressed){
number=2;
}
    if(state2==true&&keyIsPressed===true){
    number=1;
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
    }


}
function door(){
    if(mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317){
	count=1;
	state1=true;
        //  console.log("1");
      
    }
    else{
    count=2;
      	state1=true;
       // console.log("2");
     
    }

}

function family(){
switch(choice){
    case 1: 
        background(255,0,0);
        
        break;
    case 2: 
        background(0,255,0);
        break;
          
    case 3: 
    
        background(0,0,255);
        break;
        

}

}

fucntion changeFamily(){
if(mouseX<50){
choice=1
state2=true;
}
if(mouseX>50 && mouseX< 250){
choice=2
state2=true;
}
    if(mouseX>250){
choice=3
state2=true;
}
}