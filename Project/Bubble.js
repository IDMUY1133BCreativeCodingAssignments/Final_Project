function Bubble(){ //constructor
    this.bubbLocX = windowWidth/2;
    this.bubbLocY = windowHeight/2;
    this.run = 1;
}

Bubble.prototype.breathe = function(){ //maybe accept parameter that tells it how to update the location?
    
if(this.run == 1){ 
    this.milliseconds = millis();  
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000;
    this.run = 2;//prevents fourSecond, sevenSecond, and eightSecond from constantly updating
    }
    
    if(millis()<this.fourSecond){
        this.bubbLocY = this.bubbLocY - 1 ; //bubble will rise up
    }
    else if(millis() < this.sevenSecond){
        this.bubbLocY = this.bubbLocY; //locationY will stay the same for the seven seconds but offset is still changing
    }
   else if(millis() < this.eightSecond){
        this.bubbLocY = this.bubbLocY + .5; //bubble will go down 
    }
     else if(millis() > this.eightSecond){ //after first cycle goes through, allows it to loop
        this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
    }
}

Bubble.prototype.breatheDisplay = function(bckgFill, colorFill){
    background(bckgFill);
    noStroke();
    fill(colorFill);
    ellipse(this.bubbLocX, this.bubbLocY, 50, 50);
     fill(255);
    ellipse(this.bubbLocX + 7, this.bubbLocY - 8, 10, 10); //the little highlight of the bubble
    this.offset = random(-1, 1); //makes bubble not travel in a completely straight line
    this.bubbLocX = this.offset + this.bubbLocX;
}

Bubble.prototype.reset = function(){ //normalizes all values if bubble button is pressed
    this.bubbLocX = windowWidth/2;
    this.bubbLocY = windowHeight/2;
    this.run = 1;
}

