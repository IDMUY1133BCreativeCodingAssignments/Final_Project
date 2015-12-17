var score=0;
var count = 1;
//var state = true;
var flip=0;
var number=1;
var next=0;
function preload(){
    
    doorclose = loadSound("close_door_1.mp3");//when door opened, sound plays
house=loadImage("house.jpg");//door touched
    house2=loadImage("house2.jpg");//door not touched
  
    //mom intro
    momblink=loadAnimation("mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom1.png","mom2.png", "mom3.png","mom2.png");
     
  //dad intro  
    dadblink=loadAnimation("Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","dad2a.png","dad3a.png","dad4a.png","dad3a.png","dad2a.png");
    
//bro intro     
    broblink=loadAnimation("brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother2.png","brother3.png","brother2.png");
    
   //gran intro
    granblink=loadAnimation("gran.png","gran.png","gran.png","gran.png","gran.png","gran1.png","gran2.png","gran3.png","gran2.png");
   // mom=loadImage("mom.png");
    
   
//uncle intro  
    uncleblink=loadAnimation("uncle1.png","uncle2.png","uncle2.png","uncle2.png","uncle1.png","uncle3.png","uncle3.png","uncle3.png");
    
   //mom obstacle 
    momtater=loadAnimation("mompot1.png","mompot2.png","mompot3.png","mompot2.png","mompot1.png","mompot1.png","mompot1.png","mompot1.png","mompot1.png");
    
    //peel potato
    peel=loadAnimation("pot1.png","pot2.png","pot3.png","pot4.png","pot4.png","pot4.png","pot4.png","pot4.png");

//angry mom
    
madmom=loadAnimation("momangry.png","momangryb.png","momangry1.png","momangry2.png", "momangry3.png","momagnry5.png");
    
    dadvideo=loadAnimation("dadtape1.png","dadtape2.png","dadtape3.png","dadtape2.png","dadtape1.png","dadtape1.png","dadtape1.png","dadtape1.png","dadtape1.png");
    
    saddad=loadAnimation("saddad1.png","saddad1a.png","saddad2.png","saddad3.png","saddad4.png");
    
    baby=loadAnimation("baby1.png","baby2.png","baby3.png","baby4.png");
    couch=loadAnimation("couch1.png","couch2.png","couch3.png","couch4.png","couch3.png","couch2.png","couch1.png","couch1.png","couch1.png","couch1.png","couch1.png","couch1.png");
    
    music=loadAnimation("notes.png","notes2.png","notes3.png","notes5.png");


momstair=loadAnimation("erpples1.png","erpples2.png","erpples3.png","erpples2.png","erpples1.png","erpples1.png","erpples1.png","erpples1.png","erpples1.png","erpples1.png");
    
    sweater=loadAnimation("sweater1.png","sweater2.png","sweater3.png","sweater4.png","sweater3.png","sweater2.png");
    
    blur=loadAnimation("grammy3.png","grammy3.png","grammy3.png","grammy2.png","grammy1a.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png","grammy1.png");
    
    hooray=loadAnimation("hooray1.png","hooray2.png","hooray3.png","hooray2.png","hooray1.png","hooray1.png","hooray1.png","hooray1.png");
    
    shovel=loadAnimation("shovel1.png","shovel2.png","shovel2.png","shovel2.png","shovel1.png","shovel3.png","shovel3.png","shovel3.png","shovel1.png");
    
    jail=loadAnimation("jail1.png","jail2.png","jail3.png","jail4.png","jail5.png","jail6.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png","jail7.png");
    
    dig=loadImage("dig.png");
    
    win=loadAnimation("win1.png","win2.png","win3.png","win4.png","win5.png","win6.png");
lose=loadAnimation("lose1.png","lose2.png","lose3.png","lose4.png","lose6.png","lose7.png");
    
}
function setup(){
	createCanvas(1800,600);
    frameRate(800);

}

function draw(){
	//var answer = whichOne();
	//console.log(answer);
scene();
   
    //}
	console.log("this is number",number);
    console.log("this is count:",count);
     console.log("this is next:",next);
    console.log("this is score:",score);
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
			background(255);
            image(house);
              textSize(32);
              fill(0);
            text("Click on the door", 450, 100);
            text("to enter.",475,130);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
		case 2:
			background(255);
             image(house2);
             textSize(32);
              fill(0);
            text("Click on the door", 450, 100);
            text("to enter.",475,130);
             
			break;
            
        case 3:
            background(255);
            
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
    next=1;
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
switch(next){
        case 1:
			background(255);
        textSize(32);
              fill(0);
            text("WELCOME HOME!", 250, 200);
        text("You're just in time for the family reunion!", 120, 230);
         text("Let's see who's home...", 220, 330);
        text("Press 1 >>", 420, 580);
			break;  // if you don't put in break statements, it will continute
					// on and excute the next case
	
            
        case 2:
        background(255);
        animation(momblink,800/2,350);
        textSize(32);
              fill(0);
            text("Your mom", 110, 200);
         text("Press 2 >>", 420, 580);
            
        //next=1;
        //number=1;
            break;
    case 3: background(255);
        animation(dadblink,800/2,260);
        textSize(32);
              fill(0);
            text("Your dad", 110, 200);
         text("Press 3 >>", 420, 580);
        
        break;
        
         case 4: background(255);
        animation(broblink,800/2,260);
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
        animation(uncleblink,480,300);
        textSize(32);
              fill(0);
            text("Your weird", 110, 200);
        text("uncle", 130, 230);
         text("Press 6 >>", 550, 580);
        
        break;
        
        case 7: background(255);
        
        textSize(32);
              fill(0);
            text("HOW TO PLAY:", 330, 200);
         text("Today is your Family Reunion!!!", 220, 260);
        text("But you DON'T wanna see these crazy people...", 130, 290);
      
        text("You have one hour to escape the madness.",130,360);
       text("MAKE THE RIGHT CHOICES TO SAVE TIME", 110, 390);
          
        text("3 Wrong Decisions and You Lose!", 220, 490);
         text("Press Enter >>", 620, 580);
        
        break;
        
    case 8: background(255);
      animation(momtater,800/2,350);
        textSize(32);
              fill(0);
            text("Your mom asks you", 650, 100);
        text("to help peel some potatoes.", 600,130);
       text("You respond: ", 690,200);
        
     text("1. Of course, mom!", 600,250);
        text("2. Can't someone else do it?", 600,300);
        
        text("Press 1 or 2 >>", 600,580);
        break;
        
    case 9: background(255);//choose first option
        animation(peel, 400, height/2);
        textSize(32);
              fill(0);
        text("You peel the potatoes,", 650, 100);
        text("and it only takes you 10 minutes!", 650, 140);
        text("Good choice!", 650, 170);
         text("Press Enter >>",600,580);
     break;
        
    case 10: background(255);
 animation(madmom,400,350);
         textSize(32);
              fill(0);
        text("Your mom yells at you", 650, 100);
        text("for being unhelpful", 650, 140);
       text("and insists you peel the potatoes.",650,180);
        text("Bad choice.",650,280);
            text("This takes you 20 minutes, uh oh!",650,320);
        
        text("Press Enter >>",600,580);
        
        
        break;
        
    case 11: background(255);
        animation(dadvideo,400, height/2);
         textSize(32);
              fill(0);
          text("Your dad asks you", 700, 100);
        text("to watch home videos with him.", 600,130);
        
       text("You respond: ", 740,200);
        
     text("1. Hit the road, Jack!", 650,250);
        text("2. Sure thing, dad.", 650,300);
        
        text("Press 1 or 2 >>", 600,580);
        //text
        break;
        
    case 12: background(255);
        animation(saddad,400,height/2);
         textSize(32);
              fill(0);
        text("Look what you did to your dad.", 650, 100);
        text("But you got out in just 5 minutes!", 650, 140);
        text("Good choice!", 650, 170);
         text("Press Enter >>",600,580);
        break;
        
    case 13: background(255);
        animation(baby,400,height/2);
         textSize(32);
              fill(0);
         text("Look how cute you are!", 620, 100);
        text("But you wasted 20 minutes...bad choice.", 620, 140);
         text("Press Enter >>",600,580);
        break;
        
    case 14:background(255);
       
        animation(couch,400, height/2);
         animation(music,400,height/2);
        textSize(32);
              fill(0);
          text("You see your brother on the couch", 600, 100);
        text("listening to music.", 600,130);
       text("Do you want to: ", 740,200);
        
     text("1. Try to sneak upstairs.", 650,250);
        text("2. Ask your brother", 650,300);
             text("what he's listening to.", 650,340);
        
        text("Press 1 or 2 >>", 600,580);
        break;
        
    case 15: background(255);
        animation(momstair,400,height/2);
         textSize(32);
              fill(0);
        textSize(32);
              fill(0);
        text("Oh there you are.", 650, 70);
        text("Your mom needs you", 650, 110);
        text("to peel the apples too!", 650, 150);
        text("Bad choice.", 800, 280);
             text("This takes 20 minutes!", 800, 320);
         text("Press Enter >>",800,580);
        break;
    case 16: background(255);
        
         animation(couch,400, height/2);
        push();
        scale(2);
         animation(music,270,230);
        pop();
        textSize(32);
              fill(0);
         text("Your brother scoffs", 650, 100);
        text("and turns up his music.", 650, 140);
        text("You get away in 2 minutes.", 650, 180);
             text("Good choice.", 650, 260);
         text("Press Enter >>",600,580);
        break;
        
    case 17: background(255);
        animation(sweater, 400,height/2);
         textSize(32);
              fill(0);
          text("You grandma knitted you a sweater.", 600, 100);
        text("She wants you to try it on.", 600,130);
       text("You respond:", 740,200);
        
     text("1. It's too hot for a sweater.", 650,250);
        text("2. Sure, I'll try it on.", 650,300);
        
        text("Press 1 or 2 >>", 600,580);
        break;
        
    case 18: background(255);
        animation(blur, 400,height/2);
        textSize(32);
              fill(0);
        text("Your grandma doesn't mind.", 350, 370);
        text("Instead, she tells you a story from the old days.", 350, 410);
       //text("from the old days.",350,440);
        text("Bad choice. This takes you 20 minutes. But what a story!",350,500);
        
        text("Press Enter >>",600,580);
        
        break;
        
    case 19:background(255);
        animation(hooray, 400,height/2);
         textSize(32);
              fill(0);
        text("You look great in the sweater!", 650, 100);
        text("Grandma approves.", 650, 140);
      
        text("Good choice!",650,280);
            text("This only took you 4 minutes.",650,320);
        
        text("Press Enter >>",600,580);
        break;
        
    case 20: background(255);
        animation(shovel,400,height/2);
        textSize(32);
              fill(0);
          text("Your weird uncle wants", 650, 100);
        text("help burying...something.",650,130);
        text("You decide to:", 650,160);
        
     text("1. You lend him a hand. ", 650,250);
        text("2. Alert the authorities.", 650,300);
        
        text("Press 1 or 2 >>", 600,580);
        break;
        
    case 21: background(255);
        image(dig,0,0);
         textSize(32);
              fill(0);
         text("No one will ever know...", 650, 100);
        
        text("And it only took you 3 minutes!",650,280);
             text("Good choice!",650,320);
        
        text("Press Enter >>",600,580);
        break;
        
    case 22: background(255);
        animation(jail,400,height/2);
         textSize(32);
              fill(0);
        text("Bad choice.", 780, 100);
        text("Your weird uncle was caught",780, 140);
        text("And the arrest took 20 minutes!",780,200);
        
        text("Press Enter >>",850,580);
        break;
        
    case 23: background(255);//lose
        animation(lose,400,height/2);
        break;
        
    case 24: background(255);//win
        animation(win,400,height/2);
        textSize(32);
        fill(0);
        text("Congrats! You made it out with time to spare.",50,height/2);
        break;
        
        


}

}


 function changeFamily(){

     if(keyIsPressed && keyCode==49&& state2==true){
next=2;
state2=false;
         state3=true;
  

}
          if(keyIsPressed && keyCode==50 &&state3==true){
next=3;
              state3=false;
state4=true;
 
}
     
          if(keyIsPressed && keyCode==51&&state4==true){//
next=4;
state4=false;
              state5=true;
 
}
     
          if(keyIsPressed && keyCode==52&&state5==true){
next=5;
              state5=false;
state6=true;
             

}
     if(keyIsPressed && keyCode==53&&state6==true){
next=6;
              state6=false;
state7=true;
             

}
       if(keyIsPressed && keyCode==54&&state7==true){
next=7;
              state7=false;
state8=true;
             
   

}
     if(keyIsPressed && keyCode==ENTER &&state8==true){
next=8;
              state8=false;
state9=true;
             
   

}
     
     if(keyIsPressed && keyCode==49 &&state9==true){//good choice
next=9;
              state9=false;
state10=true;
             
   

}
      if(keyIsPressed && keyCode==50 &&state9==true){//bad choice
next=10;
              state9=false;
state10=true;
          score++;
             
   
}
     
     if(keyIsPressed && keyCode==13 &&state10==true){
next=11;
              state10=false;
state11=true;
     }

      
     if(keyIsPressed && keyCode==49 &&state11==true){//good choice
next=12;
              state11=false;
state12=true;
     }
if(keyIsPressed && keyCode==50 &&state11==true){//bad choice
next=13;
              state11=false;
state12=true;
     score++;
     }
     
     if(keyIsPressed && keyCode==13 &&state12==true){
next=14;
              state12=false;
state13=true;
     }
     if(keyIsPressed && keyCode==49 &&state13==true){//bad choice
next=15;
              state13=false;
          score++;
state14=true;
     }
   if(keyIsPressed && keyCode==50 &&state13==true){//good choice
next=16;
              state13=false;
state14=true;
     }
     if(keyIsPressed && keyCode==13 &&state14==true){
next=17;
              state14=false;
state15=true;
     }
        
        if(keyIsPressed && keyCode==49 &&state15==true){//bad choice
next=18;
              state15=false;
state16=true;
             score++;
     }

if(keyIsPressed && keyCode==50 &&state15==true){//good choice
next=19;
              state15=false;
state16=true;
     }
     
     if(keyIsPressed && keyCode==13 &&state16==true){
next=20;
              state16=false;
state17=true;
     }
     if(keyIsPressed && keyCode==49 &&state17==true){//good choice
next=21;
              state17=false;
state18=true;
     }
     if(keyIsPressed && keyCode==50 &&state17==true){//bad choice
next=22;
              state17=false;
          score++;
state18=true;
     }
     
     if(score>2){
         next=23;
         
         state19=true;
     }
     
     if(keyIsPressed && keyCode==13 && state18==true && score<3){
next=24;
              state18=false;
         state19=true;
     }
   
    }
    



