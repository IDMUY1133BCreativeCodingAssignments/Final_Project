function Balloon(){ //constructor
    this.ballLocX = windowWidth/2;
    this.ballLocY = windowHeight/2;
    this.translateY = 10;
    this.run = 1;
}

Balloon.prototype.breathe = function(){
    
    if(this.run == 1){ 
    this.milliseconds = millis();  
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000;
    this.run = 2; //prevents fourSecond, sevenSecond, and eightSecond from constantly updating
    }
    
    if(millis()<this.fourSecond){
        this.translateY = this.translateY - 1;  //balloon rises 
    }
    else if(millis() < this.sevenSecond){
        this.translateY = this.translateY - random(-.5, .5); //lets balloon "hover" rather than staying the same
    }
   else if(millis() < this.eightSecond){
        this.translateY = this.translateY + .5; //balloon goes back down
    }  
     else if(millis() > this.eightSecond){
        this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
    }
}

Balloon.prototype.breatheDisplay = function(colorFill){ //accepts color of balloon as parameter
    background(158, 212, 255);
    push();
    fill(0);
    stroke(0);
    strokeWeight(1);
    fill(colorFill);
    pop();
    push();
    translate(0, this.translateY);
    noFill();
    bezier(this.ballLocX, this.ballLocY, this.ballLocX - 5, this.ballLocY + 30, this.ballLocX + 5, this.ballLocY + 50, this.ballLocX - 10, this.ballLocY + 80);
    fill(red);
    noStroke();
    triangle(this.ballLocX, this.ballLocY+10, this.ballLocX - 10, this.ballLocY + 40, this.ballLocX + 10,  this.ballLocY + 40);
    ellipse(this.ballLocX, this.ballLocY, 60, 65);    
    pop();
}
Balloon.prototype.reset = function(){ //normalizes all values if button is pressed again
    this.ballLocX = windowWidth/2;
    this.ballLocY = windowHeight/2;
    this.translateY = 10;
    this.run = 1;
}