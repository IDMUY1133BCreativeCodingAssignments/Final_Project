function Candle(){ //constructor
    this.run = 1; 
    this.translateY = 0;
    rectMode(CORNERS);//set rectMode for candles
}

Candle.prototype.breathe = function(){
    if(this.run == 1){
    this.milliseconds = millis();  
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000;
    this.run = 2;
    }
    if(millis()<this.fourSecond){
         this.translateY = this.translateY + .5; //candle melts faster
         fill(255, 144, 134); //changes color to red
    }
    else if(millis() < this.sevenSecond){
        this.translateY = this.translateY + .3; //candle melts a little slower
        fill(118, 225, 115); //changes color to green
    }
   else if(millis() < this.eightSecond){
        this.translateY = this.translateY + .1; //candle melts slowest
        fill(93, 198, 225); //changes color to blue
   }  
     else if(millis() > this.eightSecond){ //will do this once it goes past the eight seconds
        this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
        this.translateY = 0; //normalizes translation
    }
}

Candle.prototype.breatheDisplay = function(colorFill){
    background(180);
    noStroke();
    push();
    fill(colorFill, 50);
    translate(14, this.translateY);
    triangle(windowWidth/2 + 1, windowHeight/2-60, windowWidth/2 + 39, windowHeight/2 - 60, windowWidth/2 + 20, windowHeight/2-100);
    ellipse(windowWidth/2 + 20, windowHeight/2 - 60, 37, 40);
    pop(); 
    push();
    noStroke();
    rect(windowWidth/2 + 15, windowHeight/2 - 20 + this.translateY, windowWidth/2 + 50, windowHeight/2 + 250);
    pop();
}

Candle.prototype.reset = function(){ //sets things back to original if button is pressed
    this.translateY = 0;
    this.run = 1;
}