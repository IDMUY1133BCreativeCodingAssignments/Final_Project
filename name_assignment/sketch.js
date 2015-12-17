var doorOpen;

function preload(){
    house = loadImage('house.jpg');
    house2 = loadImage('house2.jpg');
    dadblink = loadAnimation("Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png", "dad2a.png", "dad3a.png", "dad4a.png", "dad3a.png", "dad2a.png");

}


function setup(){
createCanvas(800,600);


}

function draw(){
background(255);

    
   // animation(dadblink, width/2, height/2);
       image(house2);
    
       if(mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317){
           image(house);
     console.log("yay");
          
       }
    else{
        image(house2);
    }
    
    
    
   

    if(mouseX>367 && mouseX<407 && mouseY>261 && mouseY<317 && mouseIsPressed){
    animation(dadblink, width/2, height/2);
        console.log("boo");
    }
    
    
  

}
