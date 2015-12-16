//first step create the character with images from AI
// have functions within the class for different animations 
//function for the damage and health 


function Character(){
 var body = loadImage("media\body.PNG"); //loads images
 var leftArm = loadImage("media\left arm.PNG");
 var rightArm = loadImage("media\right arm.PNG");
 var legs = loadImage("media\legs.PNG");
    
    this.strawberry = function(xloc, yloc){
        image(body, xloc, yloc); //tries to portray the image
        ellipse(234,123,123,12);
              
    }
}
    
